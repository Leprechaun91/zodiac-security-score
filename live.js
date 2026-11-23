/* Password-protected organizer board, refreshes every ten seconds */
(function(){
'use strict';
const questions=[{"title":"Vibe Coding: Firmen-Agent oder Favorit?","answers":["Beide mit einem synthetischen Mini-Projekt vergleichen.","Mit dem Team den leistungsstärkeren Agenten nutzen.","Mit dem Firmen-Agenten starten und Review einplanen.","Den Favoriten in einem isolierten Prototyp testen."]},{"title":"6.000 Zeilen KI-Code im Pull Request","answers":["KI zusätzliche Grenzfall- und Security-Tests bauen lassen.","Kritische Module gemeinsam im Team reviewen.","Den Coding-Agenten refactoren und erneut testen lassen.","Einen kritischen Datenpfad selbst nachvollziehen."]},{"title":"Projekt-Team mit alten Gästen","answers":["Bestehende Gastzugriffe prüfen, dann einladen.","Eigenes Team mit klaren Mitgliedern aufsetzen.","Benötigte Dokumente gezielt per Link freigeben.","Wichtige Inhalte im gemeinsamen Call durchgehen."]},{"title":"Datenarchiv vor dem Audit","answers":["Bestand abgrenzen und vorläufig dokumentieren.","Fachbereich und Verantwortliche dazu holen.","KI den Bestand vorstrukturieren lassen.","Inventar anlegen und Entscheidungen bündeln."]},{"title":"600 Downloads und Datenmigration","answers":["Downloads mit Migrationsplan und Logs abgleichen.","Exportrechte vorerst auf den Projektbedarf begrenzen.","IT, HR und Projektleitung gemeinsam einordnen lassen.","Zuerst vertraulich einzelne Beteiligte befragen."]}];
const signs={widder:['♈','Widder'],stier:['♉','Stier'],zwillinge:['♊','Zwillinge'],krebs:['♋','Krebs'],loewe:['♌','Löwe'],jungfrau:['♍','Jungfrau'],waage:['♎','Waage'],skorpion:['♏','Skorpion'],schuetze:['♐','Schütze'],steinbock:['♑','Steinbock'],wassermann:['♒','Wassermann'],fische:['♓','Fische']};
const $=id=>document.getElementById(id);
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=x=>Math.max(0,Number(x)||0);
const percent=(n,total)=>total?Math.round(num(n)*100/total):0;
let active=0,timer=null,last=null,fetching=false;
function setStatus(on){
 $('liveDot').classList.toggle('live',on);
 $('statusText').textContent=on?'LIVE · AGGREGIERTE ERGEBNISSE':'GESCHÜTZTES LIVE BOARD';
}
function paint(data){
 last=data;
 const total=num(data.participants);
 $('metricTotal').textContent=total.toLocaleString('de-DE');
 $('metricSecurity').textContent=total?Number(data.averageSecurity).toFixed(1).replace('.',','):'—';
 $('metricChaos').textContent=total?num(data.chaosCount)+' ('+percent(data.chaosCount,total)+' %)':'0';
 const all=Array.isArray(data.signs)?data.signs:[];
 const first=all[0];
 $('metricLeader').textContent=first?signs[first.sign]?.[1]||first.sign:'—';
 $('leaderCaption').textContent=first?'Risikoindex '+Number(first.riskIndex).toFixed(1).replace('.',',')+' · '+first.count+' Stimmen':'Noch keine freiwilligen Stimmen';
 $('timestamp').textContent='Letztes Update: '+new Date(data.updatedAt||Date.now()).toLocaleTimeString('de-DE');
 $('signList').innerHTML=all.length?all.map((x,i)=>{
 const sign=signs[x.sign]||['✦',x.sign],risk=num(x.riskIndex),count=num(x.count);
 return '<div class="sign-item '+(i===0?'top':'')+'"><div class="sign-rank">'+(i+1)+'.</div>'+
 '<div class="sign-main"><strong>'+sign[0]+' '+esc(sign[1])+'</strong><small>'+count+' '+(count===1?'Stimme':'Stimmen')+' · Ø Security '+Number(x.averageSecurity).toFixed(1).replace('.',',')+'</small>'+
 '<div class="sign-bar"><b style="width:'+risk+'%"></b></div></div>'+
 '<div class="sign-score">'+risk.toFixed(1).replace('.',',')+'<small>RISK INDEX</small></div></div>';
 }).join(''):'<p class="empty">Noch keine gezählten Quiz-Abschlüsse. Der kosmische Kontrollraum ist bereit.</p>';
 const moods=['Souverän','Skeptisch','Verschmitzt','Chaos'];
 const tiers=Array.isArray(data.tiers)?data.tiers:[];
 $('tiers').innerHTML=moods.map((name,i)=>{
 const v=tiers.find(t=>Number(t.tier)===i),n=num(v?.count);
 return '<div class="tier"><span>'+esc(name.toUpperCase())+'</span><strong>'+n+'</strong><span>'+percent(n,total)+' % der Stimmen</span></div>';
 }).join('');
 renderQuestion();
}
function renderQuestion(){
 const d=last,q=questions[active],row=(Array.isArray(d?.questions)?d.questions:[]).find(x=>Number(x.question)===active+1);
 const opts=Array.isArray(row?.options)?row.options:[];
 const total=num(d?.participants);
 $('questionTitle').textContent=q.title;
 $('questionTabs').innerHTML=questions.map((_,i)=>'<button type="button" data-question="'+i+'" class="'+(i===active?'active':'')+'" aria-pressed="'+(i===active)+'">Frage '+(i+1)+'</button>').join('');
 $('questionChoices').innerHTML=q.answers.map((label,i)=>{
 const entry=opts.find(x=>Number(x.option)===i),n=num(entry?.count),pct=percent(n,total);
 return '<div class="choice"><span class="choice-text"><strong>'+String.fromCharCode(65+i)+'</strong> · '+esc(label)+'</span>'+
 '<span class="choice-num">'+pct+' %</span><div class="choice-track"><b style="width:'+pct+'%"></b></div></div>';
 }).join('');
 $('questionTabs').querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>{active=Number(b.dataset.question);renderQuestion();}));
}
async function refresh(){
 if(fetching||!window.ZodiacStats?.enabled)return;
 fetching=true;
 try{
  const d=await ZodiacStats.getStats();paint(d);
  $('boardError').textContent='';setStatus(true);
 }catch(e){setStatus(false);$('boardError').textContent='Datenaktualisierung fehlgeschlagen: '+(e.message||e);}
 finally{fetching=false;}
}
$('loginForm').addEventListener('submit',async e=>{
 e.preventDefault();
 $('loginError').textContent='';
 const button=$('loginForm').querySelector('button[type=submit]');button.disabled=true;button.textContent='Anmeldung läuft …';
 try{
  await ZodiacStats.login($('email').value.trim(),$('password').value);
  $('password').value='';
  $('login').classList.add('hidden');
  $('board').classList.remove('hidden');
  await refresh();
  timer=setInterval(refresh,10000);
 }catch(e){$('loginError').textContent='Anmeldung fehlgeschlagen: '+(e.message||e);}
 finally{button.disabled=false;button.textContent='Live-Dashboard öffnen ↗';}
});
$('snapshot').addEventListener('click',()=>{
 if(!last){$('boardError').textContent='Noch kein Statistikstand verfügbar.';return;}
 const blob=new Blob([JSON.stringify({savedAt:new Date().toISOString(),statistics:last},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='zodiac-live-snapshot-'+new Date().toISOString().slice(0,19).replace(/:/g,'-')+'.json';
 a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);
});
$('logout').addEventListener('click',()=>{if(timer)clearInterval(timer);timer=null;ZodiacStats.logout();setStatus(false);$('board').classList.add('hidden');$('login').classList.remove('hidden');});
$('fullScreen').addEventListener('click',()=>{if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.();});
if(!window.ZodiacStats?.enabled){$('login').classList.add('hidden');$('setup').classList.remove('hidden');}
})();