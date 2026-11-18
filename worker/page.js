export const page = String.raw`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Trade Journal</title>
<style>
:root{color-scheme:dark;--bg:#09090b;--panel:#141417;--edge:#2a2a2f;--muted:#a3a3ad;--ink:#f5f5f7;--green:#79e7b3;--red:#f79a9a}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px system-ui,sans-serif}header{border-bottom:1px solid var(--edge)}header div,main{max-width:1200px;margin:auto;padding:18px 26px}header div,.split,.filters,.actions{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.brand{font-weight:700;display:flex;gap:11px;align-items:center}.mark{display:grid;place-items:center;width:30px;height:30px;background:#183629;color:var(--green);border-radius:8px}h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.045em;margin:0}h2{margin:0;font-size:20px}h3{margin:0;font-size:16px}p{color:var(--muted);margin:8px 0 0}main{padding-top:42px}.panel,.card,dialog{background:var(--panel);border:1px solid var(--edge);border-radius:14px}.panel{padding:20px;margin-top:18px}.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:16px}.card{padding:17px}.card span,label{color:var(--muted);font-size:13px}.card strong{display:block;font-size:clamp(19px,3vw,28px);margin:7px 0 2px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.green,a{color:var(--green)}.red,[role=alert]{color:var(--red)}button,input,select{font:inherit;border:1px solid var(--edge);border-radius:8px;padding:9px 12px;color:var(--ink);background:#101013}button{cursor:pointer;font-weight:600}button:hover{border-color:#7b7b86}button:disabled{opacity:.6;cursor:wait}.primary{background:var(--green);color:#092016;border-color:var(--green)}:focus-visible{outline:2px solid var(--green);outline-offset:3px}label{display:grid;gap:6px}input,select{min-width:0}.table{overflow-x:auto;margin:14px -20px -20px}table{border-collapse:collapse;width:100%;white-space:nowrap}th,td{text-align:left;padding:12px 16px;border-top:1px solid var(--edge)}th{font-size:12px;color:var(--muted);font-weight:600}td button{padding:5px 9px;font-size:13px;margin-right:4px}.empty{text-align:center;padding:32px;color:var(--muted)}.pill{display:inline-block;padding:3px 8px;border-radius:6px;background:#222228}.pace{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:14px}.pace .card{background:#101013}.lock{max-width:410px;margin:10vh auto 0}.lock form{display:grid;gap:14px;margin-top:22px}dialog{width:min(520px,calc(100% - 24px));padding:24px;color:var(--ink)}dialog::backdrop{background:#000b}.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}.wide{grid-column:1/-1}[hidden]{display:none!important}.plot{display:flex;align-items:center;justify-content:center;min-height:130px;margin-top:16px;color:var(--muted)}.plot svg{width:100%;height:130px;overflow:visible}small{color:var(--muted)}@media(max-width:660px){header div,main{padding-left:14px;padding-right:14px}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.pace{gap:5px}.pace .card{padding:9px}.filters{justify-content:flex-start}}
</style></head>
<body>
<header><div><span class="brand"><span class="mark" aria-hidden="true">↗</span> Trade Journal</span><button id="logout" hidden>Lock journal</button></div></header>
<main>
<section id="locked" class="panel lock" hidden><h2>Unlock your journal</h2><p>Enter your password to access your trades.</p>
<form id="login"><label>Password<input name="password" type="password" autocomplete="current-password" required></label><button class="primary">Unlock journal</button><div id="loginError" role="alert"></div></form></section>
<p id="loading" role="status">Opening journal…</p>
<section id="journal" hidden>
<div class="split"><h1>Trading overview</h1><button id="add" class="primary">＋ Add trade</button></div>
<div class="panel split">
<div><h3>Date range</h3><p id="rangeText">All dates</p></div>
<div class="filters">
<label>From<input id="from" type="date" aria-label="From date"></label><label>Through<input id="through" type="date" aria-label="Through date"></label>
<label>Quick range<select id="preset"><option value="all">All time</option><option value="week">This week</option><option value="month">This month</option><option value="custom">Custom</option></select></label>
</div></div><p id="notice" role="alert"></p>
<div id="cards" class="cards"></div>
<section class="panel"><div class="split"><div><h2>Cumulative R</h2><p>Running total of your trade results in R</p></div><strong id="net"></strong></div><div id="plot" class="plot"></div></section>
<section class="panel"><h2>Trading frequency</h2><p>Average across calendar days in the selected range, including days without trades.</p><div id="pace" class="pace"></div></section>
<section class="panel"><div class="split"><div><h2>Trade history</h2><p id="count"></p></div></div>
<div class="table"><table><thead><tr><th>Pair</th><th>Date</th><th>Timeframe</th><th>Direction</th><th>TradingView</th><th>Result</th><th>Result in R</th><th>Actions</th></tr></thead><tbody id="rows"></tbody></table></div></section>
</section>
</main>
<dialog id="editor"><form id="entry"><h2 id="entryTitle">Add trade</h2><div class="grid">
<label>Pair<input name="pair" placeholder="EURUSD" required maxlength="30"></label>
<label>Date<input name="date" type="date" required></label>
<label>Timeframe<select name="frame"><option value="15m">15 minutes</option><option value="1h">1 hour</option><option value="4h">4 hours</option></select></label>
<label>Direction<select name="side"><option>Long</option><option>Short</option></select></label>
<label class="wide">TradingView link <input name="link" type="url" placeholder="https://www.tradingview.com/…" maxlength="2000"></label>
<label>Result<select name="outcome"><option>Win</option><option>Loss</option></select></label>
<label>R multiple<input name="amount" type="number" inputmode="decimal" min="0.01" max="99999999.99" placeholder="1 or 0.5" step="0.01" required></label>
</div><small>Enter a positive multiple of the amount risked. A loss of 1 is recorded as −1R.</small><p id="entryError" role="alert"></p>
<div class="actions"><button type="button" id="cancel">Cancel</button><button id="save" class="primary">Save trade</button></div></form></dialog>
<script>
const $ = id => document.getElementById(id);
const r = value => value == null ? '—' : new Intl.NumberFormat('en-US',{maximumFractionDigits:2,signDisplay:'exceptZero'}).format(value/100)+'R';
const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Panama',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const day = 86400000;
const dateOf = time => new Date(time).toISOString().slice(0,10);
let trades = [], editing;
async function api(path, method='GET', body) {
  const response = await fetch('/api/'+path,{method,headers:body ? {'Content-Type':'application/json'} : {},body:body && JSON.stringify(body)});
  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error(data.error),{status:response.status});
  return data;
}
function lock() {
  trades=[];
  $('journal').hidden=$('logout').hidden=true;
  $('locked').hidden=false;
  if ($('editor').open) $('editor').close();
  for (const id of ['rows','cards','pace','plot','net','count','notice']) $(id).replaceChildren();
  $('entry').reset();
}
async function load() {
  try {
    trades=await api('trades');
    $('locked').hidden=true;
    $('journal').hidden=$('logout').hidden=false;
    render();
  } catch(error) {
    if(error.status===401) lock();
    throw error;
  }
}
function node(tag,text,klass) {
  const element=document.createElement(tag);
  element.textContent=text;
  if(klass) element.className=klass;
  return element;
}
function card(label,value,klass) {
  const item=node('div','','card');
  item.append(node('span',label),node('strong',value,klass));
  return item;
}
function render() {
  const from=$('from').value, through=$('through').value;
  const invalid=from && through && from>through;
  const selected=invalid ? [] : trades.filter(t=>(!from||t.date>=from)&&(!through||t.date<=through));
  $('rangeText').textContent=from && through ? from+' to '+through : from ? 'Since '+from : through ? 'Through '+through : 'All dates';
  $('notice').textContent=invalid?'Choose an end date on or after the start date.':'';
  const count=selected.length, wins=selected.filter(t=>t.outcome==='Win').length;
  const scored=selected.filter(t=>t.hundredths_r!=null);
  const gross=scored.reduce((sum,t)=>sum+Math.max(t.hundredths_r,0),0);
  const loss=scored.reduce((sum,t)=>sum+Math.min(t.hundredths_r,0),0);
  const net=gross+loss;
  const rate=n=>count?(100*n/count).toFixed(1)+'%':'—';
  $('cards').replaceChildren(card('Net R',r(net),net<0?'red':'green'),card('Win rate',rate(wins),'green'),card('Loss rate',rate(count-wins),'red'),card('Total trades',count),card('Gross gained',r(gross),'green'),card('Gross lost',r(loss),'red'),card('Average R per trade',r(scored.length?Math.round(net/scored.length):null)),card('Trades with R',scored.length));
  const first=from||selected.at(-1)?.date, last=through||selected[0]?.date;
  const days=first&&last&&!invalid?Math.max(0,(Date.parse(last)-Date.parse(first))/day+1):0;
  $('pace').replaceChildren(...[['Per day',1],['Per week',7],['Per month',365.2425/12]].map(([label,multiplier])=>card(label,days?(count/days*multiplier).toFixed(2):'—')));
  $('count').textContent=count+' '+(count===1?'trade':'trades')+' in this range'+(scored.length<count?' · '+(count-scored.length)+' awaiting R values':'');
  $('net').textContent=r(net);
  $('net').className=net<0?'red':'green';
  const rows=selected.map(t=>{
    const row=node('tr','');
    for(const value of [t.pair,t.date,t.frame,t.side]) row.append(node('td',value));
    const link=node('td','—');
    if(t.link){
      const anchor=node('a','View chart ↗');
      anchor.href=t.link;anchor.target='_blank';anchor.rel='noopener noreferrer';
      link.replaceChildren(anchor);
    }
    const result=node('td','');result.append(node('span',t.outcome,'pill '+(t.outcome==='Loss'?'red':'green')));
    const actions=node('td','');
    const edit=node('button','Edit'), remove=node('button','Delete');
    edit.onclick=()=>openEditor(t);
    remove.onclick=async()=>{
      if(!window.confirm('Delete this '+t.pair+' trade?')) return;
      remove.disabled=true;
      try{await api('trades?id='+encodeURIComponent(t.id),'DELETE');await load();}
      catch(error){$('notice').textContent=error.message;remove.disabled=false;}
    };
    actions.append(edit,remove);
    row.append(link,result,node('td',r(t.hundredths_r),t.outcome==='Loss'?'red':'green'),actions);
    return row;
  });
  if(!count){
    const row=node('tr',''), cell=node('td',trades.length?'No trades in this date range.':'No trades yet. Add your first trade to start tracking performance.','empty');
    cell.colSpan=8;row.append(cell);rows.push(row);
  }
  $('rows').replaceChildren(...rows);
  $('plot').textContent=scored.length?'':'Your R chart will appear after you add a trade with an R value.';
  if(scored.length){
    const values=[0];
    for(const t of scored.slice().reverse()) values.push(values.at(-1)+t.hundredths_r);
    let low=0,high=0;
    for(const value of values){low=Math.min(low,value);high=Math.max(high,value);}
    const y=value=>120-110*(value-low)/(high-low||1);
    $('plot').innerHTML='<svg viewBox="0 0 800 130" preserveAspectRatio="none" role="img" aria-label="Cumulative R"><line x1="0" x2="800" y1="'+y(0)+'" y2="'+y(0)+'" stroke="#44444c" stroke-dasharray="4 5"/><polyline fill="none" stroke="'+(net<0?'#f79a9a':'#79e7b3')+'" stroke-width="2" vector-effect="non-scaling-stroke" points="'+values.map((value,i)=>i*800/scored.length+','+y(value)).join(' ')+'"/></svg>';
  }
}
function openEditor(t) {
  const form=$('entry');
  form.reset();
  editing=t?.id||crypto.randomUUID();
  $('entryTitle').textContent=t?'Edit trade':'Add trade';
  $('entryError').textContent='';
  for(const [key,value] of Object.entries(t?{...t,amount:t.hundredths_r==null?'':(Math.abs(t.hundredths_r)/100).toFixed(2)}:{date:today()})){
    if(form.elements[key]) form.elements[key].value=value;
  }
  $('editor').showModal();
}
$('entry').onsubmit=async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  const payload=Object.fromEntries(new FormData(form));
  payload.id=editing;
  $('save').disabled=true;
  try{
    await api('trades','POST',payload);
    $('editor').close();
    await load();
  }catch(error){
    if(error.status===401)lock();
    else $( $('editor').open?'entryError':'notice').textContent=error.message;
  }finally{$('save').disabled=false;}
};
$('login').onsubmit=async event=>{
  event.preventDefault();
  const form=event.currentTarget, button=form.querySelector('button');
  button.disabled=true;$('loginError').textContent='';
  try{await api('login','POST',Object.fromEntries(new FormData(form)));form.reset();await load();}
  catch(error){$('loginError').textContent=error.message;}
  finally{button.disabled=false;}
};
$('logout').onclick=async()=>{try{await api('logout','POST');lock();}catch(error){$('notice').textContent=error.message;}};
$('add').onclick=()=>openEditor();
$('cancel').onclick=()=>$('editor').close();
for(const id of ['from','through']) $(id).onchange=()=>{$('preset').value='custom';render();};
$('preset').onchange=()=>{
  const p=$('preset').value, end=today(), now=Date.parse(end);
  if(p==='custom')return;
  $('from').value=p==='week'?dateOf(now-((new Date(now).getUTCDay()+6)%7)*day):p==='month'?end.slice(0,8)+'01':'';
  $('through').value=p==='all'?'':end;
  render();
};
load().catch(error=>{
  if(error.status!==401) {
    lock();$('loginError').textContent=error.message;
  }
}).finally(()=>$('loading').hidden=true);
</script></body></html>`;
