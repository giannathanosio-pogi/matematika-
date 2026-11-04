/* PATINTERO COURT ENGINE v2. The HTML sets `const STYLE='pixel'` or `'smooth'` before loading this file.
   Sprites are drawn once into a cache with a dark outline, then reused (fast + looks "game-art"). */
let OX=0,RS=1,RCAP=2;const K=4;   /* RS = canvas render scale (1 = full). Lowered automatically on slow devices, see perfTick() */
try{const s=parseFloat(localStorage.getItem('mat_rc2'));if(s>=1&&s<=2)RCAP=s}catch(e){}   /* RCAP = highest sharpness this device can handle (learned automatically, never below 1) */
let SPB=0;   /* new sprite bitmaps built this frame (limited so a frame never hitches) */
cv.width=960;cv.height=640;cv.style.imageRendering='auto';
/* ---- MAPS: one per level, in the order you sent the images (Village, Beach, Waterfall, Sakura Shrine).
   The ORIGINAL images are shown full quality on a layer behind the canvas (#bgl). g=[courtTopY,courtBottomY,halfWidthTop,halfWidthBottom] places the white lines on the dirt. ---- */
const MAPS=[
 {n:'Village',f:'assets/images/map_village.png',g:[70,148,76,112]},
 {n:'Beach',f:'assets/images/map_beach.png',g:[70,148,76,112]},
 {n:'Waterfall',f:'assets/images/map_forest.png',g:[70,148,76,112]},
 {n:'Sakura Shrine',f:'assets/images/map_shrine.png',g:[70,148,76,112]}];
MAPS.forEach(m=>{m.img=new Image();m.img.src=m.f});
const curMap=()=>MAPS[G&&G.lv]||MAPS[0];
function setMap(){const m=curMap(),g=m.g;YF=g[0];YN=g[1];HWF=g[2];HWN=g[3];const L=document.getElementById('bgl');if(L)L.style.backgroundImage="url('"+m.f+"')"}
const CX0=30,CX1=210,CY0=56,CY1=148,MX=120,LINES=[3,4,5,5];
const SKIN=['#d9904f','#c47a3a','#e8a86a','#b86f3a'],HAIR=['#1f1410','#2b1b12','#3a2416','#5a3a1e'],SHT=['#c0392b','#27ae60','#8e44ad','#e67e22','#16a085','#d35454','#2980b9','#f39c12'];
const rnd=(a,b)=>a+Math.random()*(b-a);
let YF=68,YN=146,HWF=70,HWN=108;const GRN=['#2fa84f','#38b857','#27994a'],TS=[.6,.74,.88,1.02];
const vv=y=>(y-CY0)/(CY1-CY0),hwv=v=>HWF+(HWN-HWF)*v;
/* 2.5D projection: logic (x,y) on the court -> screen X,Y and sprite scale S (far = small) */
function pj(x,y){const u=(x-CX0)/(CX1-CX0),v=vv(y);return{X:120+(u-.5)*2*hwv(v),Y:YF+(YN-YF)*v,S:.6+.4*v}}
const lk=(i,sh,a)=>({sh:sh||SHT[i%8],sk:SKIN[i%4],ha:HAIR[(i*3+1)%4],hs:[0,1,3,0,1][i%5],pt:['#34495e','#5d4037','#2c3e50','#6c3483'][i%4],cap:'#c0392b',a:a||0,f:0});
const FANS=[[9,86,3],[17,104,7],[8,122,11],[231,84,5],[224,102,9],[232,120,13],[148,63,15],[166,62,19],[12,157,23],[27,158,2],[213,157,4],[228,156,6]].map(([x,y,i])=>({x,y,o:lk(i),c:['runner_red','guard_orange','runner_yellow','guard_purple','guard_teal'][i%5],dir:y<70?'south':y>=150?'north':x<120?'east':'west'}));
const TEAM=[[46,155,17],[104,157,21]].map(([x,y,i])=>({x,y,o:lk(i,'#2f80ed'),c:'runner_yellow'}));
const mkT=(k,x,y,o)=>({k,x,y,o,d:Math.random()<.5?1:-1,v:.45+G.lv*.17+rnd(0,.15),done:0,b:0,w:0,lo:CX0+4,hi:CX1-4,lc:60,al:0,n:0,nt:0,p:.9+Math.random()*.2,ld:1,mv:0,vel:0,fd:1,af:0,nn:0,c:'guard_green',off:(Math.random()<.5?-1:1)*rnd(26,72)});
/* ---- character art: origin = feet. pixel = rectangles, smooth = vector shapes ---- */
function body(g,o){const px=K==1,{sh,sk,ha,hs,pt,f,a,cap}=o,l=[0,1,0,-1][f&3]*(px?1:1.4),R=(c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(x,y,w,h)};
 g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(0,0,5.5,1.7,0,0,7);g.fill();
 if(px){R(pt,-3+l,-7,2,5);R(pt,1-l,-7,2,5);R('#242438',-3+l,-2,3,2);R('#242438',1-l,-2,3,2);
  R(sh,-3,-13,6,7);R('rgba(0,0,0,.2)',-3,-9,6,3);R('rgba(255,255,255,.25)',-3,-13,1,6);
  if(a==1){R(sk,-9,-12,6,2);R(sk,3,-12,6,2);R(sh,-4,-13,2,3);R(sh,2,-13,2,3)}
  else if(a==2){R(sk,-5,-18,1,6);R(sk,4,-18,1,6);R(sh,-4,-13,1,2);R(sh,3,-13,1,2)}
  else{R(sk,-4,-12+(l>0),1,5);R(sk,3,-12+(l<0),1,5);R(sh,-4,-13,1,2);R(sh,3,-13,1,2)}
  R(sk,-3,-19,6,6);R(sk,-4,-17,1,2);R(sk,3,-17,1,2);R('#1b1b2f',-2,-17,1,2);R('#1b1b2f',1,-17,1,2);R('#9b3b3b',-1,-14,2,1);R('rgba(240,110,100,.45)',-3,-15,1,1);R('rgba(240,110,100,.45)',2,-15,1,1);
  if(hs==2){R(cap,-4,-21,8,2);R(cap,-3,-22,6,1);R(cap,2,-19,4,1)}
  else{R(ha,-3,-20,6,2);R(ha,-4,-19,1,3);R(ha,3,-19,1,3);if(hs==1)R(ha,3,-18,2,5);if(hs==3)R(ha,-1,-22,3,2)}}
 else{g.lineCap='round';g.strokeStyle=pt;g.lineWidth=2.5;g.beginPath();g.moveTo(-1.6,-7);g.lineTo(-1.6+l,-2.4);g.moveTo(1.6,-7);g.lineTo(1.6-l,-2.4);g.stroke();
  g.fillStyle='#242438';g.beginPath();g.ellipse(-1.6+l,-1.6,2,1.2,0,0,7);g.ellipse(1.6-l,-1.6,2,1.2,0,0,7);g.fill();
  g.fillStyle=sh;g.beginPath();g.roundRect(-3.7,-13.5,7.4,7.8,2);g.fill();g.fillStyle='rgba(0,0,0,.18)';g.beginPath();g.roundRect(-3.7,-9,7.4,3.3,[0,0,2,2]);g.fill();
  g.strokeStyle=sk;g.lineWidth=2;g.beginPath();
  if(a==1){g.moveTo(-3,-11.5);g.lineTo(-9,-12.3);g.moveTo(3,-11.5);g.lineTo(9,-12.3)}else if(a==2){g.moveTo(-3.5,-12);g.lineTo(-5,-18.5);g.moveTo(3.5,-12);g.lineTo(5,-18.5)}else{g.moveTo(-3.7,-11.5);g.lineTo(-4.7,-6.5+l*.6);g.moveTo(3.7,-11.5);g.lineTo(4.7,-6.5-l*.6)}g.stroke();
  g.fillStyle=sk;g.beginPath();g.arc(0,-16.4,4,0,7);g.fill();
  g.fillStyle='rgba(240,120,110,.35)';g.beginPath();g.arc(-2.7,-15,.9,0,7);g.arc(2.7,-15,.9,0,7);g.fill();
  g.fillStyle='#1b1b2f';g.beginPath();g.ellipse(-1.6,-16,.7,1,0,0,7);g.ellipse(1.6,-16,.7,1,0,0,7);g.fill();
  g.strokeStyle='#8b2d2d';g.lineWidth=.6;g.beginPath();g.arc(0,-14.6,1.1,.2,Math.PI-.2);g.stroke();
  if(hs==2){g.fillStyle=cap;g.beginPath();g.arc(0,-17.6,4.5,Math.PI,0);g.fill();g.fillRect(0,-18.1,6,1.4)}
  else{g.fillStyle=ha;g.beginPath();g.arc(0,-17.2,4.3,Math.PI*1.02,Math.PI*1.98);g.fill();if(hs==1){g.beginPath();g.ellipse(4.3,-14,1.6,3.4,.2,0,7);g.fill()}if(hs==3){g.beginPath();g.arc(0,-21.6,2,0,7);g.fill()}}}}
const SC={};
function spr0(o){const key=JSON.stringify(o);if(SC[key])return SC[key];const N=34,S=N*K,c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');g.scale(K,K);g.translate(N/2,N-5);body(g,o);
 const c2=document.createElement('canvas');c2.width=c2.height=S;const h=c2.getContext('2d'),d=K==1?1:.9;
 [[d,0],[-d,0],[0,d],[0,-d],[d,d],[-d,-d],[d,-d],[-d,d]].slice(0,K==1?4:8).forEach(([x,y])=>h.drawImage(c,x*K,y*K));
 h.globalCompositeOperation='source-in';h.fillStyle='#1d1530';h.fillRect(0,0,S,S);h.globalCompositeOperation='source-over';h.drawImage(c,0,0);return SC[key]=c2}
const SC2={};
function P(x,y,o,S){const ti=S<.67?0:S<.8?1:S<.94?2:3,k=JSON.stringify(o)+ti;let c=SC2[k];
 if(!c){const b=spr0(o),n=Math.round(b.width*TS[ti]);c=document.createElement('canvas');c.width=c.height=n;const g=c.getContext('2d');g.imageSmoothingEnabled=K==4;g.drawImage(b,0,0,n,n);SC2[k]=c}
 const s=TS[ti],px=K==1?Math.round(x):x,py=K==1?Math.round(y):y;cx.drawImage(c,px-17*s,py-29*s,34*s,34*s)}
/* ---- level setup ---- */
/* ---- difficulty: guard speed, reaction delay (ms), and how many lines are defended by TWO guards (a double team) ---- */
const DEF_REACH=34,VDEF_REACH=32;   /* how close the runner must be before a defender reacts */
const SPD=[.6,.78,.93,1.06],LAGMS=[460,380,300,230],DOUB=[0,1,2,3],DORD=[3,2,4,1,5];
function newLevel(){setMap();const n=LINES[G.lv]||5;G.p={x:75,y:154,vx:0,vy:0,dir:'north',sx:0,sxT:0};G.gh=[];G.juke=0;G.af=0;G.ph='go';G.tg=[];G.ys=[];G.cheer=0;G.hx=[];G.tm=0;
 const dbl=DORD.filter(i=>i<=n).slice(0,DOUB[G.lv]||0);
 for(let i=1;i<=n;i++){const y=Math.round(CY1-i*(CY1-CY0)/(n+1));G.ys.push(y);
  if(dbl.includes(i)){const A=mkT('h',rnd(CX0+10,MX-10),y,lk(i+G.lv*2,GRN[i%3],1)),B=mkT('h',rnd(MX+10,CX1-10),y,lk(i+G.lv*2+5,GRN[(i+1)%3],1));A.hi=MX+16;B.lo=MX-16;B.c='guard_teal';G.tg.push(A,B)}
  else G.tg.push(mkT('h',rnd(CX0+10,CX1-10),y,lk(i+G.lv*2,GRN[i%3],1)))}
 if(G.lv>0){const V=mkT('v',MX,rnd(CY0+15,CY1-15),{...lk(2,'#f1c40f',1),hs:2,cap:'#2e7d32'});V.lo=CY0+8;V.hi=CY1-8;V.c='guard_purple';G.tg.push(V)}
 G.tg.forEach((g,i)=>g.dc=DEFPOOL[(i+G.lv*2)%DEFPOOL.length]);
 G.pw=[];for(let i=0;i<2;i++)G.pw.push({x:rnd(CX0+12,CX1-12),y:rnd(CY0+10,CY1-10),t:['❤️','🛡️','⏱️'][(Math.random()*3)|0]});
 hud();countdown()}
function upd(dt){const p=G.p,k=keys,dx=(k.arrowright||k.d?1:0)-(k.arrowleft||k.a?1:0),dy=(k.arrowdown||k.s?1:0)-(k.arrowup||k.w?1:0);
 /* PLAYER MOVEMENT: eased acceleration (no instant snaps), same speed on diagonals, facing taken from real velocity */
 let ix=dx,iy=dy;if(ix&&iy){ix*=.7071;iy*=.7071}
 if(ANA.on){ix=ANA.x;iy=ANA.y}   /* touch joystick / button pad (analog) */
 const ez=Math.min(1,.3*dt);p.vx+=(ix*1.3-p.vx)*ez;p.vy+=(iy*1.3-p.vy)*ez;if(!ix&&Math.abs(p.vx)<.04)p.vx=0;if(!iy&&Math.abs(p.vy)<.04)p.vy=0;
 p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<CX0){p.x=CX0;p.vx=0}if(p.x>CX1){p.x=CX1;p.vx=0}if(p.y<46){p.y=46;p.vy=0}if(p.y>157){p.y=157;p.vy=0}
 G.cheer=Math.max(0,(G.cheer||0)-dt);G.oops=Math.max(0,(G.oops||0)-dt);G.juke=Math.max(0,(G.juke||0)-dt);
 const nowT=performance.now();const jx=ANA.on?(Math.abs(ANA.x)>.6?Math.sign(ANA.x):0):dx;if(jx){if(p.sx&&jx!==p.sx&&nowT-p.sxT<300&&Math.sign(p.vx)===p.sx&&Math.abs(p.vx)>.5)G.juke=24;p.sx=jx;p.sxT=nowT}
 const spd=Math.hypot(p.vx,p.vy),sx=Math.abs(p.vx)>.3,sy=Math.abs(p.vy)>.3,hz=p.vx>0?'east':'west',vt0=p.vy<0?'north':'south';
 if(sx&&!sy)p.dir=hz;else if(sy&&!sx)p.dir=vt0;else if(sx&&sy&&p.dir!=hz&&p.dir!=vt0)p.dir=vt0;
 if(spd>.1)G.af=(G.af||0)+dt*(.06+spd*.12);
 if(spd>.4&&Math.random()<.25*dt)parts.push({x:p.x,y:p.y,vx:rnd(-.3,.3),vy:-.2,l:16,c:'#e9d3a5'})
G.tm+=dt*16.7;G.hx.push([G.tm,p.x,p.y]);while(G.hx.length>2&&G.hx[1][0]<G.tm-1500)G.hx.shift();
 const lagP=ms=>{const T=G.tm-ms;let r=G.hx[0];for(const h of G.hx){if(h[0]<=T)r=h;else break}return r};
 const cl=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
 /* ONLY THE DEFENDER(S) OF THE LINE THE RUNNER IS ABOUT TO CROSS GUARD HIM: the nearest uncrossed line ahead (NY), and only once he is
    close to it (DEF_REACH). Defenders on every other line keep patrolling their own line instead of all chasing the runner. */
 let NY=-999;{let best=1e9;for(const h of G.tg)if(h.k=='h'&&!h.done){const d=G.ph=='go'?p.y-h.y:h.y-p.y;if(d>-7&&d<best){best=d;NY=h.y}}if(best>=DEF_REACH)NY=-999}
 for(const g of G.tg){
  /* PATINTERO GUARD AI: shadow the runner (human reaction delay), lunge when close, then be open for a moment.
     Speed changes gradually (acceleration limit) so guards glide instead of twitching. */
  const L=lagP(LAGMS[G.lv]*(g.p+.15)),sp=SPD[G.lv]*g.p,acc=[.07,.1,.135,.17][G.lv]*dt;g.nt-=dt;g.lc-=dt;if(g.tn>0)g.tn-=dt;
  if(g.nt<=0){g.nn=rnd(-7,7);g.nt=rnd(25,60)}g.n+=(g.nn-g.n)*Math.min(1,.07*dt);let vt=0;
  if(g.k=='h'){const dyp=G.ph=='go'?p.y-g.y:g.y-p.y;g.al=!g.done&&dyp>-7&&dyp<DEF_REACH&&g.y==NY;
   if(g.b>0){g.vel=g.ld*2.1;g.b-=dt;if(g.b<=0)g.w=42-G.lv*5}
   else if(g.w>0)g.w-=dt;
   else if(g.al){const hard=dyp<27,tx=cl(L[1]+(hard?g.n:g.off),g.lo,g.hi),d=tx-g.x;vt=Math.abs(d)<2?0:Math.sign(d)*Math.min(sp*(hard?1:.7),Math.abs(d)*.2+.12);
    if(g.lc<=0&&dyp<20&&Math.abs(p.x-g.x)<30&&Math.abs(p.x-g.x)>3){g.b=9;g.ld=Math.sign(p.x-g.x)||1;g.lc=100-G.lv*10;if(typeof pop=='function')pop(g.x,g.y,'!','#ff6b6b')}}
   else{vt=g.d*g.v*.55;if(g.x<g.lo+3)g.d=1;if(g.x>g.hi-3)g.d=-1}
   if(!(g.b>0))g.vel+=cl(vt-g.vel,-acc,acc);
   g.x+=g.vel*dt;if(g.x<g.lo){g.x=g.lo;g.vel=Math.max(0,g.vel)}if(g.x>g.hi){g.x=g.hi;g.vel=Math.min(0,g.vel)}}
  else{g.al=!g.done&&Math.abs(p.x-MX)<VDEF_REACH;
   if(g.b>0){g.x+=g.ld*1.9*dt;g.b-=dt;if(g.b<=0)g.w=42-G.lv*5}
   else if(g.w>0)g.w-=dt;
   else if(g.al){const ty=cl(L[2]+g.n,g.lo,g.hi),d=ty-g.y;vt=Math.abs(d)<2?0:Math.sign(d)*Math.min(sp*1.05,Math.abs(d)*.2+.12);
    const tox=MX+cl((p.x-MX)*.6,-26,26),dxx=tox-g.x;g.x+=Math.sign(dxx)*Math.min(Math.abs(dxx)*.1,.55)*dt;
    if(g.lc<=0&&Math.abs(p.y-g.y)<16&&Math.abs(p.x-g.x)<30&&Math.abs(p.x-g.x)>3){g.b=9;g.ld=Math.sign(p.x-g.x)||1;g.lc=100-G.lv*10;if(typeof pop=='function')pop(g.x,g.y,'!','#ff6b6b')}}
   else{vt=g.d*g.v*.55;g.x+=(MX-g.x)*.03*dt;if(g.y<g.lo+3)g.d=1;if(g.y>g.hi-3)g.d=-1}
   g.vel+=cl(vt-g.vel,-acc,acc);g.y+=g.vel*dt;if(g.y<g.lo){g.y=g.lo;g.vel=Math.max(0,g.vel)}if(g.y>g.hi){g.y=g.hi;g.vel=Math.min(0,g.vel)}g.x=cl(g.x,MX-30,MX+30)}
  g.mv=Math.abs(g.vel)>.12?1:0;if(g.mv){g.fd=Math.sign(g.vel);g.af+=dt*(.07+Math.abs(g.vel)*.13)}
  if(!g.done&&!paused&&Math.abs(p.x-g.x)<8&&Math.abs(p.y-g.y)<6){ask(g);break}}
 G.pw=G.pw.filter(o=>{if(Math.abs(p.x-o.x)<8&&Math.abs(p.y-o.y)<8){if(o.t=='❤️')G.lives=Math.min(5,G.lives+1);else if(o.t=='🛡️')G.sh=1;else G.clock=5;burst(o.x,o.y,'#fff');S('power');flash(o.t=='❤️'?'+1 Life!':o.t=='🛡️'?'Shield ready!':'+5s next question!');hud();return false}return true});
 if(G.ph=='go'&&p.y<=CY0+8&&p.x>=CX1-26&&Math.hypot(p.x-CX1,(p.y-CY0)*1.3)<=26){G.ph='back';G.cheer=60;G.tg.forEach(g=>{g.done=0;g.lc=Math.max(g.lc,55);g.b=0;g.w=0;g.tn=DEF_TURN});G.score+=50;burst(p.x,p.y,'#fff');S('checkpoint');flash('🏁 Now run back to the start!')}
 else if(G.ph=='back'&&p.y>=CY1+5&&!paused){G.cheer=120;lvlUp()}}
function endQ(pass){$('qm').style.display='none';
 if(pass){S('escape');Cq.g.done=1;Cq.g.tn=DEF_TURN;G.juke=24;G.cheer=70;const m=Math.min(3,1+Math.floor(streak/3));G.score+=50*(G.lv+1)*m;burst(Cq.g.x,Cq.g.y,'#ffd43b');if(m>1)flash('🔥 Streak x'+m+'!')}
 else{S('tag');G.oops=70;G.lives--;shake=10;streak=0;(G.gh=G.gh||[]).push({x:G.p.x,y:G.p.y,t0:performance.now()});G.p.x=75;G.p.y=154;G.p.vx=G.p.vy=0;G.p.dir='north';G.ph='go';G.tg.forEach(g=>{g.done=0;g.lc=Math.max(g.lc,55);g.b=0;g.w=0});if(G.lives<1){finish(false);return}}
 hud();paused=false}
/* ---- pickups & flag are real <img> elements (not drawn on the small canvas), so your images keep FULL quality ---- */
const PNAME={'❤️':'heart','🛡️':'shield','⏱️':'clock'};
function syncDom(now){const L=document.getElementById('pul');if(!L||!G||!G.pw)return;const keep=new Set(G.pw);
 for(const el of [...L.children])if(!keep.has(el._o))el.remove();
 for(const o of G.pw){let el=o.el;if(!el||el.parentNode!==L){el=o.el=document.createElement('img');el._o=o;el.src=ICO[PNAME[o.t]];el.alt='';el.draggable=false;L.appendChild(el)}
  const q=pj(o.x,o.y),h=Math.round(19*4*q.S),bob=Math.sin(now/200+o.x)*5;if(el._h!==h){el.style.height=h+'px';el._h=h}
  el.style.transform=`translate(${((q.X+OX)*4).toFixed(1)}px,${(q.Y*4-4+bob).toFixed(1)}px) translate(-50%,-100%)`}
 const F=document.getElementById('flg');if(F){const f=pj(CX1,CY0);const fh=Math.round(124*f.S);if(F._h!==fh){F.style.height=fh+'px';F._h=fh}F.style.transform=`translate(${((f.X+OX)*4).toFixed(1)}px,${(f.Y*4-2).toFixed(1)}px) translate(-36%,-100%)`}}
/* ---- drawing (2.5D court) ---- */
function draw(){SPB=0;const now=performance.now(),t=K==4?1.3:1;cx.setTransform(K*RS,0,0,K*RS,0,0);cx.imageSmoothingEnabled=K==4;cx.save();if(shake>0){cx.translate(rnd(-2,2),rnd(-2,2));shake--}
 cx.clearRect(-80,-20,460,200);cx.translate(OX,0);
 const Yv=v=>YF+(YN-YF)*v,tr=(v0,v1,c)=>{const a=hwv(v0),b=hwv(v1);cx.fillStyle=c;cx.beginPath();cx.moveTo(120-a,Yv(v0));cx.lineTo(120+a,Yv(v0));cx.lineTo(120+b,Yv(v1));cx.lineTo(120-b,Yv(v1));cx.closePath();cx.fill()};
 tr(0,1,'rgba(235,205,150,.30)');const vs=[0,...G.ys.slice().reverse().map(vv),1];
 vs.forEach((v,i)=>{if(i%2==0&&vs[i+1]!=null)tr(v,vs[i+1],'rgba(255,255,255,.07)')});tr(-.12,0,'rgba(231,76,60,.18)');tr(1,1.12,'rgba(47,128,237,.2)');
 const sh='rgba(60,35,10,.35)',wh='rgba(255,255,255,.95)';
 vs.forEach(v=>{const y=Math.round(Yv(v)),h=hwv(v);cx.fillStyle=sh;cx.fillRect(120-h,y+t,2*h,t);cx.fillStyle=wh;cx.fillRect(120-h,y,2*h,t)});
 if(K==4){cx.lineCap='round';[[sh,1],[wh,0]].forEach(([c,o])=>{cx.strokeStyle=c;cx.lineWidth=t;cx.beginPath();cx.moveTo(120-HWF+o*0,YF+o*0+(o?0:0));cx.moveTo(120-HWF,YF+(o?t:0));cx.lineTo(120-HWN,YN+(o?t:0));cx.moveTo(120+HWF,YF+(o?t:0));cx.lineTo(120+HWN,YN+(o?t:0));cx.stroke()})}
 else for(let y=YF;y<=YN;y++){const h=hwv((y-YF)/(YN-YF));cx.fillStyle=sh;cx.fillRect(Math.round(120-h)+1,y+1,1,1);cx.fillRect(Math.round(120+h)+1,y+1,1,1);cx.fillStyle=wh;cx.fillRect(Math.round(120-h),y,1,1);cx.fillRect(Math.round(120+h),y,1,1)}
 cx.fillStyle=sh;cx.fillRect(120+t,YF,t,YN-YF);cx.fillStyle=wh;cx.fillRect(120,YF,t,YN-YF);
 
 
 const up=G.ph=='go',ax=Math.round(pj(CX0,102).X-14),ay=Math.round(100+Math.sin(now/180)*3);cx.fillStyle='#ffd43b';for(let i=0;i<5;i++)cx.fillRect(ax-i,ay+(up?i:-i),1+2*i,1);
 const ch=G.cheer>0,E=[],fS=y=>Math.max(.6,Math.min(1.04,.6+.4*(y-YF)/(YN-YF)));
 FANS.forEach((f,i)=>{const on=ch||Math.sin(now/230+i*1.7)>.35;E.push([f.y,()=>{if(!fanDraw(f,i,f.x,f.y,fS(f.y),now))spDraw(f.x,f.y,fS(f.y),f.c,'celebrate',f.dir,now/100+i*3)}])});
 TEAM.forEach((f,i)=>{const q=pj(f.x,f.y);E.push([q.Y,()=>{if(!fanDraw(f,i+7,q.X,q.Y,q.S,now,'north'))spDraw(q.X,q.Y,q.S,f.c,'celebrate','north',now/100+i*4)}])});
 const p=G.p;
 G.tg.forEach(g=>{const q=pj(g.x,g.y);E.push([q.Y,()=>{let a,fr,dir=p.y<g.y?'north':'south';
  if(g.done){a='idle';fr=now/130+g.x}
  else if(g.b>0){a='guard_tag_'+(g.ld>0?'right':'left');fr=Math.min(7,(1-g.b/9)*8)}
  else if(g.w>0){a='guard_ready';fr=now/160+g.x}
  else if(g.mv){a=g.k=='h'?(g.fd>0?'guard_shuffle_right':'guard_shuffle_left'):'guard_line_slide';fr=g.af;if(g.k=='v')dir=g.vel<0?'north':'south'}
  else{a='guard_ready';fr=now/110+g.x}
  if(!defGuard(g,q,p,now))spDraw(q.X,q.Y,q.S,g.c,a,dir,fr)}])});
 (G.gh||[]).forEach(h=>{const age=(now-h.t0)/1000,q=pj(h.x,h.y);E.push([q.Y,()=>spDraw(q.X,q.Y,q.S,'runner_blue','tagged','south',Math.min(7,age*10))])});G.gh=(G.gh||[]).filter(h=>now-h.t0<1500);
 const pq=pj(p.x,p.y);
 E.push([pq.Y,()=>{cx.fillStyle='rgba(255,235,120,.42)';cx.beginPath();cx.ellipse(pq.X,pq.Y,9*pq.S,3.2*pq.S,0,0,7);cx.fill();
  const spd=Math.hypot(p.vx,p.vy);let a='idle',fr=now/130,dir=p.dir;
  if(G.juke>0){a='dodge_juke';fr=(1-G.juke/24)*8}else if(spd>.25){a=spd>.85?'run':'walk';fr=G.af}else if(G.cheer>0){a='celebrate';fr=now/100;dir=G.ph=='back'?'north':'south'}
  spDraw(pq.X,pq.Y,pq.S,'runner_blue',a,dir,fr);
  const my=pq.Y-SPTOP*SPSC*pq.S/K-5+Math.sin(now/160)*1.5;cx.fillStyle='#ffd43b';cx.strokeStyle='#7a5b00';cx.lineWidth=.6;cx.lineJoin='round';cx.beginPath();cx.moveTo(pq.X-3.2,my-3);cx.lineTo(pq.X+3.2,my-3);cx.lineTo(pq.X,my+1.5);cx.closePath();cx.fill();cx.stroke()}]);
 E.sort((a,b)=>a[0]-b[0]).forEach(e=>e[1]());
 syncDom(now);
 for(const q of parts){q.x+=q.vx;q.y+=q.vy;q.l--;const z=pj(q.x,q.y);cx.fillStyle=q.c;cx.fillRect(z.X,z.Y,2,2)}parts=parts.filter(q=>q.l>0);cx.restore()}


/* ---- FULL-SCREEN PLAY AREA: while playing, the court layer is widened to the screen shape (up to 16:9) so there are no side strips.
   OX shifts everything drawn on the canvas (and the flag / power-up icons) so the court stays centred on the map picture. ---- */
function fitW(){const vw=innerWidth,vh=innerHeight,AW=Math.round(Math.max(960,Math.min(1137,640*vw/vh)));
 /* sharpness: draw the court at the size it is really shown on screen (screen scale x pixel ratio), 1x..2x, so nothing is stretched/blurry on tablets and phones */
 {const sc=Math.min(vw/960,vh/640),want=Math.max(1,Math.min(2,sc*(window.devicePixelRatio||1),RCAP)),rs=Math.round(want*8)/8;
  if(rs!==RS){RS=rs;if(typeof SPC!='undefined'){for(const o of [SPC,DEFC,FANC])for(const k in o)delete o[k];SPN=0}}}
 const pw=Math.round(AW*RS),ph=Math.round(640*RS);if(cv.width!==pw||cv.height!==ph){cv.width=pw;cv.height=ph}cv.style.width=AW+'px';OX=(AW-960)/2/K;$('game').style.setProperty('--aw',AW+'px')}
addEventListener('resize',fitW);addEventListener('orientationchange',()=>setTimeout(fitW,250));
document.addEventListener('fullscreenchange',()=>setTimeout(fitW,120));document.addEventListener('webkitfullscreenchange',()=>setTimeout(fitW,120));
const _show0=show;show=function(id){_show0(id);const a=$('app');if(a)a.classList.toggle('wide',id=='game');fitW()};
fitW();

/* ---- AUTO PERFORMANCE ------------------------------------------------------------------------------------------
   If the device cannot hold about 45 fps, the game quietly lowers the canvas resolution (the browser scales it back up,
   so nothing changes in size) and remembers it for next time. The frame rate is also capped (see the loop in game.js). */
const PF={n:0,sum:0,skip:90};
function perfTick(gap){if(gap>90)return;if(PF.skip>0){PF.skip--;return}PF.n++;PF.sum+=gap;
 if(PF.n>=40){const avg=PF.sum/PF.n;PF.n=0;PF.sum=0;
  if(avg>21&&RS>1){RCAP=Math.max(1,Math.round((RS-.25)*8)/8);try{localStorage.setItem('mat_rc2',String(RCAP))}catch(e){}fitW();PF.skip=30}}}
