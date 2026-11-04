/* =====================================================================
   MOBILE / TABLET CONTROLS (js/touch.js) - loaded last.
   Two on-screen control types, chosen in  Settings (gear) > Controls :
     1. JOYSTICK  - round analog stick (push further = run faster)
     2. BUTTONS   - up / left / down / right pad (like a classic d-pad)
   Both feed the shared ANA input (defined in court.js), so the keyboard still works too.
   The controls live OUTSIDE the scaled game box, so they stay a comfortable finger size on any screen.
   ===================================================================== */
(()=>{
const TOUCH=('ontouchstart' in window)||navigator.maxTouchPoints>0||matchMedia('(pointer:coarse)').matches;
document.body.classList.toggle('touch',TOUCH);

/* ---- saved options (stored with the other settings) ---- */
if(!['joy','pad','off'].includes(SET.ctl))SET.ctl=TOUCH?'joy':'off';
if(!(SET.cs>=60&&SET.cs<=160))SET.cs=100;      // size %
if(!(SET.co>=25&&SET.co<=100))SET.co=80;       // opacity %
if(SET.cside!=='right'&&SET.cside!=='left')SET.cside='left';

/* ---- build the controls ---- */
const tri=(r)=>`<svg viewBox="0 0 24 24" style="transform:rotate(${r}deg)"><path d="M12 6l7 11H5z"/></svg>`;
const root=document.createElement('div');root.id='tc';
root.innerHTML=`
<div id="joy" class="ctl" aria-label="Joystick">
  <svg viewBox="0 0 200 200" class="jb">
    <circle cx="100" cy="100" r="98" fill="#4a4a4d"/>
    <path d="M30 30L72 72M170 30L128 72M30 170L72 128M170 170L128 128" stroke="#38383b" stroke-width="3"/>
    <circle cx="100" cy="100" r="46" fill="#2f2f32"/><circle cx="100" cy="100" r="36" fill="#3a3a3d"/>
    <path d="M100 14l9 13h-18z M100 186l9-13h-18z M14 100l13-9v18z M186 100l-13-9v18z" fill="#fff"/>
  </svg>
  <i id="jk"></i>
</div>
<div id="pad" class="ctl" aria-label="Direction buttons">
  <button data-d="u" tabindex="-1" aria-label="Up">${tri(0)}</button>
  <button data-d="l" tabindex="-1" aria-label="Left">${tri(-90)}</button>
  <button data-d="d" tabindex="-1" aria-label="Down">${tri(180)}</button>
  <button data-d="r" tabindex="-1" aria-label="Right">${tri(90)}</button>
</div>`;
document.body.appendChild(root);
root.addEventListener('contextmenu',e=>e.preventDefault());
const joy=$('joy'),jk=$('jk'),pad=$('pad');

/* ---- JOYSTICK ---- */
let jp=null;
function joyMove(e){
  const r=joy.getBoundingClientRect(),R=r.width/2,cx0=r.left+R,cy0=r.top+R;
  let dx=e.clientX-cx0,dy=e.clientY-cy0;const len=Math.hypot(dx,dy),max=R*.62,l=Math.min(len,max);
  const ux=len?dx/len:0,uy=len?dy/len:0;                       // direction
  jk.style.transform=`translate(calc(-50% + ${ux*l}px),calc(-50% + ${uy*l}px))`;
  const f=l/max,m=f<.12?0:Math.min(1,f/.85);                   // small dead zone, full speed near the edge
  ANA.on=1;ANA.x=ux*m;ANA.y=uy*m;
}
function joyEnd(e){if(jp!==null&&e.pointerId!==jp)return;jp=null;jk.style.transform='translate(-50%,-50%)';joy.classList.remove('act');if(ANA.src==='joy'){ANA.on=0;ANA.x=ANA.y=0}}
joy.addEventListener('pointerdown',e=>{if(jp!==null)return;jp=e.pointerId;ANA.src='joy';try{joy.setPointerCapture(e.pointerId)}catch(_){}joy.classList.add('act');joyMove(e);e.preventDefault()});
joy.addEventListener('pointermove',e=>{if(e.pointerId===jp){joyMove(e);e.preventDefault()}});
['pointerup','pointercancel','lostpointercapture'].forEach(t=>joy.addEventListener(t,joyEnd));

/* ---- BUTTON PAD (several fingers allowed, finger can slide between buttons) ---- */
const pads=new Map(),btn={};pad.querySelectorAll('button').forEach(b=>btn[b.dataset.d]=b);
function padHit(e){const s=new Set();for(const d in btn){const r=btn[d].getBoundingClientRect(),m=r.width*.12;
  if(e.clientX>=r.left-m&&e.clientX<=r.right+m&&e.clientY>=r.top-m&&e.clientY<=r.bottom+m)s.add(d)}return s}
function padApply(){const all=new Set();pads.forEach(s=>s.forEach(d=>all.add(d)));
  for(const d in btn)btn[d].classList.toggle('on',all.has(d));
  let x=(all.has('r')?1:0)-(all.has('l')?1:0),y=(all.has('d')?1:0)-(all.has('u')?1:0);
  if(x&&y){x*=.7071;y*=.7071}
  if(all.size){ANA.on=1;ANA.src='pad';ANA.x=x;ANA.y=y}else if(ANA.src==='pad'){ANA.on=0;ANA.x=ANA.y=0}}
pad.addEventListener('pointerdown',e=>{try{pad.setPointerCapture(e.pointerId)}catch(_){}pads.set(e.pointerId,padHit(e));padApply();e.preventDefault()});
pad.addEventListener('pointermove',e=>{if(pads.has(e.pointerId)){pads.set(e.pointerId,padHit(e));padApply();e.preventDefault()}});
['pointerup','pointercancel','lostpointercapture'].forEach(t=>pad.addEventListener(t,e=>{pads.delete(e.pointerId);padApply()}));

function releaseAll(){jp=null;pads.clear();jk.style.transform='translate(-50%,-50%)';joy.classList.remove('act');for(const d in btn)btn[d].classList.remove('on');ANA.on=0;ANA.x=ANA.y=0}

/* ---- apply options (type, size, opacity, side) ---- */
function applyCtl(){
  root.className=(SET.cside=='right'?'R':'L')+' t-'+SET.ctl;
  root.style.setProperty('--cs',SET.cs/100);root.style.setProperty('--co',SET.co/100);
  joy.style.display=SET.ctl=='joy'?'block':'none';pad.style.display=SET.ctl=='pad'?'grid':'none';
}
applyCtl();

/* ---- show only while actually playing (hide behind pause / question / settings / level-complete windows) ---- */
const shown=()=>{const d=id=>{const e=$(id);return e&&getComputedStyle(e).display!=='none'};
  return SET.ctl!=='off'&&$('game').classList.contains('on')&&!!G&&!G.over&&!d('qm')&&!d('pm')&&!d('ld')&&!d('st')&&!d('tut')&&!d('ab')&&!d('lm')};
let was=false;
setInterval(()=>{const s=shown();if(s!==was){was=s;root.classList.toggle('on',s);if(!s)releaseAll()}},80);

/* ---- bigger tool buttons on small screens (top-right pause / help / music / settings) ---- */
function fitTools(){const sc=Math.min(innerWidth/960,innerHeight/640),k=Math.max(1,Math.min(1.8,(TOUCH?.78:.6)/sc));
  document.documentElement.style.setProperty('--tk',TOUCH?k.toFixed(2):'1');
  document.body.classList.toggle('small',sc<.8);
  const rot=$('rot');if(rot)rot.classList.toggle('on',TOUCH&&innerHeight>innerWidth&&innerWidth<700&&!rot.dataset.skip)}
addEventListener('resize',fitTools);addEventListener('orientationchange',()=>setTimeout(fitTools,200));fitTools();
const rb=$('rotgo');if(rb)rb.onclick=()=>{$('rot').dataset.skip=1;fitTools()};

/* ---- auto-pause if the app goes to the background ---- */
document.addEventListener('visibilitychange',()=>{if(document.hidden){releaseAll();if(G&&!G.over&&$('game').classList.contains('on')&&!G.pause&&$('qm').style.display!='flex'&&$('ld').style.display!='flex')$('pb').click()}});

/* ---- fullscreen helper ---- */
const FSOK=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);
const isFS=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
function toggleFS(){const el=document.documentElement;
  if(isFS()){(document.exitFullscreen||document.webkitExitFullscreen).call(document)}
  else{const p=(el.requestFullscreen||el.webkitRequestFullscreen).call(el);const lock=()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(()=>{})}catch(_){}};
    if(p&&p.then)p.then(lock).catch(()=>{});else lock()}
  setTimeout(()=>{if(typeof renderSt=='function'&&$('st').style.display=='flex')renderSt()},350)}

/* ---- Settings panel: add a CONTROLS section (type, size, opacity, side, fullscreen) ---- */
const IJ='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#555"/><circle cx="20" cy="20" r="8" fill="#bbb" stroke="#fff" stroke-width="2"/><path d="M20 4l3 4h-6z M20 36l3-4h-6z M4 20l4-3v6z M36 20l-4-3v6z" fill="#fff"/></svg>';
const IP='<svg viewBox="0 0 40 40"><g fill="none" stroke="#fff" stroke-width="2"><rect x="14" y="2" width="12" height="12" rx="3" fill="#6b7a8c"/><rect x="2" y="15" width="12" height="12" rx="3" fill="#6b7a8c"/><rect x="14" y="15" width="12" height="12" rx="3" fill="#6b7a8c"/><rect x="26" y="15" width="12" height="12" rx="3" fill="#6b7a8c"/></g></svg>';
const IK='<svg viewBox="0 0 40 40"><rect x="3" y="10" width="34" height="20" rx="4" fill="#6b7a8c" stroke="#fff" stroke-width="2"/><path d="M8 16h4M15 16h4M22 16h4M29 16h3M10 23h20" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>';
const _rs=renderSt;
renderSt=function(){_rs.apply(this,arguments);const box=$('stb');if(!box)return;
  const tb=(v,ic,l)=>`<button class="cbtn ${SET.ctl==v?'on':''}" data-c="${v}" aria-pressed="${SET.ctl==v}">${ic}<span>${l}</span></button>`;
  const sd=(v,l)=>`<button class="cbtn sm ${SET.cside==v?'on':''}" data-s="${v}">${l}</button>`;
  const html=`<div class="cset"><div class="chd">🎮 Controls</div>
   <div class="ctyp">${tb('joy',IJ,'Joystick')}${tb('pad',IP,'Buttons')}${tb('off',IK,'Keyboard')}</div>
   <div class="sr"><span>📏 Size</span><input type="range" id="csr" min="60" max="160" step="5" value="${SET.cs}"><b class="cv" id="csv">${SET.cs}%</b></div>
   <div class="sr"><span>👁 Opacity</span><input type="range" id="cor" min="25" max="100" step="5" value="${SET.co}"><b class="cv" id="cov">${SET.co}%</b></div>
   <div class="sr"><span>↔ Position</span><div class="cside">${sd('left','◀ Left')}${sd('right','Right ▶')}</div>${FSOK?`<button class="cbtn sm fsb ${isFS()?'on':''}" id="cfs">⛶ ${isFS()?'Exit full screen':'Full screen'}</button>`:''}</div>
   <div class="chint">${SET.ctl=='joy'?'Drag the round stick in any direction. Push further to run faster.':SET.ctl=='pad'?'Hold the arrow buttons. Use two fingers for diagonals.':'Move with the arrow keys or WASD.'}</div></div>`;
  const h2=box.querySelector('h2');if(h2)h2.insertAdjacentHTML('afterend',html);else box.insertAdjacentHTML('afterbegin',html);
  box.querySelectorAll('.cbtn[data-c]').forEach(b=>b.onclick=()=>{SET.ctl=b.dataset.c;svSet();applyCtl();renderSt()});
  box.querySelectorAll('.cbtn[data-s]').forEach(b=>b.onclick=()=>{SET.cside=b.dataset.s;svSet();applyCtl();renderSt()});
  const cs=$('csr'),co=$('cor');
  cs.oninput=()=>{SET.cs=+cs.value;$('csv').textContent=SET.cs+'%';applyCtl()};cs.onchange=svSet;
  co.oninput=()=>{SET.co=+co.value;$('cov').textContent=SET.co+'%';applyCtl()};co.onchange=svSet;
  const f=$('cfs');if(f)f.onclick=toggleFS};

/* ---- update the in-game "How to play" controls slide ---- */
try{const s=SL.find(x=>x.t=='Controls');if(s)s.d='Drag the <b>joystick</b> or hold the <b>arrow buttons</b> on your phone or tablet. On a computer use the <b>arrow keys</b> or <b>WASD</b>, and <b>P</b> to pause. Change the control type any time in <b>⚙ Settings → Controls</b>.'}catch(_){}
/* ---- AUTO FULL SCREEN: the first tap anywhere puts the game in full screen (landscape). Press the ⛶ button if it ever exits. ---- */
(function(){
  const de=document.documentElement,req=de.requestFullscreen||de.webkitRequestFullscreen||de.msRequestFullscreen;
  const standalone=matchMedia('(display-mode: fullscreen)').matches||matchMedia('(display-mode: standalone)').matches||navigator.standalone;
  const isF=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
  const sync=()=>{document.body.classList.toggle('isfs',isF()||standalone);if(typeof fit=='function')setTimeout(fit,150)};
  if(req&&!standalone)document.body.classList.add('fsok');
  function goFS(){
    if(!req||isF()||standalone)return;
    try{const p=req.call(de,{navigationUI:'hide'});
      const lock=()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(()=>{})}catch(_){}};
      if(p&&p.then)p.then(lock).catch(()=>{});else lock()}catch(_){}
  }
  const b=document.createElement('button');b.id='fsb';b.type='button';b.title='Full screen';b.setAttribute('aria-label','Full screen');b.textContent='⛶';
  b.addEventListener('click',e=>{e.stopPropagation();goFS()});document.body.appendChild(b);
  ['fullscreenchange','webkitfullscreenchange','resize','orientationchange'].forEach(ev=>addEventListener(ev,sync));
  document.addEventListener('fullscreenchange',sync);document.addEventListener('webkitfullscreenchange',sync);
  let tried=0;
  const first=()=>{if(tried++<3)goFS()};
  document.addEventListener('pointerup',first,true);document.addEventListener('touchend',first,true);document.addEventListener('click',first,true);
  sync();
})();
})();


/* ---- TAP ANIMATIONS for touch screens: press = dip, release = the same lift/spin the PC hover gives ---- */
(function(){
  const SEL='.b,.card,.tp,.pc,.gb,#gear,.sc,.vc,.qb,.ar,.ar2,.gx,#tsk,#fsb,#tools button,.corner button,.toc a,.mb,.rb';
  const timers=new WeakMap();
  function find(t){return t&&t.closest?t.closest(SEL):null}
  document.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse')return;
    const el=find(e.target);if(!el)return;
    clearTimeout(timers.get(el));el.classList.remove('hv');el.classList.add('dn');
  },true);
  function up(e){
    if(e.pointerType==='mouse')return;
    document.querySelectorAll('.dn').forEach(el=>{
      el.classList.remove('dn');el.classList.add('hv');
      timers.set(el,setTimeout(()=>el.classList.remove('hv'),520));
    });
  }
  document.addEventListener('pointerup',up,true);
  document.addEventListener('pointercancel',up,true);
})();
