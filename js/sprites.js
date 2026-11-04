/* =====================================================================
   PATINTERO SPRITE PACK (patintero_pixel_pack_v2): 64x64 frames, 8 frames per animation, 10 fps, feet at (32,59).
   Sheets live in assets/sprites/. Each frame is cached once per size so it stays crisp (integer upscale, then smooth downscale).
   ===================================================================== */
const SPK={
 runner_blue:{idle:'assets/sprites/runner_blue__idle.png',walk:'assets/sprites/runner_blue__walk.png',run:'assets/sprites/runner_blue__run.png',sneak:'assets/sprites/runner_blue__sneak.png',dodge_juke:'assets/sprites/runner_blue__dodge_juke.png',tagged:'assets/sprites/runner_blue__tagged.png',celebrate:'assets/sprites/runner_blue__celebrate.png',guard_ready:'assets/sprites/runner_blue__guard_ready.png',guard_shuffle_right:'assets/sprites/runner_blue__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/runner_blue__guard_shuffle_left.png',guard_line_slide:'assets/sprites/runner_blue__guard_line_slide.png',guard_tag_right:'assets/sprites/runner_blue__guard_tag_right.png',guard_tag_left:'assets/sprites/runner_blue__guard_tag_left.png'},
 runner_red:{idle:'assets/sprites/runner_red__idle.png',walk:'assets/sprites/runner_red__walk.png',run:'assets/sprites/runner_red__run.png',sneak:'assets/sprites/runner_red__sneak.png',dodge_juke:'assets/sprites/runner_red__dodge_juke.png',tagged:'assets/sprites/runner_red__tagged.png',celebrate:'assets/sprites/runner_red__celebrate.png',guard_ready:'assets/sprites/runner_red__guard_ready.png',guard_shuffle_right:'assets/sprites/runner_red__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/runner_red__guard_shuffle_left.png',guard_line_slide:'assets/sprites/runner_red__guard_line_slide.png',guard_tag_right:'assets/sprites/runner_red__guard_tag_right.png',guard_tag_left:'assets/sprites/runner_red__guard_tag_left.png'},
 runner_yellow:{idle:'assets/sprites/runner_yellow__idle.png',walk:'assets/sprites/runner_yellow__walk.png',run:'assets/sprites/runner_yellow__run.png',sneak:'assets/sprites/runner_yellow__sneak.png',dodge_juke:'assets/sprites/runner_yellow__dodge_juke.png',tagged:'assets/sprites/runner_yellow__tagged.png',celebrate:'assets/sprites/runner_yellow__celebrate.png',guard_ready:'assets/sprites/runner_yellow__guard_ready.png',guard_shuffle_right:'assets/sprites/runner_yellow__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/runner_yellow__guard_shuffle_left.png',guard_line_slide:'assets/sprites/runner_yellow__guard_line_slide.png',guard_tag_right:'assets/sprites/runner_yellow__guard_tag_right.png',guard_tag_left:'assets/sprites/runner_yellow__guard_tag_left.png'},
 guard_green:{idle:'assets/sprites/guard_green__idle.png',walk:'assets/sprites/guard_green__walk.png',run:'assets/sprites/guard_green__run.png',sneak:'assets/sprites/guard_green__sneak.png',dodge_juke:'assets/sprites/guard_green__dodge_juke.png',tagged:'assets/sprites/guard_green__tagged.png',celebrate:'assets/sprites/guard_green__celebrate.png',guard_ready:'assets/sprites/guard_green__guard_ready.png',guard_shuffle_right:'assets/sprites/guard_green__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/guard_green__guard_shuffle_left.png',guard_line_slide:'assets/sprites/guard_green__guard_line_slide.png',guard_tag_right:'assets/sprites/guard_green__guard_tag_right.png',guard_tag_left:'assets/sprites/guard_green__guard_tag_left.png'},
 guard_purple:{idle:'assets/sprites/guard_purple__idle.png',walk:'assets/sprites/guard_purple__walk.png',run:'assets/sprites/guard_purple__run.png',sneak:'assets/sprites/guard_purple__sneak.png',dodge_juke:'assets/sprites/guard_purple__dodge_juke.png',tagged:'assets/sprites/guard_purple__tagged.png',celebrate:'assets/sprites/guard_purple__celebrate.png',guard_ready:'assets/sprites/guard_purple__guard_ready.png',guard_shuffle_right:'assets/sprites/guard_purple__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/guard_purple__guard_shuffle_left.png',guard_line_slide:'assets/sprites/guard_purple__guard_line_slide.png',guard_tag_right:'assets/sprites/guard_purple__guard_tag_right.png',guard_tag_left:'assets/sprites/guard_purple__guard_tag_left.png'},
 guard_orange:{idle:'assets/sprites/guard_orange__idle.png',walk:'assets/sprites/guard_orange__walk.png',run:'assets/sprites/guard_orange__run.png',sneak:'assets/sprites/guard_orange__sneak.png',dodge_juke:'assets/sprites/guard_orange__dodge_juke.png',tagged:'assets/sprites/guard_orange__tagged.png',celebrate:'assets/sprites/guard_orange__celebrate.png',guard_ready:'assets/sprites/guard_orange__guard_ready.png',guard_shuffle_right:'assets/sprites/guard_orange__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/guard_orange__guard_shuffle_left.png',guard_line_slide:'assets/sprites/guard_orange__guard_line_slide.png',guard_tag_right:'assets/sprites/guard_orange__guard_tag_right.png',guard_tag_left:'assets/sprites/guard_orange__guard_tag_left.png'},
 guard_teal:{idle:'assets/sprites/guard_teal__idle.png',walk:'assets/sprites/guard_teal__walk.png',run:'assets/sprites/guard_teal__run.png',sneak:'assets/sprites/guard_teal__sneak.png',dodge_juke:'assets/sprites/guard_teal__dodge_juke.png',tagged:'assets/sprites/guard_teal__tagged.png',celebrate:'assets/sprites/guard_teal__celebrate.png',guard_ready:'assets/sprites/guard_teal__guard_ready.png',guard_shuffle_right:'assets/sprites/guard_teal__guard_shuffle_right.png',guard_shuffle_left:'assets/sprites/guard_teal__guard_shuffle_left.png',guard_line_slide:'assets/sprites/guard_teal__guard_line_slide.png',guard_tag_right:'assets/sprites/guard_teal__guard_tag_right.png',guard_tag_left:'assets/sprites/guard_teal__guard_tag_left.png'}
};
/* one shared scratch canvas for building cached sprite bitmaps (avoids allocating a big canvas on every cache miss) */
const _SCR=document.createElement('canvas'),_SCX=_SCR.getContext('2d');
function scratch(w,h){if(_SCR.width!==w||_SCR.height!==h){_SCR.width=w;_SCR.height=h}else _SCX.clearRect(0,0,w,h);_SCX.imageSmoothingEnabled=false;return _SCX}
const SPI={};for(const c in SPK)for(const a in SPK[c]){const i=new Image();i.src=SPK[c][a];SPI[c+'|'+a]=i}
const SPROW={south:0,east:1,north:2,west:3},SP4={idle:1,walk:1,run:1,sneak:1,dodge_juke:1},SPC={},SPSC=2.1,SPTOP=46;
let SPN=0;   /* bitmap cache size (cleared when it grows too big, keeps phones from running out of memory) */
/* draw a cached bitmap, or (when the per-frame build budget is used up) straight from the sheet so a frame never stalls */
function bmPut(b,x,y,w,h){if(b.im)cx.drawImage(b.im,b.sx,b.sy,b.sw,b.sh,x,y,w,h);else cx.drawImage(b,x,y,w,h)}
function bmGet(cache,key,im,sx,sy,sw,sh,sb){let o=cache[key];if(o)return o;
 if(SPB>=3)return{im,sx,sy,sw,sh,sb,width:Math.round(sw*sb),height:Math.round(sh*sb)};
 SPB++;if(++SPN>1400){for(const c of [SPC,DEFC,FANC])for(const k in c)delete c[k];SPN=0}
 const n=Math.max(1,Math.ceil(sb)),g=scratch(sw*n,sh*n);g.drawImage(im,sx,sy,sw,sh,0,0,sw*n,sh*n);
 o=document.createElement('canvas');o.width=Math.round(sw*sb);o.height=Math.round(sh*sb);const h=o.getContext('2d');h.imageSmoothingEnabled=true;h.imageSmoothingQuality='high';h.drawImage(_SCR,0,0,sw*n,sh*n,0,0,o.width,o.height);o.sb=sb;return cache[key]=o}
function spBitmap(c,a,row,fr,s){const im=SPI[c+'|'+a];if(!im||!im.complete||!im.naturalWidth)return null;
 const sb=Math.max(.5,Math.round(s*RS*8)/8);return bmGet(SPC,c+a+row+fr+'_'+sb,im,fr*64,row*64,64,64,sb)}
/* draw a character with its FEET at logical (X,Y). S = perspective scale (far = small). fr = frame number (any number, wraps 0-7). */
function spDraw(X,Y,S,c,a,dir,fr,noShadow){if(!noShadow){cx.fillStyle='rgba(0,0,0,.28)';cx.beginPath();cx.ellipse(X,Y+.4,6.2*S,1.9*S,0,0,7);cx.fill()}
 const row=SP4[a]?SPROW[dir]:(dir=='north'?1:0),f=((Math.floor(fr)%8)+8)%8,b=spBitmap(c,a,row==null?0:row,f,SPSC*S);if(!b)return;
 const KR=K*RS,sb=b.sb,dx=Math.round(X*KR-32*sb),dy=Math.round(Y*KR-59*sb);bmPut(b,dx/KR,dy/KR,b.width/KR,b.height/KR)}


/* =====================================================================
   DEFENDER PACK (patintero_defender_animations): 5 guards, each sheet = 8 columns x 25 rows of 64x64 frames.
   rows: ready 0-7 (6 frames) | shuffle 8-15 | lunge 16-23 | turn_guard 24 (spins through all directions).
   direction order in every block: south, south-east, east, north-east, north, north-west, west, south-west.
   ===================================================================== */
const DEF={boy_red:'assets/sprites/def_boy_red.png',boy_green:'assets/sprites/def_boy_green.png',girl_red:'assets/sprites/def_girl_red.png',girl_green:'assets/sprites/def_girl_green.png',girl_purple:'assets/sprites/def_girl_purple.png'};
const DEFPOOL=['boy_red','girl_green','boy_green','girl_red','girl_purple'],DEF_TURN=34,DEFI={},DEFC={},DEFROW={ready:0,shuffle:8,lunge:16,turn:24},DEFN={ready:6,shuffle:8,lunge:8,turn:8},DEFSC=SPSC*.93;
for(const k in DEF){const i=new Image();i.src=DEF[k];DEFI[k]=i}
/* which of the 8 directions points from a guard toward (dx,dy)? 0 = south (down the screen) */
const faceIdx=(dx,dy)=>((Math.round(Math.atan2(dx,dy)/(Math.PI/4))%8)+8)%8;
function defBitmap(c,an,dir,fr,s){const im=DEFI[c];if(!im||!im.complete||!im.naturalWidth)return null;
 const row=DEFROW[an]+(an=='turn'?0:dir),sb=Math.max(.5,Math.round(s*RS*8)/8);return bmGet(DEFC,c+an+row+'_'+fr+'_'+sb,im,fr*64,row*64,64,64,sb)}
/* draws one defender at its feet position; returns false if the sheet is not loaded yet (the old sprite is used then) */
function defGuard(g,q,p,now){
 if(!g.dc)return false;const im=DEFI[g.dc];if(!im||!im.complete||!im.naturalWidth)return false;
 const dxp=p.x-g.x,dyp=p.y-g.y;let face=faceIdx(dxp,dyp),an,fr;
 if(g.tn>0){an='turn';fr=Math.min(7,Math.floor((1-g.tn/DEF_TURN)*8))}                       /* turn_guard: spin to watch the runner / the other side */
 else if(g.b>0){an='lunge';face=faceIdx(g.ld*Math.max(30,Math.abs(dxp)),dyp*.7);fr=Math.min(7,Math.floor((1-g.b/9)*8))}   /* lunge: reach out toward the runner */
 else if(g.mv){an='shuffle';fr=g.af;                                                       /* shuffle: slide along the line */
  if(g.k=='v')face=g.vel<0?4:0;
  else if(Math.abs(dxp)>1.6*Math.abs(dyp))face=g.vel>=0?2:6;else face=dyp>=0?0:4}
 else{an='ready';fr=now/(g.w>0?170:125)+g.x*.1;if(an=='ready')fr=((Math.floor(fr)%6)+6)%6}   /* ready: guard stance, watching the runner */
 const b=defBitmap(g.dc,an,face,((Math.floor(fr)%DEFN[an])+DEFN[an])%DEFN[an],DEFSC*q.S);if(!b)return false;
 cx.fillStyle='rgba(0,0,0,.28)';cx.beginPath();cx.ellipse(q.X,q.Y+.4,6.2*q.S,1.9*q.S,0,0,7);cx.fill();
 const KR=K*RS,sb=b.sb,dx=Math.round(q.X*KR-32*sb),dy=Math.round(q.Y*KR-54.5*sb);bmPut(b,dx/KR,dy/KR,b.width/KR,b.height/KR);return true}


/* =====================================================================
   SUPPORTING CHARACTERS (the crowd on the sides + the waiting teammates)
   5 kids x 8 directions (row 0) plus cheering poses facing the camera / away from it:
   rows: 0 idle | 1 both arms up | 2 left arm up | 3 right arm up | 4 "yes!" fist pump.   cell = 48 x 62 px, feet at y = 59.
   The movement itself (hops, squash & stretch, sway, confetti, shout bubbles) is animated in fanDraw() below.
   ===================================================================== */
const FANK=['fan_headband','fan_neigh','fan_boy','fan_girl','fan_pigtails'],FANI={},FANC={},FCW=48,FCH=62;
for(const k of FANK){const i=new Image();i.src={fan_headband:'assets/sprites/fan_headband.png',fan_neigh:'assets/sprites/fan_neigh.png',fan_boy:'assets/sprites/fan_boy.png',fan_girl:'assets/sprites/fan_girl.png',fan_pigtails:'assets/sprites/fan_pigtails.png'}[k];FANI[k]=i}
const FWORDS=['GO!','TAKBO!','GALING!','YEAH!','SIGE!','KAYA MO!','HOY!','ASTIG!'],FCONF=['#ffd43b','#ff6b6b','#4dd0e1','#9ccc65','#ffffff'],FSEQ=[1,4,2,3];
function fanBmp(k,col,row,s){const im=FANI[k];if(!im||!im.complete||!im.naturalWidth)return null;
 const sb=Math.max(.5,Math.round(s*RS*8)/8);return bmGet(FANC,k+col+'_'+row+'_'+sb,im,col*FCW,row*FCH,FCW,FCH,sb)}
function fanBubble(t,x,y,red){cx.save();cx.font='bold 5px Fredoka,MatFB,sans-serif';const w=cx.measureText(t).width+3.2;cx.fillStyle='#fff';cx.strokeStyle=red?'#d62839':'#1b4fa8';cx.lineWidth=.5;
 cx.beginPath();cx.roundRect?cx.roundRect(x-w/2,y-6,w,6.6,2):cx.rect(x-w/2,y-6,w,6.6);cx.fill();cx.stroke();
 cx.beginPath();cx.moveTo(x-1,y+.6);cx.lineTo(x+1,y+.6);cx.lineTo(x,y+2.2);cx.closePath();cx.fillStyle='#fff';cx.fill();cx.fillStyle=red?'#d62839':'#1b4fa8';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(t,x,y-2.6);cx.restore()}
/* only ONE supporter shouts at a time: a rotating, pseudo-random pick every few seconds (a bit more often on a score) */
function fanTalker(i,now,big){const per=big?1800:3600,slot=Math.floor(now/per),n=(typeof FANS!='undefined'&&FANS.length)||10;return i==(Math.imul(slot+7,2654435761)>>>0)%n&&(now%per)<per*.42}
/* draws one supporter. (X,Y) = feet position, S = perspective scale, base = the way this supporter normally faces. returns false until the sheet has loaded */
function fanDraw(f,i,X,Y,S,now,base){
 const k=FANK[i%5],G_=G;if(!G_||!G_.p)return false;
 const ph=(i*1.37)%1,tp=.92+(i%4)*.07,p=G_.p,dxp=p.x-f.x,dyp=p.y-f.y,dist=Math.hypot(dxp,dyp);
 const op=G_.oops>0,ch=G_.cheer>0,ju=G_.juke>0,lunge=G_.tg&&G_.tg.some(t=>t.b>0),moving=Math.hypot(p.vx||0,p.vy||0)>.25;
 const mode=ch?'cheer':ju?'whoa':(moving&&dist<100)||(lunge&&dist<120)?'watch':'idle';
 const baseCol=({south:0,east:2,north:4,west:6})[base||f.dir]??0,front=(base||f.dir)=='north'?4:0;
 let col=faceIdx(dxp,dyp),row=0,h=0,sx=1,sy=1,tilt=0,ox=0;
 if(mode=='idle'||mode=='watch'||mode=='cheer'){                       /* everyone cheers on their OWN rhythm: personal burst timing + personal style, calm in between */
  const big=mode=='cheer',T=3400+(i*977)%3300,cp=((now+(i*1313)%5000)%T)/T,bf=(.22+((i*7)%5)*.05)+(mode=='watch'?.1:0)+(big?.35:0),talk=0,
   on=talk||cp<bf,e=talk?1:on?Math.sin(Math.PI*cp/bf):0,sty=i%4,hp=560+(i*53)%260,hu=(now/hp+ph)%1;
  col=front;ox=Math.sin(now/(900+i*37)+i*1.9)*.3;sy=1+Math.sin(now/(620+i*41)+i)*.012;
  if(on){const A=big?3:2.1;
   if(sty==0){h=A*4*hu*(1-hu)*e;row=FSEQ[Math.floor(now/(300+i*20)+i)%4]}                 /* hopper */
   else if(sty==1){row=(Math.floor(now/(480+i*30)+i)%2)?2:3;h=big?A*.9*4*hu*(1-hu)*e:0}              /* arm waver */
   else if(sty==2){row=4;h=A*.5*4*hu*(1-hu)*e;tilt=Math.sin(now/260+i)*.03}               /* fist pumper */
   else{row=1;h=0;tilt=Math.sin(now/(520+i*30)+i)*.05*e}                                   /* arms-up swayer */
   if(h>.3){sy=1.04;sx=.98}}}
 else if(mode=='whoa'){col=front;const u=Math.min(1,1-G_.juke/24);h=3.2*4*u*(1-u);row=1;sy=1.05;sx=.97}

 if(row>0&&col!=0&&col!=4)row=0;
 const b=fanBmp(k,col,row,SPSC*S);if(!b)return false;const sb=b.sb;
 const gs=Math.max(.55,1-h/14);cx.fillStyle='rgba(0,0,0,.28)';cx.beginPath();cx.ellipse(X+ox,Y+.4,6.2*S*gs,1.9*S*gs,0,0,7);cx.fill();
 cx.save();cx.translate(X+ox,Y-h);cx.rotate(tilt);cx.scale(sx,sy);bmPut(b,-24*sb/(K*RS),-59.5*sb/(K*RS),b.width/(K*RS),b.height/(K*RS));cx.restore();
 const top=Y-h-25*S;
 if(mode=='cheer'||mode=='watch'||mode=='idle'){                                                                       /* confetti only on a score + one shout at a time */
  if(mode=='cheer'&&i%5==0)for(let j=0;j<2;j++){const t=(now/38+j*17+i*5)%24;cx.fillStyle=FCONF[(i+j)%5];cx.fillRect(X+Math.sin(now/240+j*2.1+i)*6-.5,top+8-t*.5,1.1,1.1)}}

 return true}
