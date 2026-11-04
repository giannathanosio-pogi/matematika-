/* =====================================================================
   FX & POLISH LAYER (js/fx.js) - loaded last. Adds menu ambience, a nicer HUD,
   floating score text, confetti, a big countdown and a friendlier question window.
   It only wraps/overrides a few functions from game.js and court.js.
   Remove the fx.js script line near the bottom of index.html to turn it all off.
   ===================================================================== */

/* ---- drifting math symbols behind the menus ---- */
(()=>{const a=$('amb');if(!a)return;const sy=['+','−','×','÷','π','Σ','√','∞','%','=','x²','∆'],cols=['#ffffff','#ffe27a','#dff0ff','#ffffff','#ffe27a'];
 for(let i=0;i<16;i++){const s=document.createElement('span');s.textContent=sy[i%sy.length];
  s.style.cssText=`left:${Math.random()*95}%;font-size:${22+Math.random()*32}px;color:${cols[i%5]};animation-duration:${16+Math.random()*16}s;animation-delay:-${Math.random()*30}s`;a.append(s)}})();

/* ---- HUD: chips for level, lives, score, streak, shield and the current goal ---- */
let _hl=-1,_hs=-1;
hud=function(){if(!G)return;const L=G.lives,hearts=Array.from({length:Math.max(L,3)},(_,i)=>`<i class="${i<L?'':'off'}">${ico('heart')}</i>`).join('');
 $('hud').innerHTML=`<span class="hc lvc">${T[G.t].ic} ${DIFF[G.lv]}</span><span class="hc hearts ${_hl>=0&&L<_hl?'hit':''}">${hearts}</span><span class="hc sc ${_hs>=0&&G.score!=_hs?'pop':''}">⭐ ${G.score}</span>${G.sh?`<span class="hc shc">${ico('shield')}</span>`:''}${streak>1?`<span class="hc stk">🔥 ${streak}</span>`:''}<span class="hc ph" id="hph"></span>`;
 _hl=L;_hs=G.score;phase()};
function phase(){const e=$('hph');if(!e||!G||!G.tg)return;const back=G.ph=='back',d=G.tg.filter(g=>g.done).length;const html=back?'⬅ Run back to the start!':`${ico('flag','in')} Touch the flag  ${d}/${G.tg.length}`;if(e._h!==html){e.innerHTML=html;e._h=html}e.classList.toggle('back',back)}
setInterval(phase,200);

/* ---- floating text, confetti, better particle bursts (drawn on the canvas) ---- */
const _pops=[],_conf=[];
function pop(x,y,t,c){_pops.push({x,y,t,c:c||'#fff',l:62})}
function confetti(n){const C=['#ffd43b','#ff5a7a','#4fd1ff','#7be495','#c9a6ff','#fff'];for(let i=0;i<(n||110);i++)_conf.push({X:Math.random()*240,Y:-4-Math.random()*60,vx:(Math.random()-.5)*.7,vy:.5+Math.random()*.9,c:C[i%6],w:1.6+Math.random()*1.8,h:2.6+Math.random()*2,l:300})}
burst=function(x,y,c){const cols=[c,'#fff','#ffd43b'];for(let i=0;i<28;i++){const a=Math.random()*6.283,s=.35+Math.random()*1.5;parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-.25,l:24+(Math.random()*22|0),c:cols[i%3]})}};
const _draw=draw;
draw=function(){_draw();if(!G)return;cx.save();cx.setTransform(K*RS,0,0,K*RS,0,0);
 for(const f of _conf){f.X+=f.vx;f.Y+=f.vy;f.vy+=.004;f.l--;cx.globalAlpha=Math.min(1,f.l/40);cx.fillStyle=f.c;cx.fillRect(f.X,f.Y,f.w,f.h)}
 cx.globalAlpha=1;for(let i=_conf.length-1;i>=0;i--)if(_conf[i].l<=0||_conf[i].Y>170)_conf.splice(i,1);
 cx.textAlign='center';cx.lineJoin='round';
 for(const p of _pops){p.l--;p.y-=.28;const q=pj(p.x,p.y),sc=p.l>54?1+(p.l-54)*.08:1;cx.font=`bold ${(8.5*sc).toFixed(1)}px Fredoka,sans-serif`;cx.globalAlpha=Math.min(1,p.l/22);
  cx.lineWidth=2.4;cx.strokeStyle='#14306b';cx.strokeText(p.t,q.X,q.Y-16*q.S);cx.fillStyle=p.c;cx.fillText(p.t,q.X,q.Y-16*q.S)}
 cx.globalAlpha=1;for(let i=_pops.length-1;i>=0;i--)if(_pops[i].l<=0)_pops.splice(i,1);
 cx.restore()};

/* ---- score pop-ups, red hit flash, confetti on level clear ---- */
const _endQ=endQ;
endQ=function(pass){const s0=G.score,l0=G.lives,g=Cq.g,px=G.p.x,py=G.p.y;_endQ.apply(this,arguments);if(!G)return;
 const d=G.score-s0;if(d>0)pop(g.x,g.y,'+'+d,'#ffd43b');
 if(G.lives<l0){const f=$('hitfl'),t=$('tgd');f.classList.remove('on');void f.offsetWidth;f.classList.add('on');if(t){t.classList.remove('on');void t.offsetWidth;t.classList.add('on')}}};
const _sld=showLvDone;showLvDone=function(){confetti(130);_sld.apply(this,arguments)};

/* ---- big 3-2-1-GO countdown ---- */
countdown=function(){paused=true;let n=3;clearInterval(cdT);const cd=$('cd');
 const step=()=>{if(!G||G.over){clearInterval(cdT);cd.innerHTML='';return}
  if(n>0){cd.innerHTML=`<small>LEVEL ${G.lv+1} · ${DIFF[G.lv].toUpperCase()}</small><b>${n}</b>`;S('count');n--}
  else{clearInterval(cdT);cd.innerHTML='<b class="go">GO!</b>';S('go');paused=false;setTimeout(()=>{cd.innerHTML=''},750)}};
 step();cdT=setInterval(step,700)};

/* ---- question window: no badges, click or press 1-4 / A-D, right/wrong reveal ---- */
const _LET='ABCD';
function reveal(ch){[...$('qo').children].forEach(x=>{x.disabled=true;if(x.dataset.ok=='1')x.classList.add('okb');else if(x===ch)x.classList.add('badb')})}
nextQ=function(){const[q,o,a]=Cq.list[Cq.i];
 $('qh').innerHTML=`<span class="qc">${T[G.t].ic} ${T[G.t].n}</span><span class="qn">Question ${Cq.i+1} of ${Cq.list.length}</span>${qMode(G.t)=='mix'?`<span class="qk${PSQ.has(Cq.list[Cq.i])?' ps':''}">${PSQ.has(Cq.list[Cq.i])?'🧮 Problem solving':'📘 Fundamentals'}</span>`:''}${streak>1?`<span class="qs">🔥 ${streak}</span>`:''}`;
 $('qt').textContent=q;$('qr').textContent='';$('qo').innerHTML='';Cq.pend=0;$('tbw').classList.remove('low');
 o.map((_,i)=>i).sort(()=>Math.random()-.5).forEach((i,pos)=>{const b=document.createElement('button');b.className='b bl qb';b.dataset.ok=i==a?1:0;b.innerHTML=`<span>${o[i]}</span>`;b.onclick=()=>answer(b);$('qo').append(b)});
 fitQ();
 Cq.t0=performance.now();Cq.lim=12000+(PSQ.has(Cq.list[Cq.i])?8000:0)+(G.clock||0)*1000;G.clock=0;clearInterval(Cq.iv);   /* +8 s to work out a problem-solving question */
 Cq.iv=setInterval(()=>{const f=1-(performance.now()-Cq.t0)/Cq.lim;$('tb').style.width=Math.max(0,f*100)+'%';$('tbw').classList.toggle('low',f<.3);
  if(f<=0){clearInterval(Cq.iv);Cq.pend=1;reveal(null);pick(false)}},50)};

/* ---- shrink question + option text so it always fits inside the box and buttons ---- */
function fitQ(){
 const qt=$('qt'),btns=[...$('qo').children];
 qt.style.fontSize='';let f=25;
 while(f>15&&qt.scrollHeight>96){f--;qt.style.fontSize=f+'px'}
 btns.forEach(b=>b.style.transition='none');
 let fs=20;btns.forEach(b=>{b.style.fontSize=fs+'px'});
 const over=()=>btns.some(b=>b.scrollHeight>b.clientHeight+1||b.scrollWidth>b.clientWidth+1);
 while(fs>11&&over()){fs--;btns.forEach(b=>{b.style.fontSize=fs+'px'})}
 requestAnimationFrame(()=>requestAnimationFrame(()=>btns.forEach(b=>b.style.transition='')));
}
function answer(b){if(!Cq||Cq.lock||Cq.pend)return;Cq.pend=1;clearInterval(Cq.iv);const ok=b.dataset.ok=='1',e=performance.now()-Cq.t0;reveal(b);
 if(ok&&Cq.i<Cq.list.length-1)setTimeout(()=>{Cq.t0=performance.now()-e;pick(true)},380);else pick(ok)}
/* Questions are answered ONLY by tapping/clicking an option. (Keyboard answering with A-D / 1-4 was removed so WASD can't answer by accident.) */

/* ---- results screen: rating banner, score count-up, stars, confetti ---- */
const _fin=finish;
finish=function(win){_fin.apply(this,arguments);if(!G)return;
 const tc=Object.values(G.st).reduce((a,s)=>a+s.c,0),tt=Object.values(G.st).reduce((a,s)=>a+s.c+s.w,0),acc=tt?Math.round(tc/tt*100):0,
  n=acc>=90?3:acc>=70?2:acc>=40?1:0,ttl=acc>=90?'Math Champion!':acc>=70?'Great Runner!':acc>=40?'Keep Going!':'Warm-up Round',sc=G.score;
 const h=document.querySelector('#rp h2');if(!h)return;
 h.insertAdjacentHTML('afterend',`<div class="rbn"><div class="rst">${[0,1,2].map(i=>`<i class="${i<n?'on':''}" style="animation-delay:${.35+i*.25}s">★</i>`).join('')}</div><div class="rtt">${ttl}</div><div class="rsc"><small>SCORE</small><b id="rsn">0</b></div></div>`);
 const el=$('rsn'),t0=performance.now();(function tick(t){const f=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-f,3);el.textContent=Math.round(sc*e);if(f<1)requestAnimationFrame(tick)})(t0);
 if(win||n>=2)rainConfetti()};
function rainConfetti(){const r=$('res');r.querySelectorAll('.cf').forEach(x=>x.remove());const C=['#ffd43b','#ff5a7a','#4fd1ff','#7be495','#c9a6ff','#fff'];
 for(let i=0;i<46;i++){const s=document.createElement('i');s.className='cf';s.style.cssText=`left:${Math.random()*100}%;background:${C[i%6]};animation-duration:${2.4+Math.random()*2.4}s;animation-delay:${Math.random()*1.2}s;width:${6+Math.random()*6}px;height:${9+Math.random()*8}px`;r.append(s)}
 setTimeout(()=>r.querySelectorAll('.cf').forEach(x=>x.remove()),7000)}

/* ---- medals on the Play-mode topic cards (based on your best score) ---- */
const _openTop=openTop;
openTop=function(m){_openTop.apply(this,arguments);if(m!='play')return;
 [...$('tg').children].forEach((c,i)=>{let b=0;try{b=+localStorage['mk'+i]||0}catch(e){}
  const md=b>=1500?'🥇':b>=700?'🥈':b>0?'🥉':'';if(md)c.insertAdjacentHTML('beforeend',`<i class="medal">${md}</i>`)})};
