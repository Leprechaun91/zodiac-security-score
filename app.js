(()=>{'use strict';
const signs=[
['widder','♈','Widder','Der impulsive Insider',27,'speed bypass','Du handelst, während andere noch ein Meeting planen.','Governance ist schön, solange sie nicht im Weg steht.','Mars steht im Endpoint. Dein USB-Stick bekommt bald seinen eigenen Incident-Report.'],
['stier','♉','Stier','Der Legacy-Verteidiger',17,'retain archive','Du hältst Systeme am Leben, die längst ein Museum verdient hätten.','Löschen fühlt sich an wie Verrat an der Unternehmensgeschichte.','Venus durchquert dein Archiv. Der Ordner NICHT LÖSCHEN feiert seinen 15. Geburtstag.'],
['zwillinge','♊','Zwillinge','Die menschliche Sharing-API',27,'sharing external','Du bringst Menschen zusammen.','Manchmal auch Menschen, die nichts sehen sollten.','Merkur steht auf Jeder mit dem Link. Ein Projektgast von 2021 bedankt sich fürs Quartalsbudget.'],
['krebs','♋','Krebs','Der emotionale Data Hoarder',20,'archive copy retain','Du bewahrst wichtiges Wissen.','Und auch sieben Versionen der Kantinenkarte.','Der Mond steht im PST-Archiv. FINAL_really_FINAL überlebt dein Notebook.'],
['loewe','♌','Löwe','Der Privilege Collector',27,'privilege approval access','Du übernimmst Verantwortung und triffst Entscheidungen.','Temporär ist für dich kein Zeitraum, sondern ein Lebensgefühl.','Die Sonne betritt Entra. Beim Access Review musst du erklären, warum PowerPoint Global Admin braucht.'],
['jungfrau','♍','Jungfrau','Die Shadow-IT-Architektin',23,'automation shortcut precision','Du automatisierst in Stunden, wofür andere Quartale brauchen.','Aus dem Workaround ist plötzlich ein geschäftskritisches System geworden.','Saturn trifft Power Automate. Deine Excel hat sieben Flows und keine Vertretung.'],
['waage','♎','Waage','Das Governance-Komitee',14,'delay process approval','Du verstehst Security und Business.','Deshalb kann niemand mit dir eine Entscheidung treffen.','Jupiter besucht das Steering Committee. Das Label wurde nach 14 Meetings als noch zu diskutieren eingestuft.'],
['skorpion','♏','Skorpion','Der Calculated Insider',34,'observe stealth precision','Du erkennst Muster, die sonst niemand bemerkt.','Du weißt auch, welche Aktivitäten später im Audit sichtbar werden.','Pluto kreuzt das Audit-Log. Vier unauffällige Ereignisse werden auf einmal interessant.'],
['schuetze','♐','Schütze','Der charmante Social Engineer',40,'social access sharing','Menschen vertrauen dir sofort.','Berechtigungsanträge sind für dich nette Gespräche.','Jupiter steht im SharePoint. Du bekommst Finance und HR durch fünf freundliche Fragen.'],
['steinbock','♑','Steinbock','Der Langzeit-Stratege',17,'retain retainaccess archive','Du baust Systeme, die Jahre überdauern.','Neue Rollen kommen dazu. Alte Berechtigungen gehen nie.','Saturn durchquert die Abteilungen. Du hast immer noch Zugriff auf HR, Sales und die Steinzeit.'],
['wassermann','♒','Wassermann','Der Shadow-AI-Pionier',34,'ai innovation shortcut','Du testest heute, was morgen jeder nutzt.','Das Tool läuft meist, bevor Security seinen Namen kennt.','Uranus steht im Browser-Tab. Die KI hat dein PDF verstanden. Wo es jetzt liegt, weiß niemand.'],
['fische','♓','Fische','Der Accidental Chaos Agent',23,'sprawl copy shortcut','Du findest für jedes Problem eine Lösung.','Später findest du sie selbst nicht mehr. Dafür sechs Kopien.','Neptun steht im OneDrive. Deine Kundenliste liegt in Teams, Dropbox und einem alten Prompt.']
].map(x=>({id:x[0],glyph:x[1],name:x[2],title:x[3],base:x[4],aff:x[5].split(' '),power:x[6],weak:x[7],prophecy:x[8]}));
const questions=[
  {
    "title": "Dein KI-Agent bekommt beim CEO-Demo-Versuch nur „403“. Was jetzt?",
    "joke": "Autonomer Agent. Erste autonome Entscheidung: „Nö“.",
    "opts": [
      [
        "Testdaten rein. Sieht fast echt aus.",
        4,
        "copy precision shortcut",
        "Du nennst es Sandbox. Der CEO nennt es Magie. Der Auditor fragt, was genau die Folie beweist."
      ],
      [
        "Kollegen mit Zugriff vor die Kamera schieben.",
        5,
        "social access sharing",
        "Du hast Least Privilege durch Least Alleinsein ersetzt. Immerhin ist der Kollege jetzt Teil des Demo-Teams."
      ],
      [
        "Befristeten Zugriff organisieren. Wecker stellen.",
        4,
        "privilege approval process",
        "Dein Horoskop sieht eine Genehmigung. Die Sterne sehen auch, dass um 17 Uhr wieder alles kaputtgeht."
      ],
      [
        "403 als Security-Feature verkaufen.",
        4,
        "innovation speed observe",
        "Es ist nicht kaputt, es ist ein Security-Feature. Entwickler nennen das ein erfolgreiches Rebranding."
      ]
    ]
  },
  {
    "title": "Ein KI-Tool spart zwei Tage Arbeit. Datenschutz antwortet erst Montag.",
    "joke": "Der Anbieter verspricht „EU-ready“. Der Datenschutz ist gerade „Out of Office“.",
    "opts": [
      [
        "Mit Fantasiekunden testen. Grüße von Max Mustermann.",
        4,
        "ai innovation precision",
        "Du hast eine Sensation entdeckt: KI funktioniert hervorragend mit Menschen, die nicht existieren."
      ],
      [
        "Pilot beantragen. Q3 wäre noch frei.",
        5,
        "approval process innovation",
        "Du sagst „Pilot“. Drei Gremien sagen „interessant“. Dein Kalender sagt gar nichts mehr."
      ],
      [
        "Selbst nachbauen. Drei Sprints sind doch nichts.",
        5,
        "automation shortcut ai",
        "Herzlichen Glückwunsch: Du wolltest kein Shadow AI und hast versehentlich ein internes Startup gegründet."
      ],
      [
        "AGB lesen. Irgendwer muss es ja tun.",
        4,
        "observe delay precision",
        "Du hast die Datenschutzhinweise gelesen. Sogar bis zum Ende. Die Sterne empfehlen dringend Urlaub."
      ]
    ]
  },
  {
    "title": "Der Kunde soll ins Projekt-Team. Dort wohnen noch Externe von 2022.",
    "joke": "Im Team sitzt auch „Test Test“. Seit drei Jahren.",
    "opts": [
      [
        "Alte Gäste rauswerfen. Networking war gestern.",
        5,
        "retainaccess process external",
        "Du hast endlich ein Access Review gemacht. Die Sterne bitten um einen Gedenkkranz für Test Test."
      ],
      [
        "Neues Team bauen. Eins mehr fällt nicht auf.",
        5,
        "sprawl copy automation",
        "Dein Risiko ist nicht die Freigabe. Dein Risiko ist die vierte Teams-Gruppe, die jemand nächste Woche gründet."
      ],
      [
        "Einzellink schicken. Die Excel kommt später.",
        4,
        "sharing precision external",
        "Minimalprinzip bestanden. Jetzt beginnt der zweite Teil der Prüfung: Erwartungen managen."
      ],
      [
        "Im Call zeigen. Screenshots macht ja niemand.",
        4,
        "social delay shortcut",
        "Keine Kopie, dafür 14 Screensharing-Minuten verloren. Dein Security-Team applaudiert höflich."
      ]
    ]
  },
  {
    "title": "Dein Agent findet vergessene Daten von 2013. Dienstag ist Audit.",
    "joke": "Owner: unbekannt. Aufbewahrungsfrist: „Vielleicht irgendwann“.",
    "opts": [
      [
        "Archiv isolieren. Problem elegant vertagen.",
        5,
        "archive process precision",
        "Du hast das Datenproblem nicht gelöst. Du hast ihm einen Wartebereich mit Hausordnung gegeben."
      ],
      [
        "Fachbereich suchen. Vielleicht lebt der Owner noch.",
        4,
        "social approval delay",
        "Dein Sternzeichen sieht ein Verantwortlichkeitsdiagramm mit mehr Pfeilen als Mitarbeitern."
      ],
      [
        "KI vorsortieren lassen. „Sonstiges“ boomt.",
        5,
        "ai automation sprawl",
        "Du hast aus unstrukturierten Daten strukturierte Unklarheit gemacht. Technisch ein Meilenstein."
      ],
      [
        "Bestandsliste anlegen. FINAL_v8 versteht sich.",
        4,
        "retain copy precision",
        "Ein neues Dokument, um alte Dokumente loszuwerden. Die Sterne lieben diese Ironie."
      ]
    ]
  },
  {
    "title": "600 Downloads, baldiger Austritt. Oder nur eine laufende Datenmigration?",
    "joke": "Security sieht Rot. Die Projektleitung sieht Grün. Schönes Ampelsystem.",
    "opts": [
      [
        "Logs vergleichen. „Kommt drauf an“ melden.",
        4,
        "observe precision process",
        "Du hast Kontext gefunden. Leider passt er nicht in die rote Ampel der Management-Folie."
      ],
      [
        "Transfers begrenzen. Die Migration überlebt das.",
        5,
        "speed bypass privilege",
        "Du hast Datenabfluss begrenzt und gleichzeitig eine neue WhatsApp-Gruppe namens „Warum steht alles?“ ausgelöst."
      ],
      [
        "War Room starten. 17 Leute, 18 Meinungen.",
        5,
        "social approval delay",
        "Die gute Nachricht: Alle reden miteinander. Die schlechte: Inzwischen haben sich drei Unterarbeitskreise gebildet."
      ],
      [
        "Diskret prüfen. Meeting-Titel: „INSIDER-ALARM!“",
        4,
        "stealth observe process",
        "Du handelst vorsichtig. Der Meeting-Titel „VERTRAULICHER INSIDER-FALL“ ist nur ein kleines Detail."
      ]
    ]
  }
]
.map(q=>({...q,opts:q.opts.map(o=>({text:o[0],risk:o[1],tags:o[2].split(' '),reveal:o[3]}))}));
const app=document.getElementById('app'), state={stage:'start',sign:null,q:0,answers:[null,null,null,null,null]};
let timer;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chosen=()=>signs.find(s=>s.id===state.sign);
const button=(label,action,secondary=false,disabled=false)=>'<button class="btn '+(secondary?'secondary':'primary')+'" data-do="'+action+'" '+(disabled?'disabled':'')+'>'+label+'</button>';
const progress=(n,total)=>'<div class="progress"><div style="width:'+Math.round(n/total*100)+'%"></div></div>';
function moodForScore(score){return score>=60?0:score>=45?1:score>=30?2:3;}
const moodAlt=['Souveräner Sherlock mit sicherem Schloss','Skeptischer Sherlock bei einer Risikoanalyse','Verschmitzter Sherlock mit fragwürdigem USB-Stick','Grinsender Sherlock im roten Security-Chaos'];
function calc(){const s=chosen(),a=state.answers.map((n,i)=>questions[i].opts[n]);const decisions=a.reduce((v,o)=>v+o.risk,0),matches=a.filter(o=>o.tags.some(t=>s.aff.includes(t))).length,cosmic=Math.min(20,matches*4+(matches>=3?3:0));const score=Math.max(0,100-s.base-decisions-cosmic);const band=score>=60?'DAS COMPLIANCE-EINHORN':score>=55?'KONTROLLIERTES CHAOS':score>=35?'WALKING AUDIT FINDING':'KOSMISCHE DATENKATASTROPHE';const notable=a.find(o=>o.tags.some(t=>s.aff.includes(t)))||a.slice().sort((x,y)=>y.risk-x.risk)[0];return {s,decisions,cosmic,score,band,notable};}
function render(){clearTimeout(timer);
if(state.stage==='start'){app.innerHTML='<section class="hero"><div class="kicker">THE INSIDER RISK HOROSCOPE · DDC EDITION</div><div class="hero-illustration"><div class="sun" aria-hidden="true">✳</div><img class="hero-sherlock" src="assets/sherlock-logo.svg?v=0.5.1" width="145" height="194" alt="Sherlock mit vertraulicher Geheimakte"></div><h1>Deine Sterne.<br><em>Dein Sicherheitsrisiko.</em></h1><p class="lead">Fünf unangenehme Entscheidungen. Zwölf voreingenommene Sternzeichen. Null wissenschaftliche Beweise.</p>'+button('KOSMISCHEN SCORE BERECHNEN ↗','start')+'<div class="facts"><span>12 Sternzeichen</span><span>5 Fragen</span><span>0 wissenschaftliche Belege</span></div><p class="muted small">100 % Satire. Keine richtigen oder falschen Quizantworten. Kein echtes Security-Assessment. Alles läuft in deinem Browser.</p></section>';}
if(state.stage==='sign'){app.innerHTML='<section class="panel"><div class="kicker">PHASE 01 / 03 · ASTROLOGISCHE IDENTITÄTSKRISE</div><h1>Welches Sternzeichen hat dich erschaffen?</h1><p class="muted">Es gibt keine perfekte Antwort. Nur fünf Entscheidungen, vier Zielkonflikte pro Frage und ein Sternzeichen mit Vorurteilen.</p><div class="zodiacs">'+signs.map(s=>'<button class="zodiac '+(state.sign===s.id?'selected':'')+'" data-sign="'+s.id+'"><span>'+s.glyph+'</span>'+s.name+'</button>').join('')+'</div><div class="actions">'+button('← Zurück','home',true)+button('DIE STERNE BEFRAGEN →','quiz',false,!state.sign)+'</div></section>';}
if(state.stage==='quiz'){const q=questions[state.q];app.innerHTML='<section class="panel"><div class="topline"><span>PHASE 02 / 03 · DER REALITÄTSTEST</span><span>'+chosen().glyph+' '+chosen().name+'</span></div>'+progress(state.q+1,5)+'<div class="kicker">FRAGE '+(state.q+1)+' / 05</div><h1>'+esc(q.title)+'</h1><p class="joke">„'+esc(q.joke)+'“</p><div class="options">'+q.opts.map((o,i)=>'<label class="option '+(state.answers[state.q]===i?'selected':'')+'"><input type="radio" name="answer" value="'+i+'" '+(state.answers[state.q]===i?'checked':'')+'><b>'+String.fromCharCode(65+i)+'</b><span>'+esc(o.text)+'</span></label>').join('')+'</div><div class="actions">'+button('← Zurück','back',true)+button(state.q===4?'KOSMISCHE AUSWERTUNG →':'NÄCHSTE FRAGE →','next',false,state.answers[state.q]===null)+'</div><p class="muted small answer-count">'+state.answers.filter(x=>x!==null).length+' von 5 beantwortet</p></section>';}
if(state.stage==='scan'){app.innerHTML='<section class="panel center"><div class="kicker">PHASE 03 / 03 · ABSURDE ANALYTIK</div><div class="largeglyph">'+chosen().glyph+'</div><h1>Die Sterne urteilen.</h1><p class="muted">Scanne Mars, Merkur und fragwürdige Freigabeeinstellungen …</p><div class="loader"></div></section>';timer=setTimeout(()=>{state.stage='result';history.replaceState(null,'',shareLink());render();},1700);}
if(state.stage==='result'){const r=calc(),m=moodForScore(r.score);app.innerHTML='<section class="result result-tone-'+m+'"><div class="result-hero"><div class="kicker">✦ DEINE OFFIZIELL INOFFIZIELLE ZODIAC-FALLAKTE ✦</div><div class="result-topline"><div class="result-portrait-wrap"><div class="risk-portrait mood-'+m+'" role="img" aria-label="'+moodAlt[m]+'"></div><div class="portrait-tag">SHERLOCK RISK LAB · '+['SAFE MODE','INVESTIGATING','SUSPICIOUSLY CREATIVE','COSMIC CHAOS'][m]+'</div></div><div class="result-headline"><div class="largeglyph">'+r.s.glyph+'</div><div class="kicker">'+r.s.name.toUpperCase()+'</div><h1>'+r.s.title+'</h1><div class="score">'+r.score+'<span>/ 100</span></div><h2>'+r.band+'</h2></div></div><p class="lead">'+esc(r.s.weak)+'</p></div><div class="details"><article><h3>✦ DEINE SUPERPOWER</h3><p>'+esc(r.s.power)+'</p></article><article><h3>⚠ DEINE KOSMISCHE SCHWÄCHE</h3><p>'+esc(r.s.weak)+'</p></article><article><h3>✺ DEINE ANTWORT WURDE BEMERKT</h3><p>'+esc(r.notable.reveal)+'</p></article><article><h3>✶ DEINE SECURITY-PROPHEZEIUNG</h3><p>'+esc(r.s.prophecy)+'</p></article></div><div class="breakdown"><h3>DER COSMIC SECURITY ALGORITHM™</h3>'+[['Sternzeichen-Risiko',r.s.base,40],['Deine Entscheidungen',r.decisions,40],['Kosmische Wechselwirkung',r.cosmic,20]].map(x=>'<div class="metric"><span>'+x[0]+'</span><strong>'+x[1]+' / '+x[2]+'</strong></div>'+progress(x[1],x[2])).join('')+'<p class="muted small">Security Score = 100 − Risikopunkte. Die astrologische Verzerrung ist Absicht.</p></div><div class="actions result-actions">'+button('ERGEBNISKARTE ALS PNG ↓','png')+button('ERGEBNIS TEILEN ↗','share',true)+button('↻ Nochmal spielen','reset',true)+'</div><p class="muted small center">Satire zur DDC Night Session. Sternzeichen sagen nichts über reale Insider-Risiken aus. Keine Ergebnisse werden gespeichert.</p></section>';}
app.querySelectorAll('[data-do]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.do)));
app.querySelectorAll('[data-sign]').forEach(b=>b.addEventListener('click',()=>{state.sign=b.dataset.sign;render();}));
app.querySelectorAll('input[name="answer"]').forEach(i=>i.addEventListener('change',()=>{state.answers[state.q]=Number(i.value);app.querySelectorAll('.option').forEach(el=>el.classList.toggle('selected',el.querySelector('input').checked));const next=app.querySelector('[data-do="next"]');if(next)next.disabled=false;const counter=app.querySelector('.answer-count');if(counter)counter.textContent=state.answers.filter(x=>x!==null).length+' von 5 beantwortet';}));}
function action(a){if(a==='start')state.stage='sign';if(a==='home')state.stage='start';if(a==='quiz'&&state.sign){state.stage='quiz';state.q=0;}if(a==='back'){if(state.q===0)state.stage='sign';else state.q--;}if(a==='next'){if(state.answers[state.q]===null)return;if(state.q<4)state.q++;else state.stage='scan';}if(a==='reset'){state.stage='start';state.sign=null;state.q=0;state.answers=[null,null,null,null,null];history.replaceState(null,'',location.pathname);}if(a==='png'){png();return;}if(a==='share'){share();return;}render();scrollTo({top:0,behavior:'smooth'});}
function shareLink(){return location.origin+location.pathname+'#result='+state.sign+'.'+state.answers.join('');}
function restore(){const m=location.hash.match(/^#result=([a-z]+)\.([0-3]{5})$/);if(m&&signs.some(s=>s.id===m[1])){state.sign=m[1];state.answers=m[2].split('').map(Number);state.stage='result';}}
function notice(t){let n=document.createElement('div');n.className='toast';n.textContent=t;document.body.append(n);setTimeout(()=>n.remove(),3500);}
async function share(){let url=shareLink();try{if(navigator.share)await navigator.share({title:'Mein Zodiac Security Score',url});else if(navigator.clipboard){await navigator.clipboard.writeText(url);notice('Ergebnislink kopiert.');}else notice('Link in der Adresszeile kopieren.');}catch(e){if(e.name!=='AbortError')notice('Link in der Adresszeile kopieren.');}}
function wrap(ctx,text,y,width,size){ctx.font=size+'px Georgia';let lines=[''];for(const word of text.split(' ')){let i=lines.length-1,c=lines[i]+' '+word;if(ctx.measureText(c).width>width&&lines[i])lines.push(word);else lines[i]=c.trim();}lines.slice(0,4).forEach((line,i)=>ctx.fillText(line,540,y+i*(size+13)));}
async function png(){const r=calc(),m=moodForScore(r.score),c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');const themes=[['#071f27','#67e4d6'],['#231a37','#c4a1ff'],['#301826','#ffae68'],['#340c22','#ff547f']],t=themes[m],g=x.createLinearGradient(0,0,1080,1350);g.addColorStop(0,t[0]);g.addColorStop(1,'#090e21');x.fillStyle=g;x.fillRect(0,0,1080,1350);x.strokeStyle='#dfbe83';x.lineWidth=3;x.strokeRect(45,45,990,1260);
x.textAlign='center';x.fillStyle='#f2d59a';x.font='bold 31px Arial';x.fillText('ZODIAC RISK ENGINE™',540,132);x.font='18px Arial';x.fillText('SHERLOCK RISK LAB · DDC NIGHT SESSION',540,170);
try{await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>{try{x.save();x.beginPath();x.roundRect(330,199,420,420,30);x.clip();const half=im.naturalWidth/2;x.drawImage(im,(m%2)*half,Math.floor(m/2)*half,half,half,330,199,420,420);x.restore();resolve();}catch(e){reject(e);}};im.onerror=reject;im.src='assets/risk-moods.svg?v=0.5.1';});}catch(e){x.fillStyle='#222b46';x.fillRect(330,199,420,420);x.fillStyle=t[1];x.font='210px serif';x.fillText(r.s.glyph,540,485);}
x.strokeStyle=t[1];x.lineWidth=4;x.strokeRect(330,199,420,420);
x.fillStyle='#f5ebee';x.font='bold 32px Arial';x.fillText(r.s.name.toUpperCase(),540,695);x.font='bold 49px Georgia';wrap(x,r.s.title,748,920,49);x.fillStyle=t[1];x.font='bold 145px Arial';x.fillText(r.score,540,960);x.font='23px Arial';x.fillText('VON 100 SICHERHEITSPUNKTEN',540,1007);x.fillStyle='#eacb91';x.font='bold 28px Arial';x.fillText(r.band,540,1068);x.fillStyle='#ece0e8';wrap(x,r.s.weak,1135,850,26);x.fillStyle='#a8a7bc';x.font='21px Arial';x.fillText('100 % SATIRE · 0 % WISSENSCHAFT',540,1256);const a=document.createElement('a');let exportUrl;try{exportUrl=c.toDataURL('image/png');}catch(err){const f=document.createElement('canvas');f.width=1080;f.height=1350;const k=f.getContext('2d');k.fillStyle='#11172c';k.fillRect(0,0,1080,1350);k.strokeStyle='#e5c78c';k.lineWidth=4;k.strokeRect(45,45,990,1260);k.textAlign='center';k.fillStyle='#e5c78c';k.font='bold 42px Arial';k.fillText('ZODIAC RISK ENGINE™',540,180);k.font='180px serif';k.fillText(r.s.glyph,540,540);k.fillStyle='#fff';k.font='bold 46px Arial';k.fillText(r.s.name.toUpperCase(),540,640);k.font='bold 160px Arial';k.fillText(r.score,540,875);k.fillStyle='#f0c691';k.font='32px Arial';k.fillText('SECURITY SCORE · 100 % SATIRE',540,940);k.fillStyle='#e6e0e8';k.font='bold 32px Arial';k.fillText(r.band,540,1030);exportUrl=f.toDataURL('image/png');}a.href=exportUrl;a.download='zodiac-security-score-'+r.s.id+'.png';a.click();notice('Deine Sherlock-Ergebniskarte ist fertig.');}
document.getElementById('brandLink').addEventListener('click',e=>{e.preventDefault();state.stage='start';history.replaceState(null,'',location.pathname);render();});restore();render();
})();