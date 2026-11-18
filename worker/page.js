export const page = String.raw`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Trade Journal</title>
<link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,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">
<style>
:root{color-scheme:dark;--bg:#09090b;--panel:#141417;--edge:#2a2a2f;--muted:#a3a3ad;--ink:#f5f5f7;--green:#79e7b3;--red:#f79a9a}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px system-ui,sans-serif}header{border-bottom:1px solid var(--edge)}header div,main{max-width:1200px;margin:auto;padding:18px 26px}header div,.split,.filters,.actions{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.brand{font-weight:700;display:flex;gap:11px;align-items:center}.mark{display:grid;place-items:center;width:30px;height:30px;background:#183629;color:var(--green);border-radius:8px}h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.045em;margin:0}h2{margin:0;font-size:20px}h3{margin:0;font-size:16px}p{color:var(--muted);margin:8px 0 0}main{padding-top:42px}.panel,.card,dialog{background:var(--panel);border:1px solid var(--edge);border-radius:14px}.panel{padding:20px;margin-top:18px}.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:16px}.card{padding:17px}.card span,label{color:var(--muted);font-size:13px}.card strong{display:block;font-size:clamp(19px,3vw,28px);margin:7px 0 2px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.green,a{color:var(--green)}.red,[role=alert]{color:var(--red)}button,input,select{font:inherit;border:1px solid var(--edge);border-radius:8px;padding:9px 12px;color:var(--ink);background:#101013}button{cursor:pointer;font-weight:600}button:hover{border-color:#7b7b86}button:disabled{opacity:.6;cursor:wait}.primary{background:var(--green);color:#092016;border-color:var(--green)}:focus-visible{outline:2px solid var(--green);outline-offset:3px}label{display:grid;gap:6px}input,select{min-width:0}.table{overflow-x:auto;margin:14px -20px -20px}table{border-collapse:collapse;width:100%;white-space:nowrap}th,td{text-align:left;padding:12px 16px;border-top:1px solid var(--edge)}th{font-size:12px;color:var(--muted);font-weight:600}td button{padding:5px 9px;font-size:13px;margin-right:4px}.empty{text-align:center;padding:32px;color:var(--muted)}.pill{display:inline-block;padding:3px 8px;border-radius:6px;background:#222228}.lock{max-width:410px;margin:10vh auto 0}.lock form{display:grid;gap:14px;margin-top:22px}dialog{width:min(520px,calc(100% - 24px));padding:24px;color:var(--ink)}dialog::backdrop{background:#000b}.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}.wide{grid-column:1/-1}[hidden]{display:none!important}.plot{display:flex;align-items:center;justify-content:center;min-height:130px;margin-top:16px;color:var(--muted)}.plot svg{width:100%;height:130px;overflow:visible}small{color:var(--muted)}@media(max-width:660px){header div,main{padding-left:14px;padding-right:14px}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.filters{justify-content:flex-start}}
.choices{border:0;padding:0;margin:0;min-width:0}.choices legend{color:var(--muted);font-size:13px;margin-bottom:6px}.choices div{display:flex;flex-wrap:wrap;gap:6px}.choices label{display:block;position:relative;cursor:pointer}.choices input{position:absolute;opacity:0;width:1px;height:1px}.choices span{display:block;padding:8px 11px;border:1px solid var(--edge);border-radius:8px;background:#101013;color:var(--ink);font-weight:600}.choices input:checked+span{background:#183629;color:var(--green);border-color:var(--green)}.choices input:focus-visible+span{outline:2px solid var(--green);outline-offset:2px}.amber{color:#f4c575}dialog{max-height:calc(100dvh - 24px)}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:420px){.grid{grid-template-columns:1fr}}
.strategy-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:18px}#strategyTabs{display:flex;flex-wrap:wrap;gap:8px}#strategyTabs[hidden]{display:none}#manageStrategies{background:none;border:0;padding:6px 2px;color:var(--muted);font-size:.8rem;font-weight:400}#manageStrategies:hover{text-decoration:underline}#strategyTabs [aria-pressed=true]{border-color:var(--green);color:var(--green);background:#183629}.strategy-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--edge)}.strategy-row input{flex:1 1 140px}.strategy-list{margin:12px 0}.new-strategy{display:grid;gap:12px;margin-top:16px}
</style></head>
<body>
<header><div><span class="brand"><span class="mark" aria-hidden="true">↗</span> Trade Journal</span><button id="logout" hidden>Lock journal</button></div></header>
<main>
<section id="locked" class="panel lock" hidden><h2>Unlock your journal</h2><p>Enter your password to access your trades.</p>
<form id="login"><label>Password<input name="password" type="password" autocomplete="current-password" required></label><button class="primary">Unlock journal</button><div id="loginError" role="alert"></div></form></section>
<p id="loading" role="status">Opening journal…</p>
<section id="journal" hidden>
<div class="split"><h1>Trading overview</h1><div class="actions"><button id="add" class="primary">＋ Add trade</button></div></div>
<div class="strategy-bar"><nav id="strategyTabs" aria-label="Filter by strategy"></nav><button type="button" id="manageStrategies">Manage strategies</button></div>
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
<div class="table"><table><thead><tr><th>Pair</th><th>Date</th><th>Timeframe</th><th>Direction</th><th>Strategy</th><th>TradingView</th><th>Result</th><th>Result in R</th><th>Actions</th></tr></thead><tbody id="rows"></tbody></table></div></section>
</section>
</main>
<dialog id="editor"><form id="entry"><h2 id="entryTitle">Add trade</h2><div class="grid">
<label>Pair<input name="pair" list="pairOptions" placeholder="EURUSD" required maxlength="30" autocomplete="off" autocapitalize="characters"><datalist id="pairOptions"></datalist></label>
<label>Date<input name="date" type="date" required></label>
<fieldset class="choices " id="frameChoices"><legend>Timeframe</legend><div><label><input type="radio" name="frame" value="15m" checked required><span>15M</span></label><label><input type="radio" name="frame" value="1h" required><span>1H</span></label><label><input type="radio" name="frame" value="4h" required><span>4H</span></label></div></fieldset>
<fieldset class="choices " id="sideChoices"><legend>Direction</legend><div><label><input type="radio" name="side" value="Long" checked required><span>Long</span></label><label><input type="radio" name="side" value="Short" required><span>Short</span></label></div></fieldset>
<fieldset class="choices wide" id="strategyChoices"><legend>Strategy</legend><div id="tradeStrategies"></div></fieldset>
<label class="wide">TradingView link <input name="link" type="url" placeholder="https://www.tradingview.com/…" maxlength="2000"></label>
<fieldset class="choices wide" id="outcomeChoices"><legend>Result</legend><div><label><input type="radio" name="outcome" value="Win" required><span>Win</span></label><label><input type="radio" name="outcome" value="Loss" required><span>Loss</span></label><label><input type="radio" name="outcome" value="Open" checked required><span>Open</span></label></div></fieldset>
<fieldset class="choices wide" id="amountChoices"><legend>R multiple</legend><div><label><input type="radio" name="amount" value="0.5"><span>0.5R</span></label><label><input type="radio" name="amount" value="1"><span>1R</span></label><label><input type="radio" name="amount" value="1.5"><span>1.5R</span></label><label><input type="radio" name="amount" value="2"><span>2R</span></label></div></fieldset>
</div><p id="entryError" role="alert"></p>
<div class="actions"><button type="button" id="cancel">Cancel</button><button id="save" class="primary">Save trade</button></div></form></dialog>
<dialog id="strategyManager" aria-labelledby="strategyTitle">
<div class="split"><h2 id="strategyTitle">Manage strategies</h2><button type="button" id="closeStrategies">Done</button></div>
<div id="strategyList" class="strategy-list"></div>
<form id="strategyForm" class="new-strategy"><label>New strategy<input name="name" maxlength="50" required></label><button class="primary">Create strategy</button></form>
<p id="strategyError" role="alert"></p>
</dialog>
<script>
const $ = id => document.getElementById(id);
const r = value => value == null ? '—' : new Intl.NumberFormat('en-US',{maximumFractionDigits:2,signDisplay:'exceptZero'}).format(value/100)+'R';
const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Panama',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const day = 86400000;
const dateOf = time => new Date(time).toISOString().slice(0,10);
const currencies = ['EUR','GBP','AUD','NZD','USD','CAD','CHF','JPY'];
const standardPairs = currencies.flatMap((base,i)=>currencies.slice(i+1).map(quote=>base+quote));
let trades = [], strategies = [], editing;
const selectedStrategyIds = new Set();
let strategySelectionInitialized = false;
function findMacdStrategy(active) {
  return active.find(s=>s.id==='macd-divergence')||active.find(s=>s.name.toLowerCase()==='macd divergence');
}
function renderStrategyTabs() {
  const active=strategies.filter(s=>!s.archived);
  const macd=findMacdStrategy(active);
  const ordered=macd?[macd,...active.filter(s=>s!==macd)]:active;
  for(const id of selectedStrategyIds){
    if(!active.some(s=>s.id===id)) selectedStrategyIds.delete(id);
  }
  $('strategyTabs').hidden=active.length===0;
  $('strategyTabs').replaceChildren(...ordered.map(({id,name})=>{
    const button=node('button',name);
    button.type='button';
    button.setAttribute('aria-pressed',String(selectedStrategyIds.has(id)));
    button.onclick=()=>{
      if(selectedStrategyIds.has(id)) selectedStrategyIds.delete(id);
      else selectedStrategyIds.add(id);
      button.setAttribute('aria-pressed',String(selectedStrategyIds.has(id)));
      render();
    };
    return button;
  }));
}
function renderTradeStrategies(selected) {
  const options=strategies.filter(s=>!s.archived||s.id===selected);
  $('strategyChoices').hidden=options.length===0;
  $('tradeStrategies').replaceChildren(...options.map(s=>{
    const label=node('label',''), input=node('input','');
    input.type='radio';
    input.name='strategy_id';
    input.value=s.id;
    input.checked=s.id===selected||(!selected&&options.length===1);
    input.required=true;
    label.append(input,node('span',s.name+(s.archived?' (archived)':'')));
    return label;
  }));
}
function updateStrategy(strategy) {
  const index=strategies.findIndex(s=>s.id===strategy.id);
  if(index===-1) strategies.push(strategy);
  else strategies[index]=strategy;
  renderStrategyTabs();
  render();
}
function strategyError(error) {
  if(error.status===401) lock();
  else $('strategyError').textContent=error.message;
}
function renderStrategyManager() {
  $('strategyList').replaceChildren(...strategies.map(s=>{
    const row=node('div','','strategy-row'), name=node('input','');
    name.value=s.name;
    name.maxLength=50;
    name.setAttribute('aria-label','Name for '+s.name);
    const rename=node('button','Rename'), archive=node('button',s.archived?'Restore':'Archive');
    const remove=node('button','Delete','red');
    const disabled=value=>{rename.disabled=archive.disabled=remove.disabled=name.disabled=value;};
    const update=async (nextName,archived)=>{
      disabled(true);
      $('strategyError').textContent='';
      try{
        updateStrategy(await api('strategies','PATCH',{id:s.id,name:nextName,archived}));
        renderStrategyManager();
      }catch(error){
        strategyError(error);
      }finally{disabled(false);}
    };
    rename.onclick=()=>update(name.value,Boolean(s.archived));
    archive.onclick=()=>update(s.name,!s.archived);
    remove.onclick=async ()=>{
      if(!window.confirm('Permanently delete "'+s.name+'" and every trade assigned to it? This cannot be undone.')) return;
      disabled(true);
      $('strategyError').textContent='';
      try{
        await api('strategies?id='+encodeURIComponent(s.id),'DELETE');
        selectedStrategyIds.delete(s.id);
        strategies=strategies.filter(item=>item.id!==s.id);
        trades=trades.filter(trade=>trade.strategy_id!==s.id);
        renderStrategyTabs();
        render();
        renderStrategyManager();
        await load();
      }catch(error){strategyError(error);}
      finally{disabled(false);}
    };
    row.append(name,rename,archive,remove);
    return row;
  }));
}
function openStrategies() {
  $('strategyError').textContent='';
  $('strategyForm').reset();
  renderStrategyManager();
  $('strategyManager').showModal();
}
$('manageStrategies').onclick=openStrategies;
$('closeStrategies').onclick=()=>$('strategyManager').close();
$('strategyForm').onsubmit=async event=>{
  event.preventDefault();
  const form=event.currentTarget, button=form.querySelector('button');
  button.disabled=true;
  $('strategyError').textContent='';
  try{
    const strategy=await api('strategies','POST',{name:form.elements.name.value});
    updateStrategy(strategy);
    form.reset();
    renderStrategyManager();
  }catch(error){strategyError(error);}
  finally{button.disabled=false;}
};
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
  strategies=[];
  selectedStrategyIds.clear();
  strategySelectionInitialized=false;
  for(const id of ['strategyTabs','tradeStrategies','strategyList']) $(id).replaceChildren();
  if($('strategyManager').open) $('strategyManager').close();
  updatePairs();
  $('journal').hidden=$('logout').hidden=true;
  $('locked').hidden=false;
  if ($('editor').open) $('editor').close();
  for (const id of ['rows','cards','plot','net','count','notice']) $(id).replaceChildren();
  $('entry').reset();
}
async function load() {
  try {
    [trades,strategies]=await Promise.all([api('trades'),api('strategies')]);
    if(!strategySelectionInitialized){
      const macd=findMacdStrategy(strategies.filter(s=>!s.archived));
      if(macd) selectedStrategyIds.add(macd.id);
      strategySelectionInitialized=true;
    }
    renderStrategyTabs();
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
  const archivedIds=new Set(strategies.filter(s=>s.archived).map(s=>s.id));
  const selected=invalid ? [] : trades.filter(t=>(!from||t.date>=from)&&(!through||t.date<=through)&&(!pair||t.pair===pair)&&(!frame||t.frame===frame)&&!archivedIds.has(t.strategy_id)&&selectedStrategyIds.has(t.strategy_id));
  $('rangeText').textContent=from && through ? from+' to '+through : from ? 'Since '+from : through ? 'Through '+through : 'All dates';
  $('notice').textContent=invalid?'Choose an end date on or after the start date.':'';
  const count=selected.length;
  const closed=selected.filter(t=>t.outcome==='Win'||t.outcome==='Loss');
  const wins=closed.filter(t=>t.outcome==='Win').length;
  const scored=closed.filter(t=>t.hundredths_r!=null);
  const gross=scored.reduce((sum,t)=>sum+Math.max(t.hundredths_r,0),0);
  const loss=scored.reduce((sum,t)=>sum+Math.min(t.hundredths_r,0),0);
  const net=gross+loss;
  const scoredWins=scored.filter(t=>t.outcome==='Win').length;
  const scoredLosses=scored.length-scoredWins;
  const averageWin=scoredWins?gross/scoredWins:null;
  const averageLoss=scoredLosses?loss/scoredLosses:null;
  const rate=n=>closed.length?(100*n/closed.length).toFixed(1)+'%':'—';
  $('cards').replaceChildren(card('Net R',r(net),net<0?'red':'green'),card('Win rate',rate(wins),'green'),card('Loss rate',rate(closed.length-wins),'red'),card('Closed trades',closed.length),card('Gross gained',r(gross),'green'),card('Gross lost',r(loss),'red'),card('Average R per trade',r(scored.length?Math.round(net/scored.length):null)),card('Open trades',count-closed.length),
    card('Average win',r(averageWin),'green'),card('Average loss',r(averageLoss),'red'),
    card('Avg. win / avg. loss',averageWin!==null&&averageLoss<0?(averageWin/-averageLoss).toFixed(2)+':1':'—'));
  $('count').textContent=count+' matching '+(count===1?'trade':'trades');
  $('net').textContent=r(net);
  $('net').className=net<0?'red':'green';
  const rows=selected.map(t=>{
    const row=node('tr','');
    const strategyName=strategies.find(s=>s.id===t.strategy_id)?.name||'Unassigned';
    for(const value of [t.pair,t.date,t.frame,t.side,strategyName]) row.append(node('td',value));
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
    cell.colSpan=9;row.append(cell);rows.push(row);
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
  const defaults=t?{...t,amount,outcome:t.outcome==='Open'?'Win':t.outcome}:{date:today()};
  for(const [key,value] of Object.entries(defaults)){
    if(form.elements[key]) form.elements[key].value=value;
  }
  const macdStrategy=findMacdStrategy(strategies.filter(s=>!s.archived));
  const defaultStrategy=macdStrategy?.id||(selectedStrategyIds.size===1?[...selectedStrategyIds][0]:'');
  renderTradeStrategies(t?(t.strategy_id||''):defaultStrategy);
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
