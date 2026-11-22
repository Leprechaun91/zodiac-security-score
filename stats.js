/* Zodiac Security Score: opt-in anonymous conference statistics */
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
  if(!res.ok)throw new Error(data.message||data.error_description||'Statistikdienst nicht erreichbar ('+res.status+')');
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
 if(footer)footer.textContent='Quiz lokal · Live-Statistik nur nach aktiver Zustimmung';
}
})();