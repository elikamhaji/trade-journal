export const page = String.raw`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Trade Journal</title>
<link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,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">
<style>
:root{color-scheme:dark;--bg:#09090b;--panel:#141417;--edge:#2a2a2f;--muted:#a3a3ad;--ink:#f5f5f7;--green:#79e7b3;--red:#f79a9a}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px system-ui,sans-serif}header{border-bottom:1px solid var(--edge)}header div,main{max-width:1200px;margin:auto;padding:18px 26px}header div,.split,.filters,.actions{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.brand{font-weight:700;display:flex;gap:11px;align-items:center}.mark{display:grid;place-items:center;width:30px;height:30px;background:#183629;color:var(--green);border-radius:8px}h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.045em;margin:0}h2{margin:0;font-size:20px}h3{margin:0;font-size:16px}p{color:var(--muted);margin:8px 0 0}main{padding-top:42px}.panel,.card,dialog{background:var(--panel);border:1px solid var(--edge);border-radius:14px}.panel{padding:20px;margin-top:18px}.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:16px}.card{padding:17px}.card span,label{color:var(--muted);font-size:13px}.card strong{display:block;font-size:clamp(19px,3vw,28px);margin:7px 0 2px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.green,a{color:var(--green)}.red,[role=alert]{color:var(--red)}button,input,select{font:inherit;border:1px solid var(--edge);border-radius:8px;padding:9px 12px;color:var(--ink);background:#101013}button{cursor:pointer;font-weight:600}button:hover{border-color:#7b7b86}button:disabled{opacity:.6;cursor:wait}.primary{background:var(--green);color:#092016;border-color:var(--green)}:focus-visible{outline:2px solid var(--green);outline-offset:3px}label{display:grid;gap:6px}input,select{min-width:0}.table{overflow-x:auto;margin:14px -20px -20px}table{border-collapse:collapse;width:100%;white-space:nowrap}th,td{text-align:left;padding:12px 16px;border-top:1px solid var(--edge)}th{font-size:12px;color:var(--muted);font-weight:600}td button{padding:5px 9px;font-size:13px;margin-right:4px}.empty{text-align:center;padding:32px;color:var(--muted)}.pill{display:inline-block;padding:3px 8px;border-radius:6px;background:#222228}.lock{max-width:410px;margin:10vh auto 0}.lock form{display:grid;gap:14px;margin-top:22px}dialog{width:min(520px,calc(100% - 24px));padding:24px;color:var(--ink)}dialog::backdrop{background:#000b}.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}.wide{grid-column:1/-1}[hidden]{display:none!important}.plot{display:flex;align-items:center;justify-content:center;min-height:130px;margin-top:16px;color:var(--muted)}.plot svg{width:100%;height:130px;overflow:visible}small{color:var(--muted)}@media(max-width:660px){header div,main{padding-left:14px;padding-right:14px}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.filters{justify-content:flex-start}}
.choices{border:0;padding:0;margin:0;min-width:0}.choices legend{color:var(--muted);font-size:13px;margin-bottom:6px}.choices div{display:flex;flex-wrap:wrap;gap:6px}.choices label{display:block;position:relative;cursor:pointer}.choices input{position:absolute;opacity:0;width:1px;height:1px}.choices span{display:block;padding:8px 11px;border:1px solid var(--edge);border-radius:8px;background:#101013;color:var(--ink);font-weight:600}.choices input:checked+span{background:#183629;color:var(--green);border-color:var(--green)}.choices input:focus-visible+span{outline:2px solid var(--green);outline-offset:2px}.amber{color:#f4c575}dialog{max-height:calc(100dvh - 24px)}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:420px){.grid{grid-template-columns:1fr}}
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
<div><h3>Filters</h3><p id="rangeText">All dates</p></div>
<div class="filters">
<label>Pair<select id="pairFilter"><option value="">All pairs</option></select></label>
<label>Timeframe<select id="frameFilter"><option value="">All timeframes</option><option value="15m">15M</option><option value="1h">1H</option><option value="4h">4H</option></select></label>
<label>From<input id="from" type="date" aria-label="From date"></label><label>Through<input id="through" type="date" aria-label="Through date"></label>
<label>Quick range<select id="preset"><option value="all">All time</option><option value="week">This week</option><option value="month">This month</option><option value="custom">Custom</option></select></label>
</div></div><p id="notice" role="alert"></p>
<div id="cards" class="cards"></div>
<section class="panel"><div class="split"><div><h2>Cumulative R</h2><p>Running total of your trade results in R</p></div><strong id="net"></strong></div><div id="plot" class="plot"></div></section>
<section class="panel"><div class="split"><div><h2>Trade history</h2><p id="count"></p></div></div>
<div class="table"><table><thead><tr><th>Pair</th><th>Date</th><th>Timeframe</th><th>Direction</th><th>TradingView</th><th>Result</th><th>Result in R</th><th>Actions</th></tr></thead><tbody id="rows"></tbody></table></div></section>
</section>
</main>
<dialog id="editor"><form id="entry"><h2 id="entryTitle">Add trade</h2><div class="grid">
<label>Pair<input name="pair" list="pairOptions" placeholder="EURUSD" required maxlength="30" autocomplete="off" autocapitalize="characters"><datalist id="pairOptions"></datalist></label>
<label>Date<input name="date" type="date" required></label>
<fieldset class="choices " id="frameChoices"><legend>Timeframe</legend><div><label><input type="radio" name="frame" value="15m" checked required><span>15M</span></label><label><input type="radio" name="frame" value="1h" required><span>1H</span></label><label><input type="radio" name="frame" value="4h" required><span>4H</span></label></div></fieldset>
<fieldset class="choices " id="sideChoices"><legend>Direction</legend><div><label><input type="radio" name="side" value="Long" checked required><span>Long</span></label><label><input type="radio" name="side" value="Short" required><span>Short</span></label></div></fieldset>
<label class="wide">TradingView link <input name="link" type="url" placeholder="https://www.tradingview.com/…" maxlength="2000"></label>
<fieldset class="choices wide" id="outcomeChoices"><legend>Result</legend><div><label><input type="radio" name="outcome" value="Win" required><span>Win</span></label><label><input type="radio" name="outcome" value="Loss" required><span>Loss</span></label><label><input type="radio" name="outcome" value="Open" checked required><span>Open</span></label></div></fieldset>
<fieldset class="choices wide" id="amountChoices"><legend>R multiple</legend><div><label><input type="radio" name="amount" value="0.5"><span>0.5R</span></label><label><input type="radio" name="amount" value="1"><span>1R</span></label><label><input type="radio" name="amount" value="1.5"><span>1.5R</span></label><label><input type="radio" name="amount" value="2"><span>2R</span></label></div></fieldset>
</div><p id="entryError" role="alert"></p>
<div class="actions"><button type="button" id="cancel">Cancel</button><button id="save" class="primary">Save trade</button></div></form></dialog>
<script>
const $ = id => document.getElementById(id);
const r = value => value == null ? '—' : new Intl.NumberFormat('en-US',{maximumFractionDigits:2,signDisplay:'exceptZero'}).format(value/100)+'R';
const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Panama',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const day = 86400000;
const dateOf = time => new Date(time).toISOString().slice(0,10);
const currencies = ['EUR','GBP','AUD','NZD','USD','CAD','CHF','JPY'];
const standardPairs = currencies.flatMap((base,i)=>currencies.slice(i+1).map(quote=>base+quote));
let trades = [], editing;
function updatePairs() {
  const select=$('pairFilter'), current=select.value;
  const pairs=[...new Set([...standardPairs,...trades.map(t=>t.pair)])].sort();
  select.replaceChildren(new Option('All pairs',''),...pairs.map(p=>new Option(p,p)));
  select.value=pairs.includes(current)?current:'';
  $('pairOptions').replaceChildren(...pairs.map(p=>new Option(p,p)));
}
async function api(path, method='GET', body) {
  const response = await fetch('/api/'+path,{method,headers:body ? {'Content-Type':'application/json'} : {},body:body && JSON.stringify(body)});
  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error(data.error),{status:response.status});
  return data;
}
function lock() {
  trades=[];
  updatePairs();
  $('journal').hidden=$('logout').hidden=true;
  $('locked').hidden=false;
  if ($('editor').open) $('editor').close();
  for (const id of ['rows','cards','plot','net','count','notice']) $(id).replaceChildren();
  $('entry').reset();
}
async function load() {
  try {
    trades=await api('trades');
    updatePairs();
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
  const pair=$('pairFilter').value, frame=$('frameFilter').value;
  const selected=invalid ? [] : trades.filter(t=>(!from||t.date>=from)&&(!through||t.date<=through)&&(!pair||t.pair===pair)&&(!frame||t.frame===frame));
  $('rangeText').textContent=from && through ? from+' to '+through : from ? 'Since '+from : through ? 'Through '+through : 'All dates';
  $('notice').textContent=invalid?'Choose an end date on or after the start date.':'';
  const count=selected.length;
  const closed=selected.filter(t=>t.outcome==='Win'||t.outcome==='Loss');
  const wins=closed.filter(t=>t.outcome==='Win').length;
  const scored=closed.filter(t=>t.hundredths_r!=null);
  const gross=scored.reduce((sum,t)=>sum+Math.max(t.hundredths_r,0),0);
  const loss=scored.reduce((sum,t)=>sum+Math.min(t.hundredths_r,0),0);
  const net=gross+loss;
  const rate=n=>closed.length?(100*n/closed.length).toFixed(1)+'%':'—';
  $('cards').replaceChildren(card('Net R',r(net),net<0?'red':'green'),card('Win rate',rate(wins),'green'),card('Loss rate',rate(closed.length-wins),'red'),card('Closed trades',closed.length),card('Gross gained',r(gross),'green'),card('Gross lost',r(loss),'red'),card('Average R per trade',r(scored.length?Math.round(net/scored.length):null)),card('Open trades',count-closed.length));
  $('count').textContent=count+' matching '+(count===1?'trade':'trades');
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
    const result=node('td','');result.append(node('span',t.outcome,'pill '+(t.outcome==='Open'?'amber':t.outcome==='Loss'?'red':'green')));
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
    row.append(link,result,node('td',r(t.outcome==='Open'?null:t.hundredths_r),t.outcome==='Open'?'amber':t.outcome==='Loss'?'red':'green'),actions);
    return row;
  });
  if(!count){
    const row=node('tr',''), cell=node('td',trades.length?'No trades match these filters.':'No trades yet. Add your first trade to start tracking performance.','empty');
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
const amountPresets=['0.5','1','1.5','2'];
function syncAmount() {
  const isOpen=$('entry').elements.outcome.value==='Open';
  $('amountChoices').hidden=isOpen;
  $('amountChoices').disabled=isOpen;
}
$('outcomeChoices').onchange=syncAmount;
function openEditor(t) {
  const form=$('entry');
  form.reset();
  editing=t?.id||crypto.randomUUID();
  $('entryTitle').textContent=t?'Edit trade':'Add trade';
  $('entryError').textContent='';
  $('legacyAmount')?.remove();
  const amount=t?.hundredths_r?String(Math.abs(t.hundredths_r)/100):'';
  if(amount&&!amountPresets.includes(amount)){
    const label=node('label','');
    label.id='legacyAmount';
    const input=node('input','');
    input.type='radio'; input.name='amount'; input.value=amount;
    label.append(input,node('span',amount+'R'));
    $('amountChoices').querySelector('div').append(label);
  }
  for(const [key,value] of Object.entries(t?{...t,amount}:{date:today()})){
    if(form.elements[key]) form.elements[key].value=value;
  }
  syncAmount();
  $('editor').showModal();
}
$('entry').onsubmit=async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  const payload=Object.fromEntries(new FormData(form));
  payload.id=editing;
  if(payload.outcome!=='Open'&&!payload.amount){
    $('entryError').textContent='Choose an R multiple for this closed trade.';
    $('amountChoices').querySelector('input').focus();
    return;
  }
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
for(const id of ['pairFilter','frameFilter']) $(id).onchange=render;
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
