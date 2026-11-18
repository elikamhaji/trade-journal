import { page } from './page.js';

const encoder = new TextEncoder();
const reply = (data, status = 200, headers = {}) => Response.json(data, {
  status, headers: { 'Cache-Control': 'no-store', ...headers }
});
async function sign(key, value) {
  const cryptoKey = await crypto.subtle.importKey('raw', encoder.encode(key), { name:'HMAC', hash:'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(value)));
}
const tag = bytes => Array.from(bytes, b => b.toString(16).padStart(2,'0')).join('');
function equal(a,b) {
  let mismatch = a.length ^ b.length;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ (b.charCodeAt(i) || 0);
  return mismatch === 0;
}
const cookie = value => '__Host-journal=' + value + '; Path=/; HttpOnly; Secure; SameSite=Strict';

function trade(input) {
  const { id, date, frame, side, link, outcome, amount } = input;
  const pair = typeof input.pair === 'string' ? input.pair.trim().toUpperCase() : '';
  const millis = Date.parse(date + 'T00:00:00Z');
  if (!pair || pair.length > 30 || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(millis) ||
      new Date(millis).toISOString().slice(0,10) !== date ||
      !['15m','1h','4h'].includes(frame) || !['Long','Short'].includes(side) ||
      !['Win','Loss'].includes(outcome) || !/^\d{1,8}(\.\d{1,2})?$/.test(amount) ||
      Number(amount) <= 0 || !/^[0-9a-f-]{36}$/.test(id)) throw new Error('Check the trade fields and enter a positive R multiple.');
  if (link) {
    const url = URL.parse(link);
    if (!url || url.protocol !== 'https:' || !['tradingview.com','www.tradingview.com'].includes(url.hostname) ||
        url.username || url.password || link.length > 2000) throw new Error('Enter a valid HTTPS TradingView link.');
  }
  return [id,pair,date,frame,side,link || '',outcome,Math.round(Number(amount)*100)*(outcome === 'Loss' ? -1 : 1)];
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/' && request.method === 'GET') {
      return new Response(page, {headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'}});
    }
    const owner = 'journal-owner';
    if (!env.SESSION_KEY || !env.JOURNAL_PASSWORD) return reply({error:'The journal is missing its login configuration.'},503);
    if (request.method !== 'GET' && request.headers.get('Origin') !== url.origin) return reply({error:'Invalid request origin.'},403);
    try {
      if (url.pathname === '/api/login' && request.method === 'POST') {
        const ip = request.headers.get('CF-Connecting-IP') || 'local';
        const { success } = await env.LOGIN_LIMIT.limit({key:ip});
        if (!success) return reply({error:'Too many attempts. Try again in a minute.'},429);
        const {password} = await request.json();
        if (typeof password !== 'string' || password.length > 256 ||
            !equal(tag(await sign(env.SESSION_KEY,password)),tag(await sign(env.SESSION_KEY,env.JOURNAL_PASSWORD)))) {
          return reply({error:'Incorrect password.'},401);
        }
        const expiry = Date.now() + 43200000;
        const proof = tag(await sign(env.SESSION_KEY, JSON.stringify([owner,expiry,env.JOURNAL_PASSWORD])));
        return reply({},200,{'Set-Cookie':cookie(expiry+'.'+proof)+'; Max-Age=43200'});
      }
      if (url.pathname === '/api/logout' && request.method === 'POST') return reply({},200,{'Set-Cookie':cookie('')+'; Max-Age=0'});
      const raw = /(?:^|;\s*)__Host-journal=([^;]+)/.exec(request.headers.get('Cookie') || '')?.[1] || '';
      const [expiry, proof] = raw.split('.');
      if (!proof || Number(expiry) <= Date.now() || !/^\d{13}$/.test(expiry) ||
          !equal(proof,tag(await sign(env.SESSION_KEY,JSON.stringify([owner,Number(expiry),env.JOURNAL_PASSWORD]))))) {
        return reply({error:'Enter your journal password.'},401);
      }
      if (url.pathname !== '/api/trades') return reply({error:'Page unavailable.'},404);
      const db = env.DB;
      if (request.method === 'GET') {
        const {results} = await db.prepare('SELECT id,pair,date,frame,side,link,outcome,hundredths_r FROM trades WHERE owner=? ORDER BY date DESC,rowid DESC').bind(owner).all();
        return reply(results);
      }
      if (request.method === 'POST') {
        let values;
        try { values = trade(await request.json()); }
        catch (error) { return reply({error:error.message},400); }
        const [id,...fields] = values;
        const result = await db.prepare('INSERT INTO trades (id,owner,pair,date,frame,side,link,outcome,hundredths_r) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET pair=excluded.pair,date=excluded.date,frame=excluded.frame,side=excluded.side,link=excluded.link,outcome=excluded.outcome,hundredths_r=excluded.hundredths_r WHERE trades.owner=excluded.owner').bind(id,owner,...fields).run();
        return result.meta.changes ? reply({}) : reply({error:'Trade could not be updated.'},409);
      }
      if (request.method === 'DELETE') {
        await db.prepare('DELETE FROM trades WHERE owner=? AND id=?').bind(owner,url.searchParams.get('id') || '').run();
        return reply({});
      }
      return reply({error:'Method unavailable.'},405);
    } catch (error) {
      console.error(error);
      return reply({error:'The journal could not complete your request. Try again.'},503);
    }
  }
};
