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
    "title": "Ein Mitarbeiter lädt in zwölf Minuten 600 Dateien herunter. Am Freitag verlässt er das Unternehmen. Gleichzeitig läuft eine große Datenmigration. Insider-Risiko oder ganz normaler Projektstress? Was tust du?",
    "joke": "Security vermutet Datenklau. Die IT spricht von einer Migration. Der Mitarbeiter ist gerade Kaffee holen. Drei Wahrheiten, null Gewissheit.",
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
const app=document.getElementById('app'), state={stage:'start',sign:null,q:0,answers:[null,null,null,null,null],statsOutcome:null,sharedResult:false};
let timer,submissionBusy=false;
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
 '<div class="zodiac-art-banner"><span class="zodiac-art-overline">'+(sign.id==='schuetze'?'✦ SOCIAL ENGINEERING ✦':'✦ ZODIAC CASE FILE ✦')+'</span><strong>'+esc(sign.name)+'</strong></div>'+
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
  const resonanceDetails=selected.map((option,index)=>{
    const matchedTags=option.tags.filter(tag=>sign.aff.includes(tag));
    if(!matchedTags.length)return {question:index+1,answer:option.text,matchedTags,value:0};
    matched++;
    const value=Math.sign(option.impact)*(matchedTags.length>=2?3:2);
    if(value>0)positiveResonances++;
    if(value<0)negativeResonances++;
    return {question:index+1,answer:option.text,matchedTags,value};
  });
  const patternBonus=(positiveResonances>=3?4:0)-(negativeResonances>=3?4:0);
  const rawCosmic=resonanceDetails.reduce((sum,detail)=>sum+detail.value,0)+patternBonus;
  const cosmic=clamp(rawCosmic,-16,16);
  const score=clamp(75-sign.base+decisions+cosmic,0,100);
  const band=score>=60?'DAS COMPLIANCE-EINHORN':score>=45?'KONTROLLIERTES CHAOS':score>=30?'WALKING AUDIT FINDING':'KOSMISCHE DATENKATASTROPHE';
  const notableIndex=resonanceDetails.reduce((best,detail,i)=>Math.abs(detail.value)>Math.abs(resonanceDetails[best].value)?i:best,0);
  return {s:sign,decisions,cosmic,cosmicMatches:matched,patternBonus,score,band,notable:selected[notableIndex],resonanceDetails,rawCosmic};
}
function calc(){return calculateScore(chosen(),state.answers);}
function signed(value){return value>0?'+'+value:String(value);}
const cosmicTraitLabels={
  speed:'Tempo',bypass:'Abkürzungen',shortcut:'Workarounds',innovation:'Experimentierfreude',
  privilege:'Privilegien',automation:'Automatisierung',retain:'Aufbewahrung',
  archive:'Archive',retainaccess:'Alte Zugriffe',process:'Prozesse',
  approval:'Genehmigungen',copy:'Kopien',sharing:'Teilen',external:'Externe',
  social:'Charme & Kontakte',access:'Zugriffsrechte',sprawl:'Wildwuchs',
  precision:'Detailverliebtheit',ai:'KI-Neugier',observe:'Beobachtung',
  delay:'Aufschieben',stealth:'Diskretion'
};
function scoreBreakdown(result){
  const resonances=result.resonanceDetails.filter(item=>item.value!==0);
  const top=[...resonances].sort((a,b)=>Math.abs(b.value)-Math.abs(a.value)||a.question-b.question).slice(0,2);
  const remaining=resonances.filter(item=>!top.includes(item));
  const otherPoints=remaining.reduce((sum,item)=>sum+item.value,0);
  const intro=resonances.length
    ?'Dein '+esc(result.s.name)+'-Profil hat '+resonances.length+' deiner fünf Entscheidungen wiedererkannt. Zufall? Der Kosmos führt Protokoll.'
    :'Heute erkennt dein Sternzeichen keine seiner typischen Marotten. Das Universum bleibt trotzdem misstrauisch.';
  const matchRows=top.map(item=>{
    const traits=item.matchedTags.map(tag=>cosmicTraitLabels[tag]||tag).join(' · ');
    const tone=item.value<0?'cosmic-delta-risk':'cosmic-delta-safe';
    const reaction=item.value<0?'Typischer Risikoreflex':'Kosmisch kontrolliert';
    return '<div class="cosmic-resonance"><div class="cosmic-resonance-copy">'+
      '<span class="cosmic-question">FRAGE '+item.question+' · '+reaction+'</span>'+
      '<strong>'+esc(item.answer)+'</strong>'+
      '<small>Dein Sternzeichen erkennt: '+esc(traits)+'</small>'+
      '</div><b class="cosmic-delta '+tone+'">'+signed(item.value)+'</b></div>';
  }).join('');
  let patternText='Kein Dreifach-Treffer. Die Sterne behalten dich im Auge.';
  if(result.patternBonus>0)patternText='Dreimal charaktertypisch und kontrolliert: Die Sterne applaudieren.';
  if(result.patternBonus<0)patternText='Dreimal derselbe riskante Reflex: Selbst die Sterne werden nervös.';
  const patternRow='<div class="cosmic-mini-row"><span>'+patternText+'</span><strong>'+signed(result.patternBonus)+'</strong></div>';
  const otherRow=remaining.length
    ?'<div class="cosmic-mini-row"><span>'+remaining.length+' weitere '+(remaining.length===1?'Übereinstimmung':'Übereinstimmungen')+'</span><strong>'+signed(otherPoints)+'</strong></div>'
    :'';
  const limitAdjustment=result.cosmic-result.rawCosmic;
  const capRow=limitAdjustment
    ?'<div class="cosmic-mini-row"><span>Kosmische Obergrenze von ±16 Punkten</span><strong>'+signed(limitAdjustment)+'</strong></div>'
    :'';
  const finalScore=result.score;
  const totalBeforeClamp=100-25-result.s.base+result.decisions+result.cosmic;
  const scoreLimitText=totalBeforeClamp!==finalScore?' <span class="cosmic-limit-note">(auf 0 bis 100 begrenzt)</span>':'';
  return '<section class="breakdown cosmic-breakdown" aria-label="Berechnung deines Cosmic Security Score">'+
    '<div class="cosmic-heading"><div><span class="cosmic-eyebrow">✦ DIE ASTROLOGISCHE BUCHHALTUNG</span><h3>COSMIC SECURITY ALGORITHM™ 2.0</h3></div><span class="cosmic-final-score">'+finalScore+'<small>/100</small></span></div>'+
    '<div class="cosmic-ledger">'+
      '<div class="cosmic-ledger-row"><span>Maximaler Security Score</span><strong>100</strong></div>'+
      '<div class="cosmic-ledger-row"><span>Allgemeiner kosmischer Grundverdacht</span><strong>−25</strong></div>'+
      '<div class="cosmic-ledger-row"><span>Dein Sternzeichen · '+esc(result.s.name)+'</span><strong>−'+result.s.base+'</strong></div>'+
      '<div class="cosmic-ledger-row"><span>Deine fünf Entscheidungen</span><strong>'+signed(result.decisions)+'</strong></div>'+
      '<div class="cosmic-ledger-row cosmic-ledger-twist"><span>✧ Cosmic Twist</span><strong>'+signed(result.cosmic)+'</strong></div>'+
      '<div class="cosmic-ledger-row cosmic-ledger-total"><span>DEIN SECURITY SCORE'+scoreLimitText+'</span><strong>'+finalScore+' / 100</strong></div>'+
    '</div>'+
    '<div class="cosmic-insight"><div class="cosmic-insight-title"><span>✧</span><h4>Dein kosmischer Fingerabdruck</h4><span class="cosmic-insight-tally">'+resonances.length+'/5</span></div>'+
      '<p>'+intro+'</p>'+
      (matchRows||'<p class="cosmic-no-hit">Nicht jedes Sternzeichen muss sich beim Datenschutz selbst anzeigen.</p>')+
      '<div class="cosmic-calculation-details">'+otherRow+patternRow+capRow+'</div>'+
      '<p class="cosmic-insight-asterisk">Der Cosmic Twist ist Satire, kein echtes Security Assessment. Dein CISO darf wieder durchatmen.</p>'+
    '</div>'+
  '</section>';
}

function personalVerdict(result){
 const lines={
  widder:["Dein Risiko rennt schon los, während die Governance noch ihre Schuhe sucht.","Du hast den Sicherheitsgurt gefunden, bevor du auf Deploy gedrückt hast.","Mars hat heute keinen passenden Schnellschuss entdeckt. Das macht ihn nervös."],
  stier:["Du nennst es historische Dokumentation. Andere nennen es digitales Bernsteinzimmer.","Du hast das Archiv tatsächlich begrenzt. Ein alter SharePoint-Ordner weint leise.","Die Sterne fanden keinen deiner legendären Aufbewahrungsreflexe. Verdächtig."],
  zwillinge:["Du verbindest Menschen. Manchmal gleich das gesamte externe Adressbuch.","Du hast beim Teilen sogar über Empfänger nachgedacht. Merkur ist irritiert.","Heute kein kosmischer Sharing-Reflex. Vielleicht ist das Gastkonto endlich abgemeldet."],
  krebs:["Du hast für alles eine Sicherheitskopie. Auch für die Sicherheitskopie.","Du hast deinen Beschützerinstinkt mit klaren Grenzen kombiniert. Selten und schön.","Der Mond findet heute keinen zusätzlichen Backup-Ordner. Das kann nicht stimmen."],
  loewe:["Deine Vision ist groß. Dein Berechtigungsumfang leider auch.","Du bist König geblieben, ohne gleich das gesamte Tenant zu regieren.","Der Löwe hat heute weder Privilegien gesammelt noch ein Reich gegründet. Noch."],
  jungfrau:["Aus einem schnellen Workaround wird bei dir ein System mit sieben Abhängigkeiten.","Du hast die Automatisierung diesmal gezähmt, bevor sie ein Eigenleben bekam.","Deine versteckten Flows haben sich heute auffällig still verhalten."],
  waage:["Ein Urteil steht an. Du gründest vorsichtshalber ein Steering Committee.","Du hast zwischen Tempo und Kontrolle entschieden, ohne 14 Termine zu buchen.","Die Waage zeigt heute keine Governance-Krise. Vielleicht fehlt das Protokoll."],
  skorpion:["Du liest Audit-Logs wie andere Krimis. Und kennst das Ende vorher.","Du hast erst Belege gesammelt und dann gehandelt. Fast schon unfair professionell.","Der Skorpion zeigt heute keine verdächtige Spur. Genau das wäre seine Strategie."],
  schuetze:["Ein freundliches Gespräch später hast du Zugriff auf den halben Tenant.","Du hast deinen Charme eingesetzt, ohne dir heimlich Berechtigungen zu organisieren.","Der Schütze hat heute niemanden überredet. Hat er etwa Urlaub?"],
  steinbock:["Deine Rollen sind unbefristet. Dein Organigramm nicht.","Du hast tatsächlich an Ablaufdaten gedacht. Saturn verlangt eine zweite Prüfung.","Kein alter Zugriff entdeckt. Der Steinbock beantragt vorsichtshalber eine Nachprüfung."],
  wassermann:["Du hast das Tool von morgen schon gestern produktiv genommen. Mit echten Daten.","Innovation ohne Datenabfluss? Die Sterne wollen den Quellcode sehen.","Der Wassermann hat heute nichts Unfreigegebenes ausprobiert. Release verschoben?"],
  fische:["Du findest Lösungen überall. Und speicherst sie auch überall.","Du hast die Datenflut heute erstaunlich gut im Becken gehalten.","Neptun sieht heute keine neue Kopie. Sie liegt bestimmt nur in einem anderen Team."]
 };
 const matches=result.resonanceDetails.filter(x=>x.value!==0)
  .sort((a,b)=>Math.abs(b.value)-Math.abs(a.value)||a.question-b.question);
 const primary=matches[0],positive=matches.filter(x=>x.value>0).length,negative=matches.filter(x=>x.value<0).length;
 const balanced=positive>0&&negative>0&&Math.abs(result.cosmic)<=2;
 const mode=(!primary||balanced)?2:primary.value<0?0:1;
 const line=(lines[result.s.id]||lines.fische)[mode];
 const emphasis=primary
  ?'Die Sterne haben besonders deine Antwort bei Frage '+primary.question+' registriert.'
  :'Dein Sternzeichen hat bei den fünf Antworten keinen eindeutigen Treffer gefunden.';
 return {title:mode===0?'Deine kosmische Anklage':mode===1?'Dein überraschender Freispruch':'Kosmisches Schweigen',body:line,footnote:emphasis};
}



function statsResultNote(){
 if(state.sharedResult){
  return '<div class="stats-result-status" role="note"><span>✦ GETEILTES ERGEBNIS</span>'+
  'Dieser Ergebnislink zeigt eine bestehende Fallakte und erzeugt keine neue Statistikstimme.</div>';
 }
 const info=state.statsOutcome;
 if(!info)return '';
 if(info.already){
  return '<div class="stats-result-status" role="status"><span>✦ BEREITS MITGEZÄHLT</span>'+
   'Dein Browser hat schon eine Stimme eingereicht. Weitere Durchläufe werden nicht erneut gezählt.</div>';
 }
 return '<div class="stats-result-status" role="status"><span>✦ FÜR DIE NIGHT SESSION ERFASST</span>'+
  'Dein Ergebnis ist in die Live-Auswertung eingeflossen. Danke fürs Mitspielen!</div>';
}
async function finalizeQuiz(){
 if(submissionBusy||state.stage!=='scan')return;
 submissionBusy=true;
 const status=app.querySelector('#statsSubmitStatus');
 const retry=app.querySelector('[data-do="retry-stats"]');
 const sign=state.sign,answers=[...state.answers];
 if(status)status.textContent='Dein Zodiac-Ergebnis wird für das Live-Board erfasst …';
 if(retry)retry.hidden=true;
 try{
  if(!window.ZodiacStats?.enabled)throw new Error('Die Statistikverbindung ist derzeit nicht eingerichtet.');
  const outcome=await window.ZodiacStats.submit(calc(),answers);
  if(state.stage!=='scan'||state.sign!==sign||state.answers.some((x,i)=>x!==answers[i]))return;
  state.statsOutcome={already:!!outcome.already||!outcome.accepted,participants:Number(outcome.participants)||0};
  state.sharedResult=false;
  state.stage='result';
  history.replaceState(null,'',shareLink());
  render();
  scrollTo({top:0,behavior:'smooth'});
 }catch(err){
  if(state.stage!=='scan')return;
  if(status)status.textContent='Die Ergebnisübermittlung ist fehlgeschlagen: '+(err?.message||err)+'. Prüfe deine Verbindung und versuche es erneut.';
  if(retry)retry.hidden=false;
  const quit=app.querySelector('[data-do="quit-stats"]');
  if(quit)quit.hidden=false;
 }finally{submissionBusy=false;}
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
    <p class="hero-v2-data-note"><strong>Live-Auswertung gehört zum Quiz:</strong> Bei Abschluss übertragen wir dein Sternzeichen, fünf Antwortcodes und eine zufällige, im Browser gespeicherte Abstimm-ID an Supabase für die DDC Night Session. Ein Ergebnis pro Browser wird gezählt. Ohne Übermittlung gibt es keine Auswertung. Keine Namen oder E-Mail-Adressen im Quiz; technische Zugriffslogs können anfallen. Die Daten werden nach der Veranstaltung manuell gelöscht. <a href="https://kusenberg.net/datenschutzerklaerung" target="_blank" rel="noopener noreferrer">Datenschutzhinweise</a>.</p>
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
if(state.stage==='sign'){app.innerHTML='<section class="panel"><div class="kicker">PHASE 01 / 03 · ASTROLOGISCHE IDENTITÄTSKRISE</div><h1>Welches Sternzeichen hat dich erschaffen?</h1><p class="muted">Es gibt keine perfekte Antwort. Nur fünf Entscheidungen, vier Zielkonflikte pro Frage und ein Sternzeichen mit Vorurteilen.</p><p class="stats-disclosure-mini">✦ Deine Antworten fließen beim Abschluss automatisch in die DDC-Live-Auswertung ein. Ohne Login, eine Stimme pro Browser.</p><div class="zodiacs">'+signs.map(s=>'<button class="zodiac '+(state.sign===s.id?'selected':'')+'" data-sign="'+s.id+'"><span>'+s.glyph+'</span>'+s.name+'</button>').join('')+'</div><div class="actions">'+button('← Zurück','home',true)+button('DIE STERNE BEFRAGEN →','quiz',false,!state.sign)+'</div></section>';}
if(state.stage==='quiz'){const q=questions[state.q];app.innerHTML='<section class="panel"><div class="topline"><span>PHASE 02 / 03 · DER REALITÄTSTEST</span><span>'+chosen().glyph+' '+chosen().name+'</span></div>'+progress(state.q+1,5)+'<div class="kicker">FRAGE '+(state.q+1)+' / 05</div><h1>'+esc(q.title)+'</h1><p class="joke">„'+esc(q.joke)+'“</p><div class="options">'+q.opts.map((o,i)=>'<label class="option '+(state.answers[state.q]===i?'selected':'')+'"><input type="radio" name="answer" value="'+i+'" '+(state.answers[state.q]===i?'checked':'')+'><b>'+String.fromCharCode(65+i)+'</b><span>'+esc(o.text)+'</span></label>').join('')+'</div><div class="actions">'+button('← Zurück','back',true)+button(state.q===4?'KOSMISCHE AUSWERTUNG →':'NÄCHSTE FRAGE →','next',false,state.answers[state.q]===null)+'</div><p class="muted small answer-count">'+state.answers.filter(x=>x!==null).length+' von 5 beantwortet</p>'+(state.q===4?'<p class="stats-disclosure-mini">Mit „Kosmische Auswertung“ wird dein Ergebnis automatisch für das DDC-Live-Board gespeichert. Das ist Bestandteil des Quiz; es gibt keinen weiteren Zustimmungsbutton.</p>':'')+'</section>';}
if(state.stage==='scan'){app.innerHTML='<section class="panel center"><div class="kicker">PHASE 03 / 03 · KOSMISCHE AUSWERTUNG</div><div class="scanning-zodiac">'+window.ZodiacArt.svg(chosen(),2)+'</div><h1>Die Sterne urteilen.</h1><p id="statsSubmitStatus" class="stats-submit-status" role="status">Wir erfassen dein Ergebnis für die DDC-Live-Auswertung …</p><div class="loader"></div><div class="stats-recovery">'+button('ÜBERMITTLUNG ERNEUT VERSUCHEN','retry-stats',true)+'<button type="button" class="btn secondary" data-do="quit-stats">Quiz abbrechen</button></div></section>';app.querySelector('[data-do="retry-stats"]').hidden=true;app.querySelector('[data-do="quit-stats"]').hidden=true;timer=setTimeout(()=>{finalizeQuiz();},1050);}
if(state.stage==='result'){
 const r=calc(),m=moodForScore(r.score),v=personalVerdict(r);
 app.innerHTML='<section class="result result-tone-'+m+'">'+
 '<div class="result-hero"><div class="kicker">✦ DEINE OFFIZIELL INOFFIZIELLE ZODIAC-FALLAKTE ✦</div>'+
 '<div class="result-topline"><div class="result-portrait-wrap">'+zodiacPoster(r.s,m)+
 '<div class="portrait-tag">'+['SOUVERÄN & ABGESICHERT','NACHDENKLICH & UNTER BEOBACHTUNG','VERDÄCHTIG VERSCHMITZT','KOSMISCHES SECURITY-CHAOS'][m]+'</div></div>'+
 '<div class="result-headline"><div class="largeglyph">'+r.s.glyph+'</div><div class="kicker">'+r.s.name.toUpperCase()+'</div><h1>'+r.s.title+'</h1>'+
 '<div class="score">'+r.score+'<span>/ 100</span></div><h2>'+r.band+'</h2></div></div></div>'+
 '<div class="result-verdict"><div class="result-verdict-eyebrow">✦ PERSÖNLICHE STERNENAKTE</div><h3>'+esc(v.title)+'</h3><p>'+esc(v.body)+'</p><small>'+esc(v.footnote)+'</small></div>'+
 '<div class="result-share-primary">'+button('MEINE ZODIAC-KARTE TEILEN ↗','share')+button('PNG SPEICHERN ↓','png',true)+'</div>'+
 '<p class="result-share-hint">Dein Sternzeichen, dein Score und deine persönliche Diagnose. Kein Login nötig.</p>'+
 statsResultNote()+
 '<details class="result-expand"><summary><span>✧ Superpower, Schwäche und Prophezeiung</span><span class="expand-chevron" aria-hidden="true">⌄</span></summary>'+
 '<div class="details"><article><h3>✦ DEINE SUPERPOWER</h3><p>'+esc(r.s.power)+'</p></article>'+
 '<article><h3>⚠ DEINE KOSMISCHE SCHWÄCHE</h3><p>'+esc(r.s.weak)+'</p></article>'+
 '<article><h3>✺ DEINE ANTWORT WURDE BEMERKT</h3><p>'+esc(r.notable.reveal)+'</p></article>'+
 '<article><h3>✶ DEINE SECURITY-PROPHEZEIUNG</h3><p>'+esc(r.s.prophecy)+'</p></article></div></details>'+
 '<details class="result-expand"><summary><span>✧ Wie die Sterne gerechnet haben</span><span class="expand-chevron" aria-hidden="true">⌄</span></summary>'+scoreBreakdown(r)+'</details>'+
 '<aside class="night-invite"><span>DDC 2026 · NIGHT SESSION</span><h3>Die Sterne haben gesprochen.<br>Die Beweise folgen auf der Bühne.</h3>'+
 '<p>In der Night Session wird aus dem absurden Horoskop eine echte Insider-Risk-Geschichte. Die zwölf Sternzeichen sind erst der Anfang.</p></aside>'+
 '<div class="result-utility-actions">'+button('ERGEBNISLINK KOPIEREN','copy-link',true)+button('↻ Nochmal spielen','reset',true)+'</div>'+
 '<p class="muted small center">100 % Satire. Keine echte Risikobewertung. Der Quiz-Abschluss erfasst automatisch Sternzeichen, Antwortcodes und eine Browser-Abstimm-ID; geteilte Ergebnislinks lösen keine weitere Meldung aus.</p></section>';
}

setupZodiacArtwork();
app.querySelectorAll('[data-do]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.do)));
app.querySelectorAll('[data-sign]').forEach(b=>b.addEventListener('click',()=>{state.sign=b.dataset.sign;render();}));
app.querySelectorAll('input[name="answer"]').forEach(i=>i.addEventListener('change',()=>{state.answers[state.q]=Number(i.value);app.querySelectorAll('.option').forEach(el=>el.classList.toggle('selected',el.querySelector('input').checked));const next=app.querySelector('[data-do="next"]');if(next)next.disabled=false;const counter=app.querySelector('.answer-count');if(counter)counter.textContent=state.answers.filter(x=>x!==null).length+' von 5 beantwortet';}));}
function action(a){if(a==='start')state.stage='sign';if(a==='home')state.stage='start';if(a==='quiz'&&state.sign){state.stage='quiz';state.q=0;}if(a==='back'){if(state.q===0)state.stage='sign';else state.q--;}if(a==='next'){if(state.answers[state.q]===null)return;if(state.q<4)state.q++;else state.stage='scan';}if(a==='reset'){state.stage='start';state.sign=null;state.q=0;state.answers=[null,null,null,null,null];state.statsOutcome=null;state.sharedResult=false;history.replaceState(null,'',location.pathname);}if(a==='png'){png().catch(cardExportFailure);return;}if(a==='share'){share().catch(cardExportFailure);return;}if(a==='copy-link'){copyLink();return;}if(a==='retry-stats'){finalizeQuiz();return;}if(a==='quit-stats'){state.stage='start';state.q=0;state.statsOutcome=null;state.sharedResult=false;render();return;}render();scrollTo({top:0,behavior:'smooth'});}
function shareLink(){return location.origin+location.pathname+'#result='+state.sign+'.'+state.answers.join('');}
function restore(){const m=location.hash.match(/^#result=([a-z]+)\.([0-3]{5})$/);if(m&&signs.some(s=>s.id===m[1])){state.sign=m[1];state.answers=m[2].split('').map(Number);state.sharedResult=true;state.statsOutcome=null;state.stage='result';}}
function notice(t){let n=document.createElement('div');n.className='toast';n.textContent=t;document.body.append(n);setTimeout(()=>n.remove(),3500);}
async function copyLink(){const url=shareLink();try{if(navigator.clipboard){await navigator.clipboard.writeText(url);notice('Persönlicher Ergebnislink kopiert.');}else notice('Bitte den Ergebnislink aus der Adresszeile kopieren.');}catch(e){notice('Bitte den Ergebnislink aus der Adresszeile kopieren.');}}

async function share(){return png(true);}
function closeCardExport(){
 const box=document.getElementById('zodiac-card-export');
 if(!box)return;
 if(box._blobURL&&URL.revokeObjectURL)URL.revokeObjectURL(box._blobURL);
 box.remove();
}
function cardExportFailure(e){
 const box=document.getElementById('zodiac-card-export');
 if(box){const loading=box.querySelector('.card-export-loading');if(loading)loading.textContent='Karte konnte nicht erstellt werden. Bitte erneut versuchen.';}
 notice('Der PNG-Export ist fehlgeschlagen. Bitte erneut versuchen.');
}
function startCardExport(){
 closeCardExport();
 const box=document.createElement('div');
 box.id='zodiac-card-export';box.className='card-export-overlay';
 box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');
 box.setAttribute('aria-label','Zodiac-Karte speichern oder teilen');
 box.innerHTML='<div class="card-export-panel"><header class="card-export-top"><strong>✦ DEINE ZODIAC-KARTE</strong><button class="card-export-close" type="button" aria-label="Schließen">×</button></header>'+
 '<div class="card-export-content"><p role="status" class="card-export-loading">Karte wird erstellt …</p><img class="card-export-image" alt="Deine Zodiac-Ergebniskarte mit KUSENBERG.NET" hidden></div>'+
 '<div class="card-export-actions" hidden><button class="btn primary card-export-share" type="button" hidden>BILD TEILEN ↗</button><button class="btn secondary card-export-save" type="button">PNG SPEICHERN ↓</button></div>'+
 '<p class="card-export-help" hidden>iPhone: Bild länger gedrückt halten und „In Fotos sichern“ wählen.</p></div>';
 box.querySelector('.card-export-close').addEventListener('click',closeCardExport);
 box.addEventListener('click',e=>{if(e.target===box)closeCardExport();});
 document.body.appendChild(box);
 return box;
}
function showCardExport(box,dataURL,canvas,filename){
 if(!box.isConnected)return;
 const image=box.querySelector('.card-export-image');
 image.src=dataURL;image.hidden=false;
 box.querySelector('.card-export-loading').hidden=true;
 box.querySelector('.card-export-actions').hidden=false;
 box.querySelector('.card-export-help').hidden=false;
 box.querySelector('.card-export-save').addEventListener('click',()=>{
  const link=document.createElement('a');
  link.href=box._blobURL||dataURL;link.download=filename;
  document.body.appendChild(link);link.click();link.remove();
  notice('Falls kein Download startet: Bild lange drücken und sichern.');
 });
 if(typeof File==='undefined'||typeof navigator.share!=='function'||typeof canvas.toBlob!=='function')return;
 try{canvas.toBlob(blob=>{
  if(!blob||!box.isConnected)return;
  const file=new File([blob],filename,{type:'image/png'});
  if(navigator.canShare&&!navigator.canShare({files:[file]}))return;
  if(URL.createObjectURL){box._blobURL=URL.createObjectURL(blob);image.src=box._blobURL;}
  const shareButton=box.querySelector('.card-export-share');
  shareButton.hidden=false;
  shareButton.addEventListener('click',()=>{
   try{
    const p=navigator.share({files:[file],title:'Mein Zodiac Security Score'});
    if(p&&p.catch)p.catch(e=>{if(e?.name!=='AbortError')notice('Teilen nicht möglich. Bitte PNG speichern.');});
   }catch(e){notice('Teilen nicht möglich. Bitte PNG speichern.');}
  });
 },'image/png');}catch(e){}
}

function wrap(ctx,text,y,width,size){ctx.font=size+'px Georgia';let lines=[''];for(const word of text.split(' ')){let i=lines.length-1,c=lines[i]+' '+word;if(ctx.measureText(c).width>width&&lines[i])lines.push(word);else lines[i]=c.trim();}lines.slice(0,4).forEach((line,i)=>ctx.fillText(line,540,y+i*(size+13)));}

function cardPath(ctx,x,y,w,h,r){
 const k=Math.min(r,w/2,h/2);
 ctx.beginPath();ctx.moveTo(x+k,y);ctx.lineTo(x+w-k,y);ctx.arcTo(x+w,y,x+w,y+k,k);
 ctx.lineTo(x+w,y+h-k);ctx.arcTo(x+w,y+h,x+w-k,y+h,k);
 ctx.lineTo(x+k,y+h);ctx.arcTo(x,y+h,x,y+h-k,k);
 ctx.lineTo(x,y+k);ctx.arcTo(x,y,x+k,y,k);ctx.closePath();
}
function cardFit(ctx,text,width,base,min=19,font='Georgia,serif',bold=false){
 let size=base;
 do{ctx.font=(bold?'bold ':'')+size+'px '+font;if(ctx.measureText(text).width<=width)break;size-=2;}while(size>min);
 return size;
}
function cardSparkle(ctx,x,y,r,color='#f6d29b'){
 ctx.save();ctx.strokeStyle=color;ctx.lineWidth=Math.max(1.4,r/6);ctx.shadowColor=color;ctx.shadowBlur=r*2.1;
 ctx.beginPath();ctx.moveTo(x-r,y);ctx.lineTo(x+r,y);ctx.moveTo(x,y-r);ctx.lineTo(x,y+r);ctx.stroke();
 ctx.beginPath();ctx.fillStyle='#fff9ee';ctx.arc(x,y,Math.max(1.1,r/6),0,Math.PI*2);ctx.fill();ctx.restore();
}
function cardCenteredLines(ctx,text,x,y,maxWidth,size,color,lineHeight=33,maxLines=2){
 const words=String(text).split(' '),lines=[];let line='';
 ctx.font=size+'px Georgia,serif';
 for(const word of words){const maybe=line?line+' '+word:word;
  if(ctx.measureText(maybe).width>maxWidth&&line){lines.push(line);line=word;}else line=maybe;}
 if(line)lines.push(line);
 ctx.fillStyle=color;ctx.textAlign='center';
 lines.slice(0,maxLines).forEach((l,i)=>{cardFit(ctx,l,maxWidth,size,18,'Georgia,serif');ctx.fillText(l,x,y+i*lineHeight);});
 return Math.min(lines.length,maxLines);
}
function cardImage(src){
 return new Promise(resolve=>{
  const img=new Image();
  img.onload=()=>resolve(img);
  img.onerror=()=>resolve(null);
  img.src=src;
 });
}
async function paintCosmicCard(result,mood){
 const canvas=document.createElement('canvas');
 canvas.width=1080;canvas.height=1880;
 const ctx=canvas.getContext('2d');
 if(!ctx)throw Error('Canvas unavailable');
 const palettes=[
  {accent:'#65e6d4',glow:'#167f81',dark:'#102e36',ribbon:'#163c42'},
  {accent:'#c7adff',glow:'#8153c7',dark:'#251837',ribbon:'#32214b'},
  {accent:'#ffb879',glow:'#b26479',dark:'#33172c',ribbon:'#51253b'},
  {accent:'#ff729b',glow:'#aa3985',dark:'#370e2c',ribbon:'#5b133c'}
 ];
 const p=palettes[mood],gold='#f5d5a1',light='#fff4e2';
 const bg=ctx.createLinearGradient(0,0,900,1880);
 bg.addColorStop(0,'#080d1e');bg.addColorStop(.32,'#170e29');bg.addColorStop(.69,'#120d27');bg.addColorStop(1,'#080c1c');
 ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1880);
 for(const [x,y,r,color] of [
   [150,350,460,'#662c9380'],[970,390,500,p.glow+'77'],
   [250,1080,360,'#892c7e60'],[930,1580,440,'#553b9b55']]){
  const neb=ctx.createRadialGradient(x,y,0,x,y,r);
  neb.addColorStop(0,color);neb.addColorStop(1,'#070b1d00');
  ctx.fillStyle=neb;ctx.fillRect(x-r,y-r,2*r,2*r);
 }
 // Repeatable stars, independent of reloads.
 for(let i=0;i<225;i++){
  const x=35+(i*317+87)%1010,y=37+(i*557+143)%1800;
  const radius=i%17===0?2.5:i%5===0?1.4:.7;
  ctx.fillStyle=i%4===0?'#f3d6b5b8':'#dbcaf78c';
  ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
 }
 [[104,225,9],[932,131,8],[952,788,12],[200,1135,8],[520,148,13],[91,1745,9]].forEach(t=>cardSparkle(ctx,t[0],t[1],t[2],gold));

 // Top masthead: sign artwork and branding remain separate.
 ctx.textAlign='left';ctx.fillStyle=gold;
 ctx.font='32px Georgia,serif';ctx.fillText('✦  ZODIAC RISK ENGINE™',62,87);
 ctx.textAlign='right';ctx.fillStyle='#f0e2d6';
 ctx.font='bold 17px Arial,sans-serif';ctx.fillText('JULIAN KUSENBERG',1014,76);
 ctx.fillStyle=gold;ctx.font='bold 18px Arial,sans-serif';ctx.fillText('KUSENBERG.NET',1014,103);
 ctx.lineWidth=1.8;ctx.strokeStyle='#d7b7866b';
 ctx.beginPath();ctx.moveTo(62,121);ctx.lineTo(1018,121);ctx.stroke();

 // Large illustrated character panorama with asymmetric text overlay.
 const fx=54,fy=159,fw=972,fh=550;
 ctx.save();cardPath(ctx,fx,fy,fw,fh,33);ctx.clip();
 const frameBg=ctx.createLinearGradient(fx,fy,fx+fw,fy+fh);
 frameBg.addColorStop(0,p.dark);frameBg.addColorStop(.57,'#2d143d');frameBg.addColorStop(1,'#080d21');
 ctx.fillStyle=frameBg;ctx.fillRect(fx,fy,fw,fh);
 const atlas=await cardImage(artworkURL(mood));
 let drawn=false;
 if(atlas){
  try{
   const pos=artworkPositions[result.s.id],cw=atlas.naturalWidth/3,ch=atlas.naturalHeight/4;
   // Keep the original portrait proportions rather than stretching the character.
   const cropX=cw*.02,cropY=ch*.03,cropW=cw*.96,cropH=ch*.94;
   ctx.drawImage(atlas,pos.col*cw+cropX,pos.row*ch+cropY,cropW,cropH,fx-10,fy,670,550);
   drawn=true;
  }catch(e){}
 }
 if(!drawn&&window.ZodiacArt){
  const fallback=await cardImage('data:image/svg+xml;charset=utf-8,'+encodeURIComponent(window.ZodiacArt.svg(result.s,mood)));
  if(fallback){try{ctx.drawImage(fallback,fx,fy,610,550);drawn=true;}catch(e){}}
 }
 if(!drawn){ctx.textAlign='center';ctx.fillStyle=gold;ctx.font='260px Georgia,serif';ctx.fillText(result.s.glyph,342,507);}
 const shade=ctx.createLinearGradient(435,0,975,0);
 shade.addColorStop(0,'#0a0c1c00');shade.addColorStop(.53,'#100d23ed');shade.addColorStop(1,'#100c1ff9');
 ctx.fillStyle=shade;ctx.fillRect(435,fy,590,fh);
 const vignette=ctx.createLinearGradient(0,fy,0,fy+fh);
 vignette.addColorStop(0,'#0909176b');vignette.addColorStop(.32,'#09091700');
 vignette.addColorStop(.72,'#09091700');vignette.addColorStop(1,'#0a0c21b0');
 ctx.fillStyle=vignette;ctx.fillRect(fx,fy,fw,fh);
 // Decorative concentric zodiac halo behind the artwork.
 ctx.lineWidth=1;ctx.strokeStyle='#ecc88a55';
 ctx.beginPath();ctx.arc(314,426,207,0,Math.PI*2);ctx.stroke();
 ctx.setLineDash([3,15]);ctx.strokeStyle='#e7c99f7a';
 ctx.beginPath();ctx.arc(314,426,233,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
 ctx.textAlign='center';
 ctx.fillStyle=gold;ctx.font='74px Georgia,serif';ctx.fillText(result.s.glyph,794,305);
 ctx.fillStyle=light;
 const name=result.s.name.toUpperCase();
 cardFit(ctx,name,388,64,35,'Georgia,serif');ctx.fillText(name,794,407);
 ctx.fillStyle=gold;ctx.font='16px Arial,sans-serif';ctx.fillText('✦  ZODIAC CASE FILE  ✦',794,453);
 ctx.beginPath();ctx.strokeStyle='#dcbf83bb';ctx.lineWidth=2;ctx.moveTo(669,475);ctx.lineTo(919,475);ctx.stroke();
 cardCenteredLines(ctx,result.s.title,794,528,355,31,'#f8e7d2',37,3);
 ctx.restore();
 // Ornate double frame, screen-reader version lives on the result page.
 ctx.save();ctx.shadowColor=p.accent;ctx.shadowBlur=16;
 ctx.strokeStyle='#e9c68e';ctx.lineWidth=4;cardPath(ctx,fx,fy,fw,fh,33);ctx.stroke();ctx.restore();
 ctx.strokeStyle='#e9bd7a8c';ctx.lineWidth=1.5;cardPath(ctx,fx+11,fy+11,fw-22,fh-22,25);ctx.stroke();
 [[fx+22,fy+22],[fx+fw-22,fy+22],[fx+22,fy+fh-22],[fx+fw-22,fy+fh-22]].forEach(([x,y])=>cardSparkle(ctx,x,y,5,gold));

 // Large luminous score dial and category ribbon.
 const cx=540,cy=927,radius=167;
 ctx.save();
 ctx.strokeStyle='#caa2d35e';ctx.lineWidth=21;
 ctx.beginPath();ctx.arc(cx,cy,radius,-Math.PI/2,-Math.PI/2+Math.PI*2);ctx.stroke();
 ctx.strokeStyle=p.accent;ctx.lineWidth=23;ctx.lineCap='round';
 ctx.shadowColor=p.accent;ctx.shadowBlur=24;
 ctx.beginPath();ctx.arc(cx,cy,radius,-Math.PI/2,-Math.PI/2+Math.PI*result.score/100);ctx.stroke();
 ctx.restore();
 ctx.strokeStyle='#e8badd6d';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(cx,cy,193,0,Math.PI*2);ctx.stroke();
 ctx.strokeStyle='#e4b78358';ctx.beginPath();ctx.arc(cx,cy,148,0,Math.PI*2);ctx.stroke();
 cardSparkle(ctx,540,717,15,gold);
 ctx.textAlign='center';ctx.fillStyle='#e4d9e8';ctx.font='bold 23px Arial,sans-serif';ctx.fillText('DEIN SCORE',cx,873);
 ctx.save();ctx.fillStyle=gold;ctx.shadowColor=p.accent;ctx.shadowBlur=22;
 const scoreText=String(result.score);
 ctx.font='bold 133px Georgia,serif';ctx.fillText(scoreText,cx-42,1004);
 ctx.restore();
 ctx.fillStyle='#f0e7f2';ctx.font='43px Georgia,serif';ctx.fillText('/100',cx+109,1000);
 ctx.fillStyle='#b8a8c6';ctx.font='15px Arial,sans-serif';ctx.fillText('COSMIC SECURITY SCORE',cx,1060);
 const bandY=1110;
 ctx.save();ctx.shadowColor=p.accent;ctx.shadowBlur=26;
 cardPath(ctx,66,bandY,948,85,20);ctx.fillStyle=p.ribbon;ctx.fill();ctx.lineWidth=3;ctx.strokeStyle=p.accent;ctx.stroke();ctx.restore();
 ctx.textAlign='center';ctx.fillStyle='#fff0da';
 cardFit(ctx,result.band,852,36,25,'Georgia,serif',true);ctx.fillText(result.band,540,1165);

 // Cinematic "security algorithm" panel with real per-user values.
 const bx=57,by=1252,bw=966,bh=477;
 ctx.save();cardPath(ctx,bx,by,bw,bh,27);const cardBg=ctx.createLinearGradient(bx,by,bx,by+bh);
 cardBg.addColorStop(0,'#231a35f3');cardBg.addColorStop(1,'#12132bf6');ctx.fillStyle=cardBg;ctx.fill();
 ctx.strokeStyle='#d6a4d4a0';ctx.lineWidth=2.5;ctx.stroke();ctx.restore();
 ctx.textAlign='left';ctx.fillStyle=gold;ctx.font='bold 27px Georgia,serif';
 ctx.fillText('✦  DER COSMIC SECURITY ALGORITHM™ 2.0',90,1312);
 ctx.strokeStyle='#e7c38e92';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(90,1335);ctx.lineTo(990,1335);ctx.stroke();
 const rows=[
   ['MAXIMALER SECURITY SCORE','100'],
   ['KOSMISCHER GRUNDVERDACHT','−25'],
   ['STERNZEICHEN · '+result.s.name.toUpperCase(),'−'+result.s.base],
   ['DEINE ENTSCHEIDUNGEN',signed(result.decisions)],
   ['COSMIC TWIST',signed(result.cosmic)]
 ];
 rows.forEach((row,i)=>{
  const y=1355+i*59;
  cardPath(ctx,89,y,901,52,12);ctx.fillStyle=i===4?'#3a254bdc':'#201c36e3';ctx.fill();
  ctx.strokeStyle=i===4?'#bd8bd6b1':'#937a9b70';ctx.lineWidth=1;ctx.stroke();
  ctx.textAlign='left';ctx.fillStyle=i===4?'#f1c6ff':'#e4d9e8';ctx.font='21px Arial,sans-serif';ctx.fillText(row[0],114,y+34);
  ctx.textAlign='right';ctx.fillStyle=i===4?p.accent:light;ctx.font='bold 25px Arial,sans-serif';ctx.fillText(row[1],965,y+35);
 });
 const matches=result.cosmicMatches;
 ctx.textAlign='center';ctx.fillStyle='#b9b1cc';ctx.font='18px Arial,sans-serif';
 const msg=matches+' VON 5 ENTSCHEIDUNGEN SPIEGELN DEIN STERNZEICHEN';
 cardFit(ctx,msg,860,18,13,'Arial,sans-serif');ctx.fillText(msg,540,1700);
 // Bottom author mark is never removed, including if the art cannot load.
 ctx.strokeStyle='#ad8dba7a';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(95,1774);ctx.lineTo(985,1774);ctx.stroke();
 ctx.fillStyle='#b9b0c6';ctx.font='16px Arial,sans-serif';ctx.fillText('100 % SATIRE · 0 % WISSENSCHAFT',540,1805);
 ctx.fillStyle=gold;ctx.font='bold 30px Arial,sans-serif';ctx.fillText('KUSENBERG.NET',540,1851);
 return canvas;
}
async function png(shareImage=false){
 const exportDialog=startCardExport();
 const result=calc(),mood=moodForScore(result.score);
 try{
  let outputCanvas=await paintCosmicCard(result,mood);
  if(!exportDialog.isConnected)return;
  let exportUrl;
  try{exportUrl=outputCanvas.toDataURL('image/png');}
  catch(error){
   // Keep an exportable, readable result even if the artwork tainted the canvas.
   const fallback=document.createElement('canvas');fallback.width=1080;fallback.height=1880;
   const ctx=fallback.getContext('2d');ctx.fillStyle='#111629';ctx.fillRect(0,0,1080,1880);
   ctx.textAlign='center';ctx.fillStyle='#eed2a1';ctx.font='42px Georgia,serif';ctx.fillText('ZODIAC RISK ENGINE™',540,185);
   ctx.font='220px serif';ctx.fillText(result.s.glyph,540,570);
   ctx.font='bold 76px Georgia,serif';ctx.fillText(result.s.name.toUpperCase(),540,745);
   ctx.font='bold 170px Georgia,serif';ctx.fillText(result.score+' / 100',540,1000);
   ctx.font='bold 32px Georgia,serif';ctx.fillText(result.band,540,1130);
   ctx.font='26px Arial,sans-serif';ctx.fillText('COSMIC SECURITY ALGORITHM™ 2.0',540,1330);
   ctx.fillText('75 − '+result.s.base+' '+signed(result.decisions)+' '+signed(result.cosmic)+' = '+result.score,540,1400);
   ctx.font='22px Arial,sans-serif';ctx.fillText('100 % SATIRE · 0 % WISSENSCHAFT',540,1740);
   ctx.font='bold 30px Arial,sans-serif';ctx.fillText('KUSENBERG.NET',540,1820);
   outputCanvas=fallback;exportUrl=fallback.toDataURL('image/png');
  }
  const filename='zodiac-security-score-'+result.s.id+'-'+result.score+'.png';
  showCardExport(exportDialog,exportUrl,outputCanvas,filename);
 }catch(error){cardExportFailure(error);}
}

document.getElementById('brandLink').addEventListener('click',e=>{e.preventDefault();state.stage='start';history.replaceState(null,'',location.pathname);render();});restore();render();
})();