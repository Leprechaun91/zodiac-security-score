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
    "title": "Dein KI-Agent darf die Demo-Datei nicht lesen. Der CEO sagt: „Gib ihm doch kurz Zugriff auf alles.“ Was machst du?",
    "joke": "„Nur für die Demo“ ist eine bemerkenswert häufige Zeitangabe in Audit-Logs.",
    "opts": [
      [
        "Ich stelle dem Agenten einen freigegebenen Datenraum mit begrenzten Rechten bereit.",
        2,
        "precision access process",
        "Dein Agent sieht weniger als der Praktikant. Das ist hier ausnahmsweise ein Kompliment."
      ],
      [
        "Ich führe mit meinen eigenen Berechtigungen vor und stelle nach der Demo um.",
        6,
        "speed privilege bypass",
        "Du hast ein Authentifizierungsproblem gelöst. Durch ein potenziell größeres Authentifizierungsproblem."
      ],
      [
        "Ich nutze den bereits dokumentierten Service-Account aus dem Projekt.",
        5,
        "automation retainaccess access",
        "„svc_demo_final2“ ist ein Name, kein Sicherheitskonzept."
      ],
      [
        "Ich verwende einen geprüften Demo-Snapshot und verschiebe den Livezugriff.",
        1,
        "delay copy precision",
        "Nicht ganz live. Aber das einzige Feuer brennt heute auf der PowerPoint-Folie."
      ]
    ]
  },
  {
    "title": "Ein KI-Tool fasst 200 Kundendokumente in 20 Sekunden zusammen. Die Datenschutzprüfung kommt allerdings erst Montag.",
    "joke": "„Hosted in Europe“ steht groß auf der Website. Das Kleingedruckte ist leider auf Geschäftsreise.",
    "opts": [
      [
        "Ich teste die Qualität mit synthetischen Beispielen, bis die Freigabe vorliegt.",
        2,
        "innovation ai precision",
        "Die Demo glänzt. Die echten Kundendaten dürfen derweil in Ruhe weiterexistieren."
      ],
      [
        "Ich entferne Namen und Vertragsnummern und verwende nur kurze Auszüge.",
        5,
        "ai sharing shortcut",
        "Du hast drei Namen entfernt. Die restlichen 47 Identifikationsmerkmale winken freundlich."
      ],
      [
        "Ich lasse zunächst nur Dateinamen und Kategorien verarbeiten, keine Inhalte.",
        4,
        "ai sprawl",
        "Metadaten sind nicht automatisch harmlos. Auch ein Dateiname kann ziemlich geschwätzig sein."
      ],
      [
        "Ich baue eine ähnliche Funktion mit dem bereits freigegebenen Unternehmensdienst.",
        3,
        "automation process innovation",
        "Aus der Zehn-Minuten-Lösung wurden drei Sprints. Immerhin mit Architekturdiagramm."
      ]
    ]
  },
  {
    "title": "Ein Kunde braucht eine Datei bis 17 Uhr. Im alten Projekt-Team sitzen noch Gäste vom letzten Rollout.",
    "joke": "Der Kanal heißt TEMP_NEU_FINAL. Das letzte Rollout endete vor 18 Monaten. Natürlich.",
    "opts": [
      [
        "Ich teile nur die benötigten Inhalte separat, für benannte Empfänger und zeitlich begrenzt.",
        1,
        "sharing precision",
        "Sehr kontrolliert. Das Sternzeichen der alten Gäste ist allerdings weiterhin unbekannt."
      ],
      [
        "Ich prüfe zuerst die Mitglieder, bereinige den Projektraum und teile dann dort.",
        2,
        "process sharing delay",
        "Ein Gast aus 2023 fragt, ob er jetzt endlich aus der Gruppe darf."
      ],
      [
        "Ich zeige die Inhalte im gemeinsamen Call, statt eine Kopie zu verschicken.",
        3,
        "shortcut external speed",
        "Keine Datei versendet. Screenshots wurden leider noch nicht astrologisch verboten."
      ],
      [
        "Ich verwende den bestehenden Kanal, der Kunde ist dort Mitglied und hat eine NDA.",
        6,
        "external retainaccess sharing",
        "Die NDA ist kein magischer Unsichtbarkeitsumhang für sechs weitere Gäste."
      ]
    ]
  },
  {
    "title": "Dein KI-Assistent findet Dokumente aus 2013, die angeblich längst gelöscht wurden. Nächste Woche ist Audit.",
    "joke": "Der Ordner heißt „Alt_Ablage_BitteNichtLöschen“. Sein letzter Owner ist seit 2016 in Rente.",
    "opts": [
      [
        "Ich schränke den Zugriff auf die Altbestände ein und lasse Eigentümer sowie Fristen klären.",
        2,
        "archive process retain",
        "Du hast das Problem sicher aufbewahrt. Jetzt braucht es nur noch einen Verantwortlichen."
      ],
      [
        "Ich priorisiere selten genutzte Dateien für eine fachliche Bewertung und mögliche Löschung.",
        4,
        "precision speed",
        "Niedrige Nutzung ist kein Löschgrund. Aber wenigstens hat jemand angefangen zu sortieren."
      ],
      [
        "Ich verschiebe die Daten in ein separates Archiv und dokumentiere den Bestand.",
        5,
        "archive retain sprawl",
        "Das Datenchaos hat ein neues Zuhause. Mit Meerblick und Archivgebühren."
      ],
      [
        "Ich lasse ein freigegebenes KI-System vorsortieren und lasse unklare Fälle prüfen.",
        3,
        "ai automation precision",
        "Die KI klassifiziert 800 Dateien als „historisch interessant“. Der Auditor ist weniger begeistert."
      ]
    ]
  },
  {
    "title": "600 Downloads in zwölf Minuten. Der Mitarbeiter verlässt Freitag das Unternehmen. Gleichzeitig läuft eine Datenmigration.",
    "joke": "Das Dashboard ist rot. Die Projektleitung sagt „alles grün“. Teams schlägt einen „kurzen Sync“ vor.",
    "opts": [
      [
        "Ich prüfe die Ereigniskette zusammen mit dem Migrationsteam und dem Security-Team.",
        2,
        "observe precision process",
        "Kontext statt Kristallkugel. Die Sterne finden dich anstrengend vernünftig."
      ],
      [
        "Ich lasse verdächtige Transfers vorübergehend begrenzen und prüfe parallel den Kontext.",
        3,
        "speed privilege process",
        "Das Risiko sinkt. Die Migration ruft an. Sie möchte ihren Durchsatz zurück."
      ],
      [
        "Ich frage den Mitarbeiter direkt nach dem Hintergrund, bevor wir eskalieren.",
        5,
        "social access",
        "Die Antwort lautet „nur kurz“. Forensiker hassen diesen Trick."
      ],
      [
        "Ich sammle erst weitere Signale, um einen teuren Fehlalarm zu vermeiden.",
        6,
        "delay observe stealth",
        "Du vermeidest einen Fehlalarm. Eventuell auch die rechtzeitige Reaktion."
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
function calc(){const s=chosen(),a=state.answers.map((n,i)=>questions[i].opts[n]);const decisions=a.reduce((v,o)=>v+o.risk,0),matches=a.filter(o=>o.tags.some(t=>s.aff.includes(t))).length,cosmic=Math.min(20,matches*4+(matches>=3?3:0));const score=Math.max(0,100-s.base-decisions-cosmic);const band=score>=70?'DAS COMPLIANCE-EINHORN':score>=55?'KONTROLLIERTES CHAOS':score>=35?'WALKING AUDIT FINDING':'KOSMISCHE DATENKATASTROPHE';const notable=a.find(o=>o.tags.some(t=>s.aff.includes(t)))||a.slice().sort((x,y)=>y.risk-x.risk)[0];return {s,decisions,cosmic,score,band,notable};}
function render(){clearTimeout(timer);
if(state.stage==='start'){app.innerHTML='<section class="hero"><div class="kicker">THE INSIDER RISK HOROSCOPE · DDC EDITION</div><div class="sun">✳</div><h1>Deine Sterne.<br><em>Dein Sicherheitsrisiko.</em></h1><p class="lead">Fünf Entscheidungen. Zwölf Sternzeichen. Eine vollkommen unwissenschaftliche Risikoanalyse.</p>'+button('KOSMISCHEN SCORE BERECHNEN ↗','start')+'<div class="facts"><span>12 Sternzeichen</span><span>5 Fragen</span><span>0 wissenschaftliche Belege</span></div><p class="muted small">100 % Satire. Kein reales Security-Assessment. Die Berechnung erfolgt vollständig in deinem Browser.</p></section>';}
if(state.stage==='sign'){app.innerHTML='<section class="panel"><div class="kicker">PHASE 01 / 03 · ASTROLOGISCHE IDENTITÄTSKRISE</div><h1>Welches Sternzeichen hat dich erschaffen?</h1><p class="muted">Die Sterne beurteilen dich bereits. Das ist völlig unfair. Und Absicht.</p><div class="zodiacs">'+signs.map(s=>'<button class="zodiac '+(state.sign===s.id?'selected':'')+'" data-sign="'+s.id+'"><span>'+s.glyph+'</span>'+s.name+'</button>').join('')+'</div><div class="actions">'+button('← Zurück','home',true)+button('DIE STERNE BEFRAGEN →','quiz',false,!state.sign)+'</div></section>';}
if(state.stage==='quiz'){const q=questions[state.q];app.innerHTML='<section class="panel"><div class="topline"><span>PHASE 02 / 03 · DER REALITÄTSTEST</span><span>'+chosen().glyph+' '+chosen().name+'</span></div>'+progress(state.q+1,5)+'<div class="kicker">FRAGE '+(state.q+1)+' / 05</div><h1>'+esc(q.title)+'</h1><p class="joke">„'+esc(q.joke)+'“</p><div class="options">'+q.opts.map((o,i)=>'<label class="option '+(state.answers[state.q]===i?'selected':'')+'"><input type="radio" name="answer" value="'+i+'" '+(state.answers[state.q]===i?'checked':'')+'><b>'+String.fromCharCode(65+i)+'</b><span>'+esc(o.text)+'</span></label>').join('')+'</div><div class="actions">'+button('← Zurück','back',true)+button(state.q===4?'KOSMISCHE AUSWERTUNG →':'NÄCHSTE FRAGE →','next',false,state.answers[state.q]===null)+'</div><p class="muted small answer-count">'+state.answers.filter(x=>x!==null).length+' von 5 beantwortet</p></section>';}
if(state.stage==='scan'){app.innerHTML='<section class="panel center"><div class="kicker">PHASE 03 / 03 · ABSURDE ANALYTIK</div><div class="largeglyph">'+chosen().glyph+'</div><h1>Die Sterne urteilen.</h1><p class="muted">Scanne Mars, Merkur und fragwürdige Freigabeeinstellungen …</p><div class="loader"></div></section>';timer=setTimeout(()=>{state.stage='result';history.replaceState(null,'',shareLink());render();},1700);}
if(state.stage==='result'){const r=calc();app.innerHTML='<section class="result"><div class="result-hero"><div class="kicker">✦ OFFIZIELLES INOFFIZIELLES ZODIAC-ZERTIFIKAT ✦</div><div class="largeglyph">'+r.s.glyph+'</div><div class="kicker">'+r.s.name.toUpperCase()+'</div><h1>'+r.s.title+'</h1><div class="score">'+r.score+'<span>/ 100</span></div><h2>'+r.band+'</h2><p class="lead">'+esc(r.s.weak)+'</p></div><div class="details"><article><h3>✦ DEINE SUPERPOWER</h3><p>'+esc(r.s.power)+'</p></article><article><h3>⚠ DEINE KOSMISCHE SCHWÄCHE</h3><p>'+esc(r.s.weak)+'</p></article><article><h3>✺ DEINE ANTWORT WURDE BEMERKT</h3><p>'+esc(r.notable.reveal)+'</p></article><article><h3>✶ DEINE SECURITY-PROPHEZEIUNG</h3><p>'+esc(r.s.prophecy)+'</p></article></div><div class="breakdown"><h3>DER COSMIC SECURITY ALGORITHM™</h3>'+[['Sternzeichen-Risiko',r.s.base,40],['Deine Entscheidungen',r.decisions,40],['Kosmische Wechselwirkung',r.cosmic,20]].map(x=>'<div class="metric"><span>'+x[0]+'</span><strong>'+x[1]+' / '+x[2]+'</strong></div>'+progress(x[1],x[2])).join('')+'<p class="muted small">Security Score = 100 − Risikopunkte. Die astrologische Verzerrung ist Absicht.</p></div><div class="actions result-actions">'+button('ERGEBNISKARTE ALS PNG ↓','png')+button('ERGEBNIS TEILEN ↗','share',true)+button('↻ Nochmal spielen','reset',true)+'</div><p class="muted small center">Satire zur DDC Night Session. Sternzeichen sagen nichts über reale Insider-Risiken aus. Keine Ergebnisse werden gespeichert.</p></section>';}
app.querySelectorAll('[data-do]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.do)));
app.querySelectorAll('[data-sign]').forEach(b=>b.addEventListener('click',()=>{state.sign=b.dataset.sign;render();}));
app.querySelectorAll('input[name="answer"]').forEach(i=>i.addEventListener('change',()=>{state.answers[state.q]=Number(i.value);app.querySelectorAll('.option').forEach(el=>el.classList.toggle('selected',el.querySelector('input').checked));const next=app.querySelector('[data-do="next"]');if(next)next.disabled=false;const counter=app.querySelector('.answer-count');if(counter)counter.textContent=state.answers.filter(x=>x!==null).length+' von 5 beantwortet';}));}
function action(a){if(a==='start')state.stage='sign';if(a==='home')state.stage='start';if(a==='quiz'&&state.sign){state.stage='quiz';state.q=0;}if(a==='back'){if(state.q===0)state.stage='sign';else state.q--;}if(a==='next'){if(state.answers[state.q]===null)return;if(state.q<4)state.q++;else state.stage='scan';}if(a==='reset'){state.stage='start';state.sign=null;state.q=0;state.answers=[null,null,null,null,null];history.replaceState(null,'',location.pathname);}if(a==='png'){png();return;}if(a==='share'){share();return;}render();scrollTo({top:0,behavior:'smooth'});}
function shareLink(){return location.origin+location.pathname+'#result='+state.sign+'.'+state.answers.join('');}
function restore(){const m=location.hash.match(/^#result=([a-z]+)\.([0-3]{5})$/);if(m&&signs.some(s=>s.id===m[1])){state.sign=m[1];state.answers=m[2].split('').map(Number);state.stage='result';}}
function notice(t){let n=document.createElement('div');n.className='toast';n.textContent=t;document.body.append(n);setTimeout(()=>n.remove(),3500);}
async function share(){let url=shareLink();try{if(navigator.share)await navigator.share({title:'Mein Zodiac Security Score',url});else if(navigator.clipboard){await navigator.clipboard.writeText(url);notice('Ergebnislink kopiert.');}else notice('Link in der Adresszeile kopieren.');}catch(e){if(e.name!=='AbortError')notice('Link in der Adresszeile kopieren.');}}
function wrap(ctx,text,y,width,size){ctx.font=size+'px Georgia';let lines=[''];for(const word of text.split(' ')){let i=lines.length-1,c=lines[i]+' '+word;if(ctx.measureText(c).width>width&&lines[i])lines.push(word);else lines[i]=c.trim();}lines.slice(0,4).forEach((line,i)=>ctx.fillText(line,540,y+i*(size+13)));}
function png(){const r=calc(),c=document.createElement('canvas');c.width=1080;c.height=1350;let x=c.getContext('2d'),g=x.createLinearGradient(0,0,1080,1350);g.addColorStop(0,'#302640');g.addColorStop(1,'#091325');x.fillStyle=g;x.fillRect(0,0,1080,1350);x.strokeStyle='#cbaa69';x.lineWidth=3;x.strokeRect(45,45,990,1260);x.textAlign='center';x.fillStyle='#e7c98b';x.font='bold 32px Arial';x.fillText('ZODIAC RISK ENGINE™',540,145);x.font='200px serif';x.fillText(r.s.glyph,540,410);x.fillStyle='#f5edeb';x.font='bold 32px Arial';x.fillText(r.s.name.toUpperCase(),540,505);wrap(x,r.s.title,580,850,48);x.fillStyle=r.score<55?'#fb8b9a':'#9aeacb';x.font='bold 170px Arial';x.fillText(r.score,540,830);x.font='26px Arial';x.fillText('VON 100 SICHERHEITSPUNKTEN',540,883);x.fillStyle='#e7c98b';x.font='bold 32px Arial';x.fillText(r.band,540,960);x.fillStyle='#dfd7e4';wrap(x,r.s.weak,1060,880,30);x.font='24px Arial';x.fillStyle='#b5aec4';x.fillText('100 % SATIRE · 0 % WISSENSCHAFT',540,1224);let a=document.createElement('a');a.href=c.toDataURL('image/png');a.download='zodiac-security-score-'+r.s.id+'.png';a.click();notice('Ergebniskarte erstellt.');}
document.getElementById('brandLink').addEventListener('click',e=>{e.preventDefault();state.stage='start';history.replaceState(null,'',location.pathname);render();});restore();render();
})();