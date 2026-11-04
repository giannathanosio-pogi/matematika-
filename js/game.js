/* UI icons (your pixel-art images). ico('heart') returns an <img>. */
const ICO={heart:'assets/images/icon_heart.png',shield:'assets/images/icon_shield.png',clock:'assets/images/icon_clock.png',hourglass:'assets/images/icon_hourglass.png',tagged:'assets/images/tagged.png',flag:'assets/images/icon_flag.png'};
const ico=(k,c)=>`<img class="ico ${c||''}" src="${ICO[k]}" alt="" draggable="false">`;
const $=id=>document.getElementById(id);
const DIFF=['Easy','Moderate','Intermediate','Hard'];
const TH=[['#7ec850','#6ab540'],['#e8c872','#d9b45a'],['#5b8fd9','#4a7ec8'],['#8a6fc9','#7a5fb9']];

/* ===== SCREENS & MENU ART ===== */
function show(id){document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id==id));if(id!='game')gid++;document.body.classList.toggle('ingame',id=='game');document.body.classList.toggle('onmenu',id=='menu');$('gear').style.display=(id=='menu'||id=='top')?'flex':'none'}
const C5=['#3498db','#e67e22','#52be80','#e74c3c','#9b59b6'];
let rcur=0,bm={};
function cards(r){return r.split('<h3>').slice(1).map((p,i)=>{const[t,...b]=p.split('</h3>');return `<div class="sc c${i%5}"><b class="nb">${String(i+1).padStart(2,'0')}</b><div class="sx"><h4>${t}</h4><div>${b.join('')}</div></div></div>`}).join('')}
const REV=T.concat(EXTRA);
function openReview(i){rcur=i;const x=REV[i];
 $('rh').innerHTML=`<div><span class="pill">${i<T.length?'CHAPTER '+(i+1):'STUDY KIT'}</span><h2>${x.n}</h2><p>${x.sub}</p></div><div class="ctr"><button class="ar" onclick="rstep(-1)">‹</button><span class="pill dkp">${i+1} / ${REV.length}</span><button class="ar" onclick="rstep(1)">›</button><button id="bmk" class="${bm[i]?'on':''}" onclick="bm[${i}]=!bm[${i}];this.classList.toggle('on')">★</button></div>`;
 $('rb').innerHTML=paper(x.r)+vidHTML(i,'🎬 Watch &amp; learn');$('rb').scrollTop=0;show('rv')}
function vidList(i,max){const v=(typeof VIDS!='undefined'&&VIDS[i])||[];return max?v.slice(0,max):v}
function vidHTML(i,head,max){const v=vidList(i,max);if(!v.length)return '';const off=navigator.onLine===false;
 return `<div class="vids"><h3>${head}</h3>${off?'<p class="voff">You appear to be offline. These links will work once you reconnect.</p>':''}<div class="vg">${v.map(x=>`<a class="vc" href="${x.u}" target="_blank" rel="noopener noreferrer"><i>▶</i><span><b>${x.t}</b>${x.by?`<em>${x.by}</em>`:''}${x.n?`<small>${x.n}</small>`:''}</span></a>`).join('')}</div></div>`}
function rstep(d){openReview((rcur+d+REV.length)%REV.length)}
let mode='play';
function openTop(m){mode=m;const pl=m=='play';$('top').className='scr '+(pl?'mp':'mr');
 $('th').innerHTML=pl?'<span class="mpill o">🎮 PLAY MODE</span> Choose your game':'<span class="mpill">📖 STUDY MODE</span> Choose a topic to review';
 $('ts').textContent=pl?'Move with Arrow keys / WASD (or the on-screen pad). Cross every line, then run back to the start! When a tagger touches you, answer fast: a quicker answer gives a better escape chance!':'Pick a topic to open its study material.';
 $('tg').innerHTML=T.map((x,i)=>{let b=0;try{b=+localStorage['mk'+i]||0}catch(e){}return pl?`<button class="card pc pc${i%4}" onclick="startGame(${i})"><span>${x.ic}</span><b>${x.n}</b><small>🏆 Best: ${b}</small></button>`:`<button class="card rc" onclick="openReview(${i})"><span>${x.ic}</span><b>${x.n}</b></button>`}).join('');
 $('tx').innerHTML=pl?'':EXTRA.map((x,i)=>`<button class="b s or" onclick="openReview(${T.length+i})">${x.ic} ${x.n}</button>`).join('');show('top')}
function fit(){const w=innerWidth,h=innerHeight,sc=Math.min(w/960,h/640);$('app').style.transform=`scale(${sc})`;document.documentElement.style.setProperty('--vw',(w/sc)+'px')}addEventListener('resize',fit);addEventListener('orientationchange',()=>setTimeout(fit,250));fit();

/* ===== AUDIO: background music (mp3) + synthesized sound effects + settings ===== */
/* TR (music list) lives in js/data.js */
let ac,SET={mus:true,sfx:true,mv:.6,sv:.7,tr:0};
try{Object.assign(SET,JSON.parse(localStorage.mkSet||'{}'))}catch(e){}
if(!TR[SET.tr])SET.tr=0;
const svSet=()=>{try{localStorage.mkSet=JSON.stringify(SET)}catch(e){}};
const bgm=new Audio();bgm.preload='auto';
function ensureAC(){try{if(!ac)ac=new(window.AudioContext||window.webkitAudioContext)();if(ac.state=='suspended')ac.resume()}catch(e){}}
function applyMus(){bgm.volume=SET.mv;$('mb').textContent=SET.mus?'🔊':'🔇';if(SET.mus){if(!bgm.getAttribute('src'))bgm.src=TR[SET.tr].f;bgm.play().catch(()=>{})}else bgm.pause()}
function pickTr(i){SET.tr=(i+TR.length)%TR.length;svSet();bgm.src=TR[SET.tr].f;if(SET.mus)bgm.play().catch(()=>{});renderSt()}
bgm.onended=()=>pickTr(SET.tr+1);
function setMus(v){SET.mus=v;svSet();applyMus();renderSt()}
function setSfx(v){SET.sfx=v;svSet();renderSt();if(v)S('click')}
['pointerdown','keydown'].forEach(e=>addEventListener(e,()=>{ensureAC();applyMus()},{once:true}));
function nt(f,t,d,ty,v,f2){if(!ac)return;const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime+t;o.type=ty||'square';o.frequency.setValueAtTime(f,s);if(f2)o.frequency.exponentialRampToValueAtTime(f2,s+d);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(Math.max(.0002,v*SET.sv),s+.01);g.gain.exponentialRampToValueAtTime(.0001,s+d);o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+d+.03)}
const FX={click:[[820,0,.05,'square',.1],[1230,.04,.05,'square',.08]],
right:[[660,0,.1,'square',.12],[880,.09,.1,'square',.12],[1320,.18,.2,'square',.12]],
wrong:[[300,0,.28,'sawtooth',.14,110]],
tag:[[500,0,.12,'square',.14,200],[200,.12,.3,'sawtooth',.14,70]],
escape:[[523,0,.09,'square',.12],[659,.08,.09,'square',.12],[784,.16,.09,'square',.12],[1047,.24,.28,'square',.12]],
power:[[988,0,.07,'triangle',.22],[1319,.07,.07,'triangle',.22],[1568,.14,.16,'triangle',.22]],
count:[[520,0,.14,'square',.1]],go:[[880,0,.35,'square',.12],[1175,0,.35,'triangle',.12]],
checkpoint:[[523,0,.1,'square',.12],[784,.1,.1,'square',.12],[1047,.2,.3,'square',.12]],
win:[[523,0,.12,'square',.12],[659,.12,.12,'square',.12],[784,.24,.12,'square',.12],[1047,.36,.14,'square',.12],[784,.5,.1,'square',.12],[1047,.6,.45,'square',.12]],
lose:[[392,0,.2,'triangle',.22],[330,.2,.2,'triangle',.22],[262,.4,.2,'triangle',.22],[196,.6,.5,'triangle',.22]]};
function S(n){if(!SET.sfx)return;ensureAC();(FX[n]||[]).forEach(a=>nt(...a))}
function sfx(f,d){if(SET.sfx){ensureAC();nt(f,0,d,'square',.08)}}
document.addEventListener('click',e=>{if(e.target.closest('button')&&!e.target.closest('#qo'))S('click')});
/* settings panel */
function renderSt(){const sw=(on,f)=>`<button class="sw ${on?'on':''}" onclick="${f}" aria-pressed="${on}"><i></i></button>`;
 $('stb').innerHTML=`<h2>Settings</h2>
 <div class="sr"><span>🎵 Music</span><input type="range" id="mvr" min="0" max="100" value="${Math.round(SET.mv*100)}">${sw(SET.mus,'setMus('+!SET.mus+')')}</div>
 <div class="np"><button class="ar2" onclick="pickTr(SET.tr-1)" title="Previous track">‹</button><div><small>${SET.mus?'NOW PLAYING':'MUSIC OFF · SELECTED'}</small><b>${TR[SET.tr].n}</b></div><button class="ar2" onclick="pickTr(SET.tr+1)" title="Next track">›</button></div>
 <div class="tl">${TR.map((t,i)=>`<button class="tk ${i==SET.tr?'on':''}" onclick="pickTr(${i})"><em>${i==SET.tr&&SET.mus?'♪':i+1}</em>${t.n}</button>`).join('')}</div>
 <div class="sr"><span>🔔 Effects</span><input type="range" id="svr" min="0" max="100" value="${Math.round(SET.sv*100)}">${sw(SET.sfx,'setSfx('+!SET.sfx+')')}</div>
 <button class="b g s" onclick="closeSt()">DONE ✓</button>`;
 $('mvr').oninput=e=>{SET.mv=e.target.value/100;bgm.volume=SET.mv};$('mvr').onchange=svSet;
 $('svr').oninput=e=>{SET.sv=e.target.value/100};$('svr').onchange=()=>{svSet();S('right')}}
let stP=0;
function openSt(){stP=0;if(G&&!G.over&&$('game').classList.contains('on')&&!G.pause&&$('qm').style.display!='flex'){G.pause=1;stP=1}renderSt();$('st').style.display='flex'}
function closeSt(){$('st').style.display='none';if(stP&&G)G.pause=0;stP=0}
$('gear').onclick=$('gg').onclick=openSt;
addEventListener('keydown',e=>{if(e.key=='Escape'&&$('st').style.display=='flex')closeSt()});

/* ===== PATINTERO GAME ===== */
const cv=$('cv'),cx=cv.getContext('2d'),W=240,H=160;cx.imageSmoothingEnabled=false;
let G,gid=0,last=0,paused=false,Cq={},usedQ=new Set(),parts=[],shake=0,streak=0,cdT;const keys={};const ANA={on:0,x:0,y:0,src:''};const bgImg=new Image();
addEventListener('keydown',e=>{const k=e.key.toLowerCase();keys[k]=1;if(k=='p'&&$('game').classList.contains('on'))$('pb').click();if(k.startsWith('arrow'))e.preventDefault()});
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=0);
document.querySelectorAll('#dp button').forEach(b=>{const k=b.dataset.k;['pointerdown'].forEach(v=>b.addEventListener(v,()=>keys[k]=1));['pointerup','pointerleave','pointercancel'].forEach(v=>b.addEventListener(v,()=>keys[k]=0))});

function realStart(t,l){l=l||0;G={t,lv:l,lives:3,score:0,st:{},f:0,sh:0,clock:0,pw:[]};paused=false;streak=0;usedQ=new Set();parts=[];$('pm').style.display=$('ld').style.display='none';show('game');newLevel();last=performance.now();const id=++gid;requestAnimationFrame(function l(ts){if(id!==gid)return;if(ts-last<10){requestAnimationFrame(l);return}   /* cap: 120 Hz screens draw at 60 fps */
 const gap=ts-last,dt=Math.min(40,gap)/16.7;last=ts;if(!paused&&!G.pause)upd(dt);draw();if(typeof perfTick=='function')perfTick(gap);requestAnimationFrame(l)})}
function newLevel(){const n=G.lv+2;G.p={x:120,y:148};G.tg=[];for(let i=0;i<n;i++)G.tg.push({x:20+Math.random()*200,y:Math.round(110-i*(88/(n-1+(n==2?0:0)))*(n>2?1:1)*(n==2?.9:1)*(n>2?(n-1)/(n-1):1)),d:Math.random()<.5?1:-1,v:.55+G.lv*.22+Math.random()*.2,done:0,b:0,w:0});
 // spread lanes evenly between y=34 and y=118
 G.tg.forEach((g,i)=>g.y=Math.round(118-i*(84/(n-1))));G.pw=[];const ty=['❤️','🛡️','⏱️'];for(let i=0;i<2;i++)G.pw.push({x:20+Math.random()*200,y:40+Math.random()*80,t:ty[(Math.random()*3)|0]});hud();countdown()}
function countdown(){paused=true;let n=3;clearInterval(cdT);cdT=setInterval(()=>{if(n>0){$('msg').textContent=`Level ${G.lv+1}: ${DIFF[G.lv]}${typeof MAPS!='undefined'&&MAPS[G.lv]?' · '+MAPS[G.lv].n:''}  ${n}`;S('count');n--}else{clearInterval(cdT);$('msg').textContent='GO!';S('go');paused=false;setTimeout(()=>{if($('msg').textContent=='GO!')$('msg').textContent=''},700)}},600)}
function burst(x,y,c){for(let i=0;i<16;i++)parts.push({x,y,vx:(Math.random()-.5)*3,vy:(Math.random()-.5)*3,l:30,c})}
function hud(){$('hud').textContent=`${T[G.t].ic} ${DIFF[G.lv]}  |  ${'❤️'.repeat(G.lives)}  |  ⭐ ${G.score}${G.sh?'  🛡️':''}${streak>1?'  🔥'+streak:''}`}
function flash(t){$('msg').textContent=t;setTimeout(()=>{if($('msg').textContent==t)$('msg').textContent=''},1600)}
function upd(dt){const p=G.p,k=keys;const dx=(k.arrowright||k.d?1:0)-(k.arrowleft||k.a?1:0),dy=(k.arrowdown||k.s?1:0)-(k.arrowup||k.w?1:0);
 p.x=Math.max(4,Math.min(W-4,p.x+dx*1.4*dt));p.y=Math.max(6,Math.min(H-6,p.y+dy*1.4*dt));if(dx||dy)G.f+=dt*.15;
 for(const g of G.tg){if(g.b<=0&&g.w<=0&&Math.random()<.004*dt){Math.random()<.5?g.b=45:g.w=35}g.x+=g.v*g.d*dt*(g.b>0?2.2:1)*(g.w>0?0:1);g.b-=dt;g.w-=dt;if(g.x<6||g.x>W-6)g.d*=-1;if(!g.done&&!paused&&Math.abs(p.x-g.x)<9&&Math.abs(p.y-g.y)<9){ask(g);break}}
 G.pw=G.pw.filter(o=>{if(Math.abs(p.x-o.x)<8&&Math.abs(p.y-o.y)<8){if(o.t=='❤️')G.lives=Math.min(5,G.lives+1);else if(o.t=='🛡️')G.sh=1;else G.clock=5;burst(o.x,o.y,'#fff');S('power');flash(o.t=='❤️'?'+1 Life!':o.t=='🛡️'?'Shield ready!':'+5s next question!');hud();return false}return true});
 if(p.y<16&&!paused)lvlUp()}
function lvlUp(){G.score+=100*(G.lv+1);burst(G.p.x,G.p.y,'#fff');S('win');if(G.lv>=3){G.lv=4;G.score+=200;finish(true);return}showLvDone()}
function person(x,y,c,h,f){x=x|0;y=y|0;cx.fillStyle='#0004';cx.fillRect(x+1,y+10,6,1);cx.fillStyle='#f5c9a0';cx.fillRect(x+2,y,4,4);cx.fillStyle=h;cx.fillRect(x+2,y,4,1);cx.fillStyle=c;cx.fillRect(x+1,y+4,6,4);cx.fillStyle='#333';cx.fillRect(x+1,y+8,2,2-f);cx.fillRect(x+5,y+8,2,1+f)}
function draw(){const th=TH[G.lv]||TH[3];cx.save();if(shake>0){cx.translate((Math.random()-.5)*5,(Math.random()-.5)*5);shake--}cx.fillStyle=th[0];cx.fillRect(0,0,W,H);if(bgImg.complete&&bgImg.naturalWidth){cx.drawImage(bgImg,0,0,W,H);cx.globalAlpha=.4;cx.fillRect(0,0,W,H);cx.globalAlpha=1}cx.fillStyle=th[1];
 cx.globalAlpha=.2;for(let y=0;y<H;y+=16)for(let x=(y/16%2)*16;x<W;x+=32)cx.fillRect(x,y,16,16);cx.globalAlpha=1;
 cx.fillStyle='#fff';cx.fillRect(0,0,W,14);cx.fillStyle='#222';for(let x=0;x<W;x+=8)for(let y=0;y<14;y+=7)if((x/8+y/7)%2==0)cx.fillRect(x,y,8,7);
 cx.fillStyle='#ffffff55';cx.fillRect(0,142,W,18);
 for(const g of G.tg){cx.fillStyle=g.done?'#ffffff55':'#fff';cx.fillRect(0,g.y+5,W,1);person(g.x-4,g.y-5,g.done?'#999':'#e74c3c',g.done?'#666':'#7b241c',(G.f*0+g.x/6|0)%2)}
 person(G.p.x-4,G.p.y-5,'#3498db','#1a5276',(G.f|0)%2);cx.font='9px sans-serif';G.pw.forEach(o=>cx.fillText(o.t,o.x-5,o.y+4+Math.sin(G.f*0+performance.now()/200+o.x)*1.5));for(const q of parts){q.x+=q.vx;q.y+=q.vy;q.l--;cx.fillStyle=q.c;cx.fillRect(q.x,q.y,2,2)}parts=parts.filter(q=>q.l>0);cx.restore()}

/* ===== QUESTIONS (faster answer = higher escape chance) ===== */
function ask(g){paused=true;const n=Math.ceil((G.lv+1)/2),m=qMode(G.t),ps=(m!='basic'&&QP[G.t]&&QP[G.t][G.lv])||[],
 /* unused questions of a bank, shuffled (a bank that runs low is reset on its own) */
 take=a=>{let f=a.filter(q=>!usedQ.has(q));if(f.length<2){a.forEach(q=>usedQ.delete(q));f=[...a]}return f.sort(()=>Math.random()-.5)},
 pools=!ps.length?[take(Q[G.t][G.lv])]:m=='ps'?[take(ps)]:[take(Q[G.t][G.lv]),take(ps)],ix=pools.map(()=>0),fl=Math.random()<.5?1:0;
 Cq={g,list:Array.from({length:n},(_,i)=>{const k=(i+fl)%pools.length,p=pools[k];return p[ix[k]++%p.length]}),i:0,fr:[],lock:0};Cq.list.forEach(q=>usedQ.add(q));$('qm').style.display='flex';nextQ()}
function nextQ(){const[q,o,a]=Cq.list[Cq.i];$('qh').textContent=`Tagger! Question ${Cq.i+1} of ${Cq.list.length}`+(qMode(G.t)=='mix'?(PSQ.has(Cq.list[Cq.i])?' · 🧮 Problem solving':' · 📘 Fundamentals'):'');$('qt').textContent=q;$('qr').textContent='';$('qo').innerHTML='';
 o.map((_,i)=>i).sort(()=>Math.random()-.5).forEach(i=>{const b=document.createElement('button');b.className='b bl';b.textContent=o[i];b.onclick=()=>pick(i==a);$('qo').append(b)});
 Cq.t0=performance.now();Cq.lim=12000+(PSQ.has(Cq.list[Cq.i])?8000:0)+(G.clock||0)*1000;G.clock=0;clearInterval(Cq.iv);Cq.iv=setInterval(()=>{const f=1-(performance.now()-Cq.t0)/Cq.lim;$('tb').style.width=Math.max(0,f*100)+'%';if(f<=0)pick(false)},50)}
function pick(ok){if(Cq.lock)return;clearInterval(Cq.iv);const el=Math.min(performance.now()-Cq.t0,Cq.lim),f=1-el/Cq.lim;
 const s=G.st[G.lv]=G.st[G.lv]||{c:0,w:0,t:0};ok?s.c++:s.w++;s.t+=el/1000;S(ok?'right':'wrong');
 if(!ok){Cq.lock=1;streak=0;const[,o,a]=Cq.list[Cq.i],sv=G.sh;$('qr').textContent='❌ Correct answer: '+o[a]+(sv?'  🛡️ Shield saved you!':'');setTimeout(()=>endQ(!!G.sh&&(G.sh=0,1)),sv?1700:2400);return}
 Cq.fr.push(f);streak++;Cq.i++;if(Cq.i<Cq.list.length){nextQ();return}
 const ch=.4+.6*(Cq.fr.reduce((a,b)=>a+b)/Cq.fr.length),pass=Math.random()<ch;Cq.lock=1;
 $('qr').textContent=`✅ Correct! Escape chance ${Math.round(ch*100)}%... `+(pass?'You slipped through!':'but the tagger tagged you!');setTimeout(()=>endQ(pass||(G.sh&&(G.sh=0,1))),1600)}
function endQ(pass){$('qm').style.display='none';if(pass){Cq.g.done=1;const m=Math.min(3,1+Math.floor(streak/3));G.score+=50*(G.lv+1)*m;burst(Cq.g.x,Cq.g.y,'#ffd43b');if(m>1)flash('🔥 Streak x'+m+'!')}else{G.oops=70;G.lives--;shake=10;streak=0;G.p.x=120;G.p.y=148;if(G.lives<1){finish(false);return}}hud();paused=false}

/* ===== END-GAME ANALYSIS ===== */
function finish(win){gid++;S(win?'win':'lose');let hs=0,nb=0;try{hs=+localStorage['mk'+G.t]||0;if(G.score>hs){localStorage['mk'+G.t]=G.score;hs=G.score;nb=1}}catch(e){}$('qm').style.display='none';let rows='',weak=[],tc=0,tw=0;
 Object.keys(G.st).forEach(k=>{const s=G.st[k],n=s.c+s.w,acc=Math.round(s.c/n*100),avg=(s.t/n).toFixed(1);tc+=s.c;tw+=s.w;rows+=`<tr><td>${DIFF[k]}</td><td>${s.c}/${n}</td><td>${acc}%</td><td>${avg}s</td></tr>`;if(acc<70)weak.push(`<b>${DIFF[k]}</b>: accuracy only ${acc}%. Re-study this tier's concepts.`);else if(s.t/n>8)weak.push(`<b>${DIFF[k]}</b>: correct but slow (${avg}s per question). Practice to answer faster.`)});
 const tot=tc+tw,acc=tot?Math.round(tc/tot*100):0;
 $('rp').innerHTML=`<h2>${win?'🏆 You cleared every tier!':'💥 Game over'}</h2><p>Topic: <b>${T[G.t].n}</b><br>Score: <b>${G.score}</b>${nb?' 🎉 New high score!':' (Best: '+hs+')'} · Overall accuracy: <b>${acc}%</b> (${tc} of ${tot} correct)</p>
 <h3>Performance breakdown</h3><table><tr><th>Tier</th><th>Correct</th><th>Accuracy</th><th>Avg time</th></tr>${rows||'<tr><td colspan=4>No questions answered yet</td></tr>'}</table>
 <h3>Weaknesses to improve</h3>${weak.length?'<ul style="margin-left:20px">'+weak.map(w=>`<li>${w}</li>`).join('')+'</ul>':'<p>No weak spots found. Great job! Try another topic.</p>'}
 <h3>Tips & suggestions</h3><div class="warn">${T[G.t].tip}</div><p>Fast, confident answers raise your escape chance, so review first, then replay.</p>
 ${vidHTML(G.t,'🎬 Watch these next to level up',4)}
 <div class="gbg">${gb('orange',IC.re,'REPLAY','openLv('+G.t+')')}${gb('red',IC.play,'OTHER TOPICS',"openTop('play')")}${gb('purple',IC.book,'STUDY TOPIC','openReview('+G.t+')')}${gb('blue',IC.x,'EXIT',"show('menu')")}</div>`;
 show('res')}

$('mb').onclick=()=>setMus(!SET.mus);

/* ===== HOW-TO-PLAY POPUP ===== */
const kid=(x,y,c,a)=>`<circle cx="${x}" cy="${y-10}" r="4.5" fill="#d9904f"/><rect x="${x-4.5}" y="${y-5.5}" width="9" height="9" rx="2.5" fill="${c}"/>`+(a?`<path d="M${x-11} ${y-3}h22" stroke="#d9904f" stroke-width="2.6" stroke-linecap="round"/>`:'');
const ct=i=>`<svg viewBox="0 0 240 152" width="440"><rect width="240" height="152" rx="14" fill="#e6c58f"/><rect x="30" y="20" width="180" height="108" fill="#f3dba8" stroke="#fff" stroke-width="2"/><path d="M30 56h180M30 92h180M120 20v108" stroke="#fff" stroke-width="2"/>${i}</svg>`;
const ln=(x1,y1,x2,y2,c,d)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="3.5" ${d?'stroke-dasharray="6 4"':''}/>`;
const tx=(x,y,s,c,a)=>`<text x="${x}" y="${y}" font-size="${s}" font-weight="700" fill="${c}" text-anchor="${a||'start'}" font-family="Fredoka,sans-serif">`;
const SL=[
{t:'Your goal',d:'Cross <b>every line</b> and <b>touch the flag</b> in the far corner to score the touchdown, then <b>run back</b> to the start to finish the level. There are 4 levels, from Easy to Hard!',
 v:ct(`${ln(55,136,55,34,'#27ae60')}<polygon points="47,38 63,38 55,24" fill="#27ae60"/>${ln(185,30,185,122,'#e67e22',1)}<polygon points="177,118 193,118 185,132" fill="#e67e22"/>${kid(80,142,'#2f80ed')}<rect x="196" y="4" width="2" height="16" fill="#5d4037"/><path d="M198 4l12 4-12 4z" fill="#e74c3c"/>${tx(64,80,11,'#1e8449')}① GO!</text>${tx(140,80,11,'#d35400')}② BACK!</text>${tx(104,146,9,'#6d4c41')}START</text>${tx(190,14,9,'#6d4c41','end')}FINISH</text>`)},
{t:'Meet the taggers',d:'<b style="color:#c0392b">Line taggers</b> guard the horizontal lines and slide left and right. From level 2, the <b style="color:#b7950b">defender</b> (green cap) guards the center line and slides up and down. Do not let them touch you!',
 v:ct(`${kid(80,56,'#c0392b',1)}${tx(72,40,16,'#c0392b')}↔</text>${kid(160,92,'#27ae60',1)}${tx(152,76,16,'#27ae60')}↔</text>${kid(120,84,'#f1c40f',1)}<rect x="115" y="69" width="10" height="3" rx="1" fill="#2e7d32"/>${tx(128,76,16,'#b7950b')}↕</text>${kid(60,142,'#2f80ed')}${tx(76,146,9,'#1f5fbf')}YOU</text>${tx(205,52,8.5,'#c0392b','end')}LINE TAGGER</text>${tx(205,124,8.5,'#b7950b','end')}DEFENDER (level 2+)</text>`)},
{t:'Controls',d:'Move your runner with the <b>arrow keys</b> or <b>WASD</b>. Press <b>P</b> to pause. On a phone, use the on-screen pad.',
 v:'<div class="keys"><div class="kg"><span></span><span class="kc">↑</span><span></span><span class="kc">←</span><span class="kc">↓</span><span class="kc">→</span></div><b>or</b><div class="kg"><span></span><span class="kc">W</span><span></span><span class="kc">A</span><span class="kc">S</span><span class="kc">D</span></div><div class="kg" style="grid-template-columns:44px"><span class="kc">P</span><small>pause</small></div></div>'},
{t:'Touched? Answer a question!',d:'When a tagger touches you, a <b>math question</b> pops up. Answer it <b>correctly and quickly</b> to slip through. Wrong or too slow, and you are tagged: you lose a life and restart your run.',
 v:'<div class="mq"><small>Tagger! Question 1 of 1</small><div class="mt">β = 0.5 and γ = 0.2. What is R₀?</div><div class="mbar"><i></i></div><div class="mo"><span>1.0</span><span class="ok">2.5 ✓</span><span>2.0</span><span>0.1</span></div></div><div class="mm">⚡ The faster you answer, the better your escape chance: <b>40% ➜ 100%</b></div>'},
{t:'Power-ups & lives',d:'Touch the items on the court to collect them. You start with <b>3 '+ico('heart','in')+'</b>. Lose them all and the game ends, then you get your performance analysis.',
 v:'<div class="pu"><div><span>'+ico('heart')+'</span>+1 life<small>max 5</small></div><div><span>'+ico('shield')+'</span>Shield<small>saves you from 1 tag</small></div><div><span>'+ico('clock')+'</span>+5 seconds<small>on your next question</small></div><div><span>🔥</span>Streak<small>3 right = x2, 6 = x3 score</small></div></div>'}];
let tI=0,tT=0;
function openTut(t){tT=t;tI=0;$('tut').style.display='flex';rTut()}
function rTut(){const s=SL[tI];$('tv').innerHTML=s.v;$('tt').textContent=s.t;$('td').innerHTML=s.d;$('tdots').innerHTML=SL.map((_,i)=>`<i class="${i==tI?'on':''}"></i>`).join('');$('tb1').style.visibility=tI?'visible':'hidden';$('tb2').textContent=tI==SL.length-1?(tT<0?'▶ RESUME':"▶ LET'S PLAY!"):'NEXT ▶'}
function cTut(){if($('tnv').checked){try{localStorage.mkTut=1}catch(e){}}$('tut').style.display='none';if(tT<0){G.pause=0;$('msg').textContent='';return}openLv(tT)}
function startGame(t){let s=0;try{s=localStorage.mkTut}catch(e){}s?openLv(t):openTut(t)}
$('tb1').onclick=()=>{tI--;rTut()};$('tb2').onclick=()=>{tI<SL.length-1?(tI++,rTut()):cTut()};$('tsk').onclick=cTut;
$('hb').onclick=()=>{if(G&&!G.over&&$('qm').style.display!='flex'){G.pause=1;$('msg').textContent='';openTut(-1)}};

/* ===== GAME BUTTONS (glossy, with icons) ===== */
const IC={play:'<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>',pause:'<svg viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16" rx="1.5"/><rect x="14" y="4" width="5" height="16" rx="1.5"/></svg>',re:'<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/><path d="M21 2.5v7.5h-7.5z"/></svg>',x:'<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" stroke="#fff" stroke-width="4.8" stroke-linecap="round"/></svg>',book:'<svg viewBox="0 0 24 24"><path d="M3 5h8v15H3zM13 5h8v15h-8z"/></svg>'};
const gb=(c,i,l,f)=>`<button class="gb ${c}" onclick="${f}"><i>${i}</i><span>${l}</span></button>`;
/* ===== PAUSE MENU ===== */
$('pb').onclick=()=>{if(!G||G.over||$('qm').style.display=='flex'||$('ld').style.display=='flex')return;if(G.pause){resumeG();return}G.pause=1;$('msg').textContent='';
 $('pmb').innerHTML=gb('red',IC.play,'RESUME','resumeG()')+gb('orange',IC.re,'REPLAY LEVEL','restartLv()')+gb('blue',IC.x,'EXIT','exitG()');$('pm').style.display='flex'};
function resumeG(){G.pause=0;$('pm').style.display='none'}
function restartLv(){$('pm').style.display='none';realStart(G.t,G.lv)}
function exitG(){$('pm').style.display='none';gid++;G.over=1;show('menu')}
/* ===== QUESTION TYPE: Fundamentals / Problem Solving / Mixed =====
   Fundamentals = Q[] in data.js, Problem Solving = QP[] in problems.js.
   A topic with no QP[] questions only offers Fundamentals (the picker is hidden). */
const QMODES=[['basic','📘','Fundamentals','Concept questions: key ideas, rules and definitions.'],['ps','🧮','Problem Solving','Solve the numbers: worked problems from the modules (extra answer time).'],['mix','🔀','Mixed','A bit of both, question by question.']];
let QM='basic';try{const v=localStorage.mkQM;if(v)QM=v}catch(e){}
const PSQ=new Set();if(typeof QP!=='undefined')QP.forEach(t=>t.forEach(a=>a.forEach(q=>PSQ.add(q))));
const hasPS=t=>typeof QP!=='undefined'&&!!QP[t]&&QP[t].some(a=>a&&a.length);
const qMode=t=>hasPS(t)&&QMODES.some(m=>m[0]==QM)?QM:'basic';
function renderQM(t){const b=$('qmode');if(!b)return;if(!hasPS(t)){b.style.display='none';return}const c=qMode(t);b.style.display='block';
 b.innerHTML='<div class="qmt">Question type</div><div class="qmr">'+QMODES.map(m=>`<button class="qmb${m[0]==c?' on':''}" onclick="setQM('${m[0]}',${t})"><i>${m[1]}</i>${m[2]}</button>`).join('')+'</div><div class="qmd">'+QMODES.find(m=>m[0]==c)[3]+'</div>'}
function setQM(m,t){QM=m;try{localStorage.mkQM=m}catch(e){}renderQM(t)}
/* ===== LEVEL SELECT (before playing) ===== */
const LV=[['Easy','green','3 lines · 1 question per tagger'],['Moderate','orange','4 lines + defender · 1 question per tagger'],['Intermediate','purple','5 lines + defender · 2 questions per tagger'],['Hard','red','5 lines · fastest taggers · 2 questions per tagger']];
function openLv(t){$('lms').textContent=T[t].n+': pick where to begin. You keep climbing up to Hard!';renderQM(t);$('lmb').innerHTML=LV.map((l,i)=>gb(l[1],'<b class="lvn">'+(i+1)+'</b>',`${l[0]}<small>${l[2]}</small>`,`pickLv(${t},${i})`)).join('');$('lm').style.display='flex'}
function pickLv(t,l){$('lm').style.display='none';realStart(t,l)}
$('lmx').onclick=()=>{$('lm').style.display='none';show('top')};
/* ===== LEVEL COMPLETE POPUP: advance + performance + what to improve ===== */
function ana(){let rows='',weak=[],tc=0,tw=0;Object.keys(G.st).forEach(k=>{const s=G.st[k],n=s.c+s.w,a=Math.round(s.c/n*100),v=(s.t/n).toFixed(1);tc+=s.c;tw+=s.w;rows+=`<tr><td>${DIFF[k]}</td><td>${s.c}/${n}</td><td>${a}%</td><td>${v}s</td></tr>`;if(a<70)weak.push(`<b>${DIFF[k]}</b>: accuracy ${a}%. Re-study this tier's concepts.`);else if(s.t/n>8)weak.push(`<b>${DIFF[k]}</b>: correct but slow (${v}s per question). Practice answering faster.`)});const tot=tc+tw;return{rows,weak,tc,tot,acc:tot?Math.round(tc/tot*100):0}}
function showLvDone(){paused=true;const a=ana(),s=G.st[G.lv]||{c:0,w:0,t:0},n=s.c+s.w,la=n?Math.round(s.c/n*100):100,st=la>=90?3:la>=70?2:1;
 $('ldb').innerHTML=`<h2>🎉 ${DIFF[G.lv]} level complete!</h2><div class="stars">${'⭐'.repeat(st)}${'<span style="filter:grayscale(1);opacity:.28">⭐</span>'.repeat(3-st)}</div>
 <p>Score <b>${G.score}</b> · Lives ${ico('heart','in').repeat(G.lives)} · This level: <b>${s.c}/${n}</b> correct (${la}%)</p>
 <div class="ldp"><h3>Overall performance</h3><table><tr><th>Tier</th><th>Correct</th><th>Accuracy</th><th>Avg time</th></tr>${a.rows||'<tr><td colspan=4>No questions answered yet</td></tr>'}</table><b>Overall accuracy: ${a.acc}%</b> (${a.tc}/${a.tot})
 <h3>What to improve</h3>${a.weak.length?'<ul style="margin-left:18px">'+a.weak.map(w=>`<li>${w}</li>`).join('')+'</ul>':'<p>Nothing to fix so far. Keep it up!</p>'}<div class="warn">${T[G.t].tip}</div></div>
 <div class="gbs">${gb('red',IC.play,'NEXT: '+DIFF[G.lv+1].toUpperCase(),'nextLv()')}${gb('orange',IC.re,'REPLAY LEVEL','replayLv()')}${gb('blue',IC.x,'EXIT','exitLd()')}</div>`;$('ld').style.display='flex'}
function nextLv(){$('ld').style.display='none';G.lv++;newLevel()}
function replayLv(){$('ld').style.display='none';G.score-=100*(G.lv+1);newLevel()}
function exitLd(){$('ld').style.display='none';gid++;G.over=1;show('menu')}
/* ===== REVIEWER AS ONE CONTINUOUS DOCUMENT ===== */
function paper(r){const hs=r.split('<h3>').slice(1).map(p=>p.split('</h3>')[0]);let k=0;const body=r.replace(/<h2>.*?<\/h2>/,'').replace(/<h3>/g,()=>`<h3 id="sec${k++}">`);
 return `<div class="toc">${hs.map((t,i)=>`<a onclick="document.getElementById('sec${i}').scrollIntoView({behavior:'smooth',block:'start'})">${t.replace(/^[\d.]+\s*/,'')}</a>`).join('')}</div><article class="paper">${body}</article>`}

/* ===== ABOUT WINDOW ===== */
function openAb(){$('ab').style.display='flex'}
$('abx').onclick=()=>{$('ab').style.display='none'};
