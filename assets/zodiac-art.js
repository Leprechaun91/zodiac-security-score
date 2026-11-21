window.ZodiacArt=(function factory(){
 const p={
 widder:"M265 355C207 319 211 253 245 232C277 214 300 241 284 261C269 277 246 259 261 243M335 355C393 319 389 253 355 232C323 214 300 241 316 261C331 277 354 259 339 243M264 338Q259 392 282 413Q300 428 318 413Q341 392 336 338",
 stier:"M266 318Q205 324 171 253Q218 283 259 278M334 318Q395 324 429 253Q382 283 341 278M260 305Q240 375 270 411Q300 436 330 411Q360 375 340 305Q300 284 260 305ZM279 390q21 20 42 0",
 zwillinge:"M244 288Q220 311 240 343Q215 386 222 427M356 288Q380 311 360 343Q385 386 378 427M250 293Q271 273 289 299Q300 329 278 347Q261 355 250 341M350 293Q329 273 311 299Q300 329 322 347Q339 355 350 341M293 285V432M307 285V432",
 krebs:"M246 350Q200 316 175 338Q150 359 191 373L218 354M354 350Q400 316 425 338Q450 359 409 373L382 354M175 338L189 310L211 324M425 338L411 310L389 324M248 389l-54 35m70-29-28 47m116-53 54 35m-70-29 28 47M275 312v-39m50 39v-39",
 loewe:"M300 232l28 22 36-11 14 36 37 12-3 37 27 28-23 28 9 36-36 10-16 35-37-8-36 27-36-27-37 8-16-35-36-10 9-36-23-28 27-28-3-37 37-12 14-36 36 11ZM259 316Q300 284 341 316V382Q300 420 259 382ZM270 351q12-9 23 0m14 0q11-9 23 0m-44 26q14 17 28 0",
 jungfrau:"M290 270Q245 278 249 324Q252 356 273 374L264 424M310 269Q349 273 349 322Q349 349 323 373L335 423M285 294Q300 265 321 284Q335 306 314 332Q300 345 285 339M352 246l9 17 19 2-13 14 4 19-19-10-18 10 4-19-15-14 19-2Z",
 waage:"M300 246V438M251 270h98M208 305h184M246 305l-33 72h66l-33-72m108 0-33 72h66l-33-72M209 376q43 37 86 0m10 0q43 37 86 0M239 442h122m-92-29h62",
 skorpion:"M259 310Q234 334 247 367Q266 404 301 395Q340 401 353 367Q363 335 341 307M253 330l-43-20-21 24 31 20m127-24 43-20 21 24-31 20M260 382l-41 38m58-29-21 48m84-57 41 38m-58-29 21 48M341 311Q391 290 398 250Q402 209 372 211Q349 214 356 240l31 11",
 schuetze:"M236 430Q212 354 254 278Q304 218 378 261M240 428L369 267m0 0-7 49m7-49-49 10M250 279l-20-44m10 193-32 6M271 335q40 34 59 87m-36-48q36-25 62-9",
 steinbock:"M264 333Q236 296 254 258Q270 226 294 247Q312 263 286 285M336 333Q364 296 346 258Q330 226 306 247Q288 263 314 285M268 332q-11 45 15 76q19 17 38-3l10-70M325 398Q391 416 370 451Q352 471 319 454Q351 443 345 428Q343 417 316 408m53 34q23-7 35 6q-7-25-33-35",
 wassermann:"M272 267l70 28-19 101-76-31ZM272 267q36-24 73 18M250 364q37 21 73 31M338 302Q370 331 396 311Q420 303 440 327M322 337Q360 370 397 344Q420 338 440 360M318 371Q358 401 396 383Q415 374 443 399",
 fische:"M234 317Q268 279 310 306Q303 354 245 361L219 340ZM366 393Q332 431 290 404Q297 356 355 349L381 371ZM220 340l-29-29 3 43 26-14m160 31 29 29-3-43-26 14M211 274q87-43 173 12M389 438q-89 43-173-11"
 };
 const palettes=[
 ['#74E7DA','#0A3341','#061826','SAFE MODE'],
 ['#C6A8FF','#302046','#110F24','DENKT NACH'],
 ['#FFB878','#4D2233','#1D1125','VERSCHMITZT'],
 ['#FF5E87','#5A162B','#210919','COSMIC CHAOS']
 ];
 function svg(sign,mood=1){
  const t=palettes[mood]||palettes[1];
  const stars=Array.from({length:26},(_,i)=>{const x=(i*197+63)%570+15,y=(i*137+91)%570+15;return `<circle cx="${x}" cy="${y}" r="${i%5===0?3:1.6}" fill="${i%4?t[0]:'#FFE6B1'}" opacity="${i%4?'.55':'.95'}"/>`}).join('');
  const shimmer=mood>=2?`<g transform="translate(457 440) rotate(-11)" stroke="${t[0]}" stroke-width="4" stroke-linecap="round" fill="none"><ellipse rx="47" ry="29" fill="#131126" fill-opacity=".8"/><path d="M-29-7l16 4 8-5m14 0 16 5 8-5M-18 10q20 23 41-3"/></g>`:'';
  const lightning=mood===3?`<g stroke="${t[0]}" stroke-width="4" fill="none"><path d="M85 258l44-38-21 48 33-13M456 350l42-28-15 40 33-16"/></g>`:'';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Zodiac ${sign.name}"><defs><radialGradient id="night"><stop stop-color="${t[1]}"/><stop offset="1" stop-color="${t[2]}"/></radialGradient><linearGradient id="gold" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#FFF0C9"/><stop offset=".52" stop-color="#DCAE6C"/><stop offset="1" stop-color="${t[0]}"/></linearGradient><filter id="aura" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="11"/></filter></defs>
<rect width="600" height="600" rx="24" fill="url(#night)"/>${stars}
<circle cx="300" cy="309" r="232" fill="none" stroke="${t[0]}" stroke-opacity=".65" stroke-width="2"/><circle cx="300" cy="309" r="209" fill="none" stroke="#E9C487" stroke-dasharray="2 13" stroke-opacity=".6"/><circle cx="300" cy="309" r="175" fill="#081727" fill-opacity=".3" stroke="${t[0]}" stroke-opacity=".4" stroke-width="2"/>
<text x="300" y="166" text-anchor="middle" font-size="59" font-family="DejaVu Sans,Segoe UI Symbol,serif" fill="${t[0]}">${sign.glyph}</text>
<path d="${p[sign.id]||''}" transform="translate(0 18)" stroke="${t[0]}" stroke-width="24" fill="none" stroke-linejoin="round" stroke-linecap="round" filter="url(#aura)" opacity=".55"/>
<path d="${p[sign.id]||''}" transform="translate(0 18)" stroke="url(#gold)" stroke-width="9" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
${shimmer}${lightning}<path d="M163 489q137 53 274 0" fill="none" stroke="${t[0]}" stroke-opacity=".5" stroke-width="2.5"/><text x="300" y="553" text-anchor="middle" fill="#FCE4B4" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="3">${t[3]}</text><rect x="8" y="8" width="584" height="584" rx="18" fill="none" stroke="#EED1A0" stroke-opacity=".25" stroke-width="2"/></svg>`;
 }
 function wheel(signs){
  const marks=signs.map((s,i)=>{const a=i*Math.PI/6-Math.PI/2;return `<text x="${(200+146*Math.cos(a)).toFixed(1)}" y="${(205+146*Math.sin(a)).toFixed(1)}" font-size="25" font-family="DejaVu Sans,Segoe UI Symbol,serif" text-anchor="middle" fill="#F1D2A0">${s.glyph}</text>`}).join('');
  return `<svg class="hero-wheel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="185" fill="#17203A" stroke="#D7B278" stroke-width="2"/><circle cx="200" cy="200" r="119" fill="none" stroke="#E9C789" opacity=".7"/>${marks}<path d="M200 125l64 33v62q-8 51-64 70-56-19-64-70v-62Z" stroke="#F1D2A0" fill="#13293D" stroke-width="3"/><path d="M183 193v-12a17 17 0 0 1 34 0v12m-35 0h36v40h-36Z" stroke="#F1D2A0" stroke-width="4" fill="none"/><circle cx="200" cy="214" r="4" fill="#F1D2A0"/></svg>`;
 }
 return {svg,wheel};
})();
