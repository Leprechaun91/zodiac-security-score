/* Zodiac Security Score: counted-by-default quiz results, no visitor account */
(function(){
'use strict';
const cfg=window.ZODIAC_STATS_CONFIG||{};
const base=String(cfg.projectUrl||'').trim().replace(/\/+$/,'');
const key=String(cfg.publishableKey||'').trim();
const enabled=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(base)&&key.length>15;
const kToken='zodiac-participant-ddc-2026';
const kReceipt='zodiac-vote-ddc-2026';
let accessToken='',refreshToken='',expiresAt=0;
function saved(k){try{return localStorage.getItem(k);}catch(_){return null;}}
function save(k,v){try{localStorage.setItem(k,v);return true;}catch(_){return false;}}
function participated(){return !!saved(kReceipt);}
function receipt(){try{return JSON.parse(saved(kReceipt)||'null')}catch(_){return null}}
function randomUuid(){
 if(typeof crypto!=='undefined'&&crypto.randomUUID)return crypto.randomUUID();
 throw new Error('Dein Browser unterstützt keine sicheren Zufalls-IDs.');
}
async function request(path,body,token){
 if(!enabled)throw new Error('Die Live-Statistik ist noch nicht verbunden.');
 const headers={'apikey':key,'Content-Type':'application/json'};
 if(token)headers.Authorization='Bearer '+token;
 const control=new AbortController(),timer=setTimeout(()=>control.abort(),12000);
 try{
  const res=await fetch(base+path,{method:'POST',headers,body:JSON.stringify(body),signal:control.signal,cache:'no-store'});
  const data=await res.json().catch(()=>({}));
  if(!res.ok){
   const code=String(data.code||data.error_code||'').toLowerCase();
   const message=String(data.message||data.msg||data.error_description||data.error||'').trim();
   const localized={
    email_not_confirmed:'Die E-Mail-Adresse des Moderationskontos ist nicht bestätigt. Prüfe Supabase → Authentication → Users.',
    invalid_credentials:'Ungültige Anmeldedaten. Prüfe die Benutzer-E-Mail und das Supabase-Auth-Passwort (nicht das Datenbankpasswort).',
    user_not_found:'Der Moderator-Benutzer wurde in Supabase Auth nicht gefunden.',
    email_provider_disabled:'E-Mail-Anmeldung ist in Supabase Auth nicht aktiviert.',
    over_request_rate_limit:'Zu viele Anmeldeversuche. Bitte später erneut versuchen.'
   };
   const friendly=localized[code]||
    (/email not confirmed/i.test(message)?localized.email_not_confirmed:
    /invalid login credentials/i.test(message)?localized.invalid_credentials:
    message||'Statistikdienst nicht erreichbar');
   throw new Error(friendly+' (HTTP '+res.status+(code?', '+code:'')+')');
  }
  return data;
 }finally{clearTimeout(timer);}
}
async function submit(result,answers){
 if(participated())return {already:true,...(receipt()||{})};
 const id=saved(kToken)||randomUuid();
 if(!save(kToken,id))throw new Error('Für die Abstimmung muss lokaler Browserspeicher verfügbar sein.');
 const data=await request('/rest/v1/rpc/zodiac_submit',{
  p_participant_id:id,p_sign:result.s.id,p_answers:answers
 });
 if(typeof data.score!=='number'||data.score!==result.score)
  throw new Error('Die Serverberechnung stimmt nicht mit dem Quiz überein. Bitte melden.');
 const savedData={accepted:!!data.accepted,participants:Number(data.participants)||0,averageSecurity:Number(data.averageSecurity)||0,submittedAt:new Date().toISOString()};
 save(kReceipt,JSON.stringify(savedData));
 return savedData;
}
async function login(email,password){
 if(!enabled)throw new Error('Das Dashboard benötigt zunächst eine Supabase-Verbindung.');
 const data=await request('/auth/v1/token?grant_type=password',{email,password});
 if(!data.access_token||!data.refresh_token)throw new Error('Anmeldung unvollständig');
 accessToken=data.access_token;refreshToken=data.refresh_token;
 expiresAt=Date.now()+(Number(data.expires_in)||3600)*1000;
 return true;
}
async function getStats(){
 if(!accessToken)throw new Error('Bitte zuerst als Moderator anmelden.');
 if(refreshToken&&Date.now()>expiresAt-120000){
  const data=await request('/auth/v1/token?grant_type=refresh_token',{refresh_token:refreshToken});
  if(!data.access_token)throw new Error('Anmeldung abgelaufen. Bitte neu einloggen.');
  accessToken=data.access_token;refreshToken=data.refresh_token||refreshToken;
  expiresAt=Date.now()+(Number(data.expires_in)||3600)*1000;
 }
 return request('/rest/v1/rpc/zodiac_get_stats',{},accessToken);
}
function logout(){accessToken='';refreshToken='';expiresAt=0;}
window.ZodiacStats={enabled,submit,participated,receipt,login,getStats,logout};
if(enabled){
 const footer=document.querySelector('.footer span:nth-child(2)');
 if(footer)footer.textContent='Quiz ohne Anmeldung · Sternzeichen und Antwortcodes werden am Ende für die Live-Statistik übertragen';
}
})();