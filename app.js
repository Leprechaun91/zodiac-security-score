(()=>{'use strict';
const signs=[
['widder','♈','Widder','Der impulsive Insider',27,'speed bypass shortcut innovation privilege automation','Du handelst, während andere noch ein Meeting planen.','Governance ist schön, solange sie nicht im Weg steht.','Mars steht im Endpoint. Dein USB-Stick bekommt bald seinen eigenen Incident-Report.'],
['stier','♉','Stier','Der Legacy-Verteidiger',17,'retain archive retainaccess process shortcut copy','Du hältst Systeme am Leben, die längst ein Museum verdient hätten.','Löschen fühlt sich an wie Verrat an der Unternehmensgeschichte.','Venus durchquert dein Archiv. Der Ordner NICHT LÖSCHEN feiert seinen 15. Geburtstag.'],
['zwillinge','♊','Zwillinge','Die menschliche Sharing-API',27,'sharing external social access sprawl copy','Du bringst Menschen zusammen.','Manchmal auch Menschen, die nichts sehen sollten.','Merkur steht auf Jeder mit dem Link. Ein Projektgast von 2021 bedankt sich fürs Quartalsbudget.'],
['krebs','♋','Krebs','Der emotionale Data Hoarder',20,'archive copy retain sprawl precision process','Du bewahrst wichtiges Wissen.','Und auch sieben Versionen der Kantinenkarte.','Der Mond steht im PST-Archiv. FINAL_really_FINAL überlebt dein Notebook.'],
['loewe','♌','Löwe','Der Privilege Collector',27,'privilege approval access social speed bypass','Du übernimmst Verantwortung und triffst Entscheidungen.','Temporär ist für dich kein Zeitraum, sondern ein Lebensgefühl.','Die Sonne betritt Entra. Beim Access Review musst du erklären, warum PowerPoint Global Admin braucht.'],
['jungfrau','♍','Jungfrau','Die Shadow-IT-Architektin',23,'automation shortcut precision ai observe copy','Du automatisierst in Stunden, wofür andere Quartale brauchen.','Aus dem Workaround ist plötzlich ein geschäftskritisches System geworden.','Saturn trifft Power Automate. Deine Excel hat sieben Flows und keine Vertretung.'],
['waage','♎','Waage','Das Governance-Komitee',14,'delay process approval social retainaccess observe','Du verstehst Security und Business.','Deshalb kann niemand mit dir eine Entscheidung treffen.','Jupiter besucht das Steering Committee. Das Label wurde nach 14 Meetings als noch zu diskutieren eingestuft.'],
['skorpion','♏','Skorpion','Der Calculated Insider',34,'observe stealth precision external access retainaccess','Du erkennst Muster, die sonst niemand bemerkt.','Du weißt auch, welche Aktivitäten später im Audit sichtbar werden.','Pluto kreuzt das Audit-Log. Vier unauffällige Ereignisse werden auf einmal interessant.'],
['schuetze','♐','Schütze','Der charmante Social Engineer',40,'social access sharing external innovation speed','Menschen vertrauen dir sofort.','Berechtigungsanträge sind für dich nette Gespräche.','Jupiter steht im SharePoint. Du bekommst Finance und HR durch fünf freundliche Fragen.'],
['steinbock','♑','Steinbock','Der Langzeit-Stratege',17,'retain retainaccess archive process automation approval','Du baust Systeme, die Jahre überdauern.','Neue Rollen kommen dazu. Alte Berechtigungen gehen nie.','Saturn durchquert die Abteilungen. Du hast immer noch Zugriff auf HR, Sales und die Steinzeit.'],
['wassermann','♒','Wassermann','Der Shadow-AI-Pionier',34,'ai innovation shortcut automation sprawl observe','Du testest heute, was morgen jeder nutzt.','Das Tool läuft meist, bevor Security seinen Namen kennt.','Uranus steht im Browser-Tab. Die KI hat dein PDF verstanden. Wo es jetzt liegt, weiß niemand.'],
['fische','♓','Fische','Der Accidental Chaos Agent',23,'sprawl copy shortcut sharing archive social','Du findest für jedes Problem eine Lösung.','Später findest du sie selbst nicht mehr. Dafür sechs Kopien.','Neptun steht im OneDrive. Deine Kundenliste liegt in Teams, Dropbox und einem alten Prompt.']
].map(x=>({id:x[0],glyph:x[1],name:x[2],title:x[3],base:x[4],aff:x[5].split(' '),power:x[6],weak:x[7],prophecy:x[8]}));
const questions=[
  {
    "title": "Dein KI-Agent bekommt beim CEO-Demo-Versuch nur „403“. Was jetzt?",
    "joke": "Autonomer Agent. Erste autonome Entscheidung: „Nö“.",
    "opts": [
      [
        "Testdaten rein. Sieht fast echt aus.",
        2,
        "copy precision shortcut",
        "Du nennst es Sandbox. Der CEO nennt es Magie. Der Auditor fragt, was genau die Folie beweist."
      ],
      [
        "Kollegen mit Zugriff vor die Kamera schieben.",
        -4,
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
        -2,
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
        2,
        "approval process innovation",
        "Du sagst „Pilot“. Drei Gremien sagen „interessant“. Dein Kalender sagt gar nichts mehr."
      ],
      [
        "Selbst nachbauen. Drei Sprints sind doch nichts.",
        -4,
        "automation shortcut ai",
        "Herzlichen Glückwunsch: Du wolltest kein Shadow AI und hast versehentlich ein internes Startup gegründet."
      ],
      [
        "AGB lesen. Irgendwer muss es ja tun.",
        2,
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
        4,
        "retainaccess process external",
        "Du hast endlich ein Access Review gemacht. Die Sterne bitten um einen Gedenkkranz für Test Test."
      ],
      [
        "Neues Team bauen. Eins mehr fällt nicht auf.",
        -2,
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
        -4,
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
        2,
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
        -4,
        "ai automation sprawl",
        "Du hast aus unstrukturierten Daten strukturierte Unklarheit gemacht. Technisch ein Meilenstein."
      ],
      [
        "Bestandsliste anlegen. FINAL_v8 versteht sich.",
        -2,
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
        -2,
        "speed bypass privilege",
        "Du hast Datenabfluss begrenzt und gleichzeitig eine neue WhatsApp-Gruppe namens „Warum steht alles?“ ausgelöst."
      ],
      [
        "War Room starten. 17 Leute, 18 Meinungen.",
        2,
        "social approval delay",
        "Die gute Nachricht: Alle reden miteinander. Die schlechte: Inzwischen haben sich drei Unterarbeitskreise gebildet."
      ],
      [
        "Diskret prüfen. Meeting-Titel: „INSIDER-ALARM!“",
        -4,
        "stealth observe process",
        "Du handelst vorsichtig. Der Meeting-Titel „VERTRAULICHER INSIDER-FALL“ ist nur ein kleines Detail."
      ]
    ]
  }
]
.map(q=>({...q,opts:q.opts.map(o=>({text:o[0],impact:o[1],tags:o[2].split(' '),reveal:o[3]}))}));
const app=document.getElementById('app'), state={stage:'start',sign:null,q:0,answers:[null,null,null,null,null]};
let timer;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chosen=()=>signs.find(s=>s.id===state.sign);
const button=(label,action,secondary=false,disabled=false)=>'<button class="btn '+(secondary?'secondary':'primary')+'" data-do="'+action+'" '+(disabled?'disabled':'')+'>'+label+'</button>';
const progress=(n,total)=>'<div class="progress"><div style="width:'+Math.round(n/total*100)+'%"></div></div>';
function moodForScore(score){return score>=60?0:score>=45?1:score>=30?2:3;}
const artworkPositions=Object.fromEntries(signs.map((sign,i)=>[sign.id,{col:i%3,row:Math.floor(i/3),x:(i%3)*50,y:Math.floor(i/3)*100/3}]));
const artworkMoods=['safe','cautious','mischievous','chaos'];
const artworkURL=mood=>'assets/zodiac-'+artworkMoods[mood]+'.webp?v=0.9.3';
function zodiacPoster(sign,mood){
 const p=artworkPositions[sign.id],visual=window.ZodiacArt.svg(sign,mood),url=artworkURL(mood);
 return '<div class="zodiac-cinematic zodiac-cinematic-'+mood+'" data-atlas-url="'+url+'" role="img" aria-label="'+esc(sign.name)+' in '+['souveräner','vorsichtiger','verschmitzter','chaotischer'][mood]+' Zodiac-Inszenierung">'+
 '<div class="zodiac-painted" style="background-image:url(\''+url+'\');background-position:'+p.x+'% '+p.y+'%"></div>'+
 '<div class="zodiac-illustrated-fallback">'+visual+'</div>'+
 '<div class="zodiac-cinematic-vignette" aria-hidden="true"></div>'+
 '<div class="zodiac-art-banner"><span class="zodiac-art-overline">✦ ZODIAC CASE FILE ✦</span><strong>'+esc(sign.name)+'</strong></div>'+
 '</div>';
}
function setupZodiacArtwork(){
 app.querySelectorAll('.zodiac-cinematic').forEach(card=>{
  const url=card.getAttribute('data-atlas-url');
  if(!url)return;
  const image=new Image();
  image.onload=()=>{if(card.isConnected&&image.naturalWidth>0)card.classList.add('is-loaded');};
  image.onerror=()=>{if(card.isConnected)card.classList.remove('is-loaded');};
  image.src=url;
 });
}


const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
function calculateScore(sign,answers){
  const selected=answers.map((index,i)=>questions[i].opts[index]);
  const decisions=selected.reduce((total,option)=>total+option.impact,0);
  let matched=0,positiveResonances=0,negativeResonances=0;
  const resonances=selected.map(option=>{
    const overlap=option.tags.filter(tag=>sign.aff.includes(tag)).length;
    if(!overlap)return 0;
    matched++;
    const value=Math.sign(option.impact)*(overlap>=2?3:2);
    if(value>0)positiveResonances++;
    if(value<0)negativeResonances++;
    return value;
  });
  const patternBonus=(positiveResonances>=3?4:0)-(negativeResonances>=3?4:0);
  const cosmic=clamp(resonances.reduce((sum,value)=>sum+value,0)+patternBonus,-16,16);
  const score=clamp(75-sign.base+decisions+cosmic,0,100);
  const band=score>=60?'DAS COMPLIANCE-EINHORN':score>=45?'KONTROLLIERTES CHAOS':score>=30?'WALKING AUDIT FINDING':'KOSMISCHE DATENKATASTROPHE';
  const notableIndex=resonances.reduce((best,value,i)=>Math.abs(value)>Math.abs(resonances[best])?i:best,0);
  return {s:sign,decisions,cosmic,cosmicMatches:matched,patternBonus,score,band,notable:selected[notableIndex]};
}
function calc(){return calculateScore(chosen(),state.answers);}
function signed(value){return value>0?'+'+value:String(value);}
function scoreBreakdown(result){
  let pattern='Keine zusätzliche Musterverstärkung.';
  if(result.patternBonus>0)pattern='Dein Sternzeichen belohnt dein wiederkehrendes kontrolliertes Vorgehen.';
  if(result.patternBonus<0)pattern='Wiederkehrende riskante Reflexe verstärken deinen Cosmic Twist.';
  return '<div class="breakdown"><h3>DER COSMIC SECURITY ALGORITHM™ 2.0</h3>'+
    '<div class="metric"><span>Startwert</span><strong>75</strong></div>'+
    '<div class="metric"><span>Sternzeichen-Basisrisiko</span><strong>−'+result.s.base+'</strong></div>'+
    '<div class="metric"><span>Deine Entscheidungen</span><strong>'+signed(result.decisions)+'</strong></div>'+
    '<div class="metric"><span>Cosmic Twist</span><strong>'+signed(result.cosmic)+'</strong></div>'+
    '<p class="muted small">'+result.cosmicMatches+' von 5 Entscheidungen treffen die Eigenheiten deines Sternzeichens. '+pattern+' Der Score ist satirisch, keine echte Risikobewertung.</p>'+
    '</div>';
}

function render(){clearTimeout(timer);
app.classList.toggle('app-home',state.stage==='start');
if(state.stage==='start'){
 app.innerHTML=`
 <section class="hero-v2">
  <div class="hero-v2-glow" aria-hidden="true"></div>
  <div class="hero-v2-layout">
   <div class="hero-v2-copy">
    <div class="hero-v2-eyebrow"><span class="hero-v2-sparkle" aria-hidden="true">✦</span> DDC 2026 <span class="hero-v2-divider"></span> NIGHT SESSION SPECIAL</div>
    <div class="hero-v2-series">THE INSIDER RISK HOROSCOPE <span>✳</span></div>
    <h1>Die Sterne<br><span class="hero-v2-gold">sehen alles.</span><em>Auch deine<br>Workarounds.</em></h1>
    <p class="hero-v2-lead">Fünf knifflige Developer-Entscheidungen. Ein Sternzeichen, das miturteilt. Und ein Cosmic Security Score, der unangenehm persönlich werden könnte.</p>
    <div class="hero-v2-actions">
     ${button('MEINEN COSMIC SCORE ENTHÜLLEN <span aria-hidden="true">↗</span>','start')}
     <span class="hero-v2-time"><span aria-hidden="true">✧</span> 5 FRAGEN <span aria-hidden="true">·</span> KEIN LOGIN</span>
    </div>
    <p class="hero-v2-disclaimer">100 % Satire. 0 % Wissenschaft. Keine echten Risikoaussagen.</p>
   </div>
   <div class="hero-v2-visual" aria-hidden="true">
    <div class="hero-v2-orbit hero-v2-orbit-one"></div>
    <div class="hero-v2-orbit hero-v2-orbit-two"></div>
    <div class="hero-v2-crosshair">✧</div>
    <div class="hero-v2-card hero-v2-card-left">
      ${zodiacPoster(signs.find(s=>s.id==='waage'),0)}
      <div class="hero-v2-card-tag">♎ · GOVERNANCE</div>
    </div>
    <div class="hero-v2-card hero-v2-card-right">
      ${zodiacPoster(signs.find(s=>s.id==='schuetze'),3)}
      <div class="hero-v2-card-tag">♐ · SOCIAL ENGINEERING</div>
    </div>
    <div class="hero-v2-card hero-v2-card-front">
      <div class="hero-v2-card-kicker"><span>✦</span> ZODIAC CASE FILE</div>
      ${zodiacPoster(signs.find(s=>s.id==='wassermann'),2)}
      <div class="hero-v2-card-tag">♒ · SHADOW AI</div>
    </div>
    <div class="hero-v2-visual-note hero-v2-note-top"><span>✳</span> 12 ZODIAC ARCHETYPES</div>
    <div class="hero-v2-visual-note hero-v2-note-bottom"><span class="hero-v2-note-dot"></span> COSMIC RISK ENGINE V2</div>
   </div>
  </div>
  <div class="hero-v2-journey" aria-label="So funktioniert das Quiz">
   <div class="hero-v2-step"><span class="hero-v2-step-no">01</span><span><strong>Dein Sternzeichen.</strong><small>12 ziemlich eigensinnige Profile.</small></span></div>
   <div class="hero-v2-step"><span class="hero-v2-step-no">02</span><span><strong>Deine Entscheidungen.</strong><small>5 Dilemmas aus dem Developer-Alltag.</small></span></div>
   <div class="hero-v2-step"><span class="hero-v2-step-no">03</span><span><strong>Dein kosmisches Urteil.</strong><small>Der Cosmic Twist rechnet mit.</small></span></div>
  </div>
  <div class="hero-v2-footnote"><span aria-hidden="true">✦</span> DIE STERNE SIND NICHT ZERTIFIZIERT. DEIN RISIKO-APPETIT VIELLEICHT AUCH NICHT.</div>
 </section>`;
}
if(state.stage==='sign'){app.innerHTML='<section class="panel"><div class="kicker">PHASE 01 / 03 · ASTROLOGISCHE IDENTITÄTSKRISE</div><h1>Welches Sternzeichen hat dich erschaffen?</h1><p class="muted">Es gibt keine perfekte Antwort. Nur fünf Entscheidungen, vier Zielkonflikte pro Frage und ein Sternzeichen mit Vorurteilen.</p><div class="zodiacs">'+signs.map(s=>'<button class="zodiac '+(state.sign===s.id?'selected':'')+'" data-sign="'+s.id+'"><span>'+s.glyph+'</span>'+s.name+'</button>').join('')+'</div><div class="actions">'+button('← Zurück','home',true)+button('DIE STERNE BEFRAGEN →','quiz',false,!state.sign)+'</div></section>';}
if(state.stage==='quiz'){const q=questions[state.q];app.innerHTML='<section class="panel"><div class="topline"><span>PHASE 02 / 03 · DER REALITÄTSTEST</span><span>'+chosen().glyph+' '+chosen().name+'</span></div>'+progress(state.q+1,5)+'<div class="kicker">FRAGE '+(state.q+1)+' / 05</div><h1>'+esc(q.title)+'</h1><p class="joke">„'+esc(q.joke)+'“</p><div class="options">'+q.opts.map((o,i)=>'<label class="option '+(state.answers[state.q]===i?'selected':'')+'"><input type="radio" name="answer" value="'+i+'" '+(state.answers[state.q]===i?'checked':'')+'><b>'+String.fromCharCode(65+i)+'</b><span>'+esc(o.text)+'</span></label>').join('')+'</div><div class="actions">'+button('← Zurück','back',true)+button(state.q===4?'KOSMISCHE AUSWERTUNG →':'NÄCHSTE FRAGE →','next',false,state.answers[state.q]===null)+'</div><p class="muted small answer-count">'+state.answers.filter(x=>x!==null).length+' von 5 beantwortet</p></section>';}
if(state.stage==='scan'){app.innerHTML='<section class="panel center"><div class="kicker">PHASE 03 / 03 · ABSURDE ANALYTIK</div><div class="scanning-zodiac">'+window.ZodiacArt.svg(chosen(),2)+'</div><h1>Die Sterne urteilen.</h1><p class="muted">Scanne Mars, Merkur und fragwürdige Freigabeeinstellungen …</p><div class="loader"></div></section>';timer=setTimeout(()=>{state.stage='result';history.replaceState(null,'',shareLink());render();},1700);}
if(state.stage==='result'){const r=calc(),m=moodForScore(r.score);app.innerHTML='<section class="result result-tone-'+m+'"><div class="result-hero"><div class="kicker">✦ DEINE OFFIZIELL INOFFIZIELLE ZODIAC-FALLAKTE ✦</div><div class="result-topline"><div class="result-portrait-wrap">'+zodiacPoster(r.s,m)+'<div class="portrait-tag">'+['SOUVERÄN & ABGESICHERT','NACHDENKLICH & UNTER BEOBACHTUNG','VERDÄCHTIG VERSCHMITZT','KOSMISCHES SECURITY-CHAOS'][m]+'</div></div><div class="result-headline"><div class="largeglyph">'+r.s.glyph+'</div><div class="kicker">'+r.s.name.toUpperCase()+'</div><h1>'+r.s.title+'</h1><div class="score">'+r.score+'<span>/ 100</span></div><h2>'+r.band+'</h2></div></div><p class="lead">'+esc(r.s.weak)+'</p></div><div class="details"><article><h3>✦ DEINE SUPERPOWER</h3><p>'+esc(r.s.power)+'</p></article><article><h3>⚠ DEINE KOSMISCHE SCHWÄCHE</h3><p>'+esc(r.s.weak)+'</p></article><article><h3>✺ DEINE ANTWORT WURDE BEMERKT</h3><p>'+esc(r.notable.reveal)+'</p></article><article><h3>✶ DEINE SECURITY-PROPHEZEIUNG</h3><p>'+esc(r.s.prophecy)+'</p></article></div>'+scoreBreakdown(r)+'<div class="actions result-actions">'+button('ERGEBNISKARTE ALS PNG ↓','png')+button('ERGEBNIS TEILEN ↗','share',true)+button('↻ Nochmal spielen','reset',true)+'</div><p class="muted small center">Satire zur DDC Night Session. Sternzeichen sagen nichts über reale Insider-Risiken aus. Keine Ergebnisse werden gespeichert.</p></section>';}
setupZodiacArtwork();
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
x.textAlign='center';x.fillStyle='#f2d59a';x.font='bold 31px Arial';x.fillText('ZODIAC RISK ENGINE™',540,132);x.font='18px Arial';x.fillText('DDC NIGHT SESSION · JULIAN KUSENBERG',540,170);
try{await new Promise((resolve,reject)=>{
const paint=(im,isAtlas)=>{try{
x.save();x.beginPath();x.roundRect(260,192,560,510,22);x.clip();
if(isAtlas){const p=artworkPositions[r.s.id],w=im.naturalWidth/3,h=im.naturalHeight/4;x.drawImage(im,p.col*w,p.row*h,w,h,260,192,560,510);}
else{x.drawImage(im,0,0,im.naturalWidth,im.naturalHeight,260,192,560,510);}
x.fillStyle=themes[m][0];x.globalAlpha=m===3?.23:m===2?.13:.08;x.fillRect(260,192,560,510);x.globalAlpha=1;
const shade=x.createLinearGradient(0,510,0,700);shade.addColorStop(0,'#080d1b00');shade.addColorStop(1,'#060c19e8');x.fillStyle=shade;x.fillRect(260,480,560,222);
x.restore();resolve();
}catch(e){reject(e);}};
const im=new Image();im.onload=()=>paint(im,true);im.onerror=()=>{const fallback=new Image();fallback.onload=()=>paint(fallback,false);fallback.onerror=reject;fallback.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(window.ZodiacArt.svg(r.s,m));};im.src=artworkURL(m);
});}catch(e){x.fillStyle='#24203a';x.fillRect(260,192,560,510);x.fillStyle=t[1];x.font='210px serif';x.fillText(r.s.glyph,540,455);}
try{await new Promise(resolve=>{const brand=new Image();brand.onload=()=>{x.drawImage(brand,73,65,83,111);resolve();};brand.onerror=resolve;brand.src='assets/sherlock-logo.svg?v=0.8.0';});}catch(e){}x.strokeStyle=t[1];x.lineWidth=4;x.strokeRect(260,192,560,510);
x.fillStyle='#f5ebee';x.font='bold 32px Arial';x.fillText(r.s.name.toUpperCase(),540,668);x.font='bold 49px Georgia';wrap(x,r.s.title,766,920,49);x.fillStyle=t[1];x.font='bold 145px Arial';x.fillText(r.score,540,974);x.font='23px Arial';x.fillText('VON 100 SICHERHEITSPUNKTEN',540,1021);x.fillStyle='#eacb91';x.font='bold 28px Arial';x.fillText(r.band,540,1083);x.fillStyle='#ece0e8';wrap(x,r.s.weak,1155,850,26);x.fillStyle='#a8a7bc';x.font='21px Arial';x.fillText('100 % SATIRE · 0 % WISSENSCHAFT',540,1256);const a=document.createElement('a');let exportUrl;try{exportUrl=c.toDataURL('image/png');}catch(err){const f=document.createElement('canvas');f.width=1080;f.height=1350;const k=f.getContext('2d');k.fillStyle='#11172c';k.fillRect(0,0,1080,1350);k.strokeStyle='#e5c78c';k.lineWidth=4;k.strokeRect(45,45,990,1260);k.textAlign='center';k.fillStyle='#e5c78c';k.font='bold 42px Arial';k.fillText('ZODIAC RISK ENGINE™',540,180);k.font='180px serif';k.fillText(r.s.glyph,540,540);k.fillStyle='#fff';k.font='bold 46px Arial';k.fillText(r.s.name.toUpperCase(),540,640);k.font='bold 160px Arial';k.fillText(r.score,540,875);k.fillStyle='#f0c691';k.font='32px Arial';k.fillText('SECURITY SCORE · 100 % SATIRE',540,940);k.fillStyle='#e6e0e8';k.font='bold 32px Arial';k.fillText(r.band,540,1030);exportUrl=f.toDataURL('image/png');}a.href=exportUrl;a.download='zodiac-security-score-'+r.s.id+'.png';a.click();notice('Deine Zodiac-Ergebniskarte ist fertig.');}
document.getElementById('brandLink').addEventListener('click',e=>{e.preventDefault();state.stage='start';history.replaceState(null,'',location.pathname);render();});restore();render();
})();