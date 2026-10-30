(() => {
  const root=document.querySelector('.kv-carousel');if(!root)return;
  const slides=[...root.querySelectorAll('.kv-slide')],dots=[...root.querySelectorAll('[data-slide]')],pause=root.querySelector('[data-kv="pause"]');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let index=0,paused=reduced.matches,timer,hover=false,start=null;
  const stop=()=>clearInterval(timer);
  function schedule(){stop();if(!paused&&!hover&&!document.hidden&&!root.contains(document.activeElement))timer=setInterval(()=>show(index+1),5000);}
  function show(next){index=(next+slides.length)%slides.length;slides.forEach((s,i)=>s.hidden=i!==index);dots.forEach((d,i)=>d.setAttribute('aria-pressed',String(i===index)));}
  function sync(){pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'開始自動輪播':'暫停自動輪播');schedule();}
  root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.slide!==undefined)show(Number(b.dataset.slide));else if(b.dataset.kv==='pause'){paused=!paused;sync();return;}else show(index+(b.dataset.kv==='next'?1:-1));schedule();});
  root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1));schedule();}});
  root.addEventListener('mouseenter',()=>{hover=true;stop();});root.addEventListener('mouseleave',()=>{hover=false;schedule();});root.addEventListener('focusin',stop);root.addEventListener('focusout',()=>setTimeout(schedule,0));document.addEventListener('visibilitychange',schedule);
  root.addEventListener('touchstart',e=>{start={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};stop();},{passive:true});root.addEventListener('touchend',e=>{if(!start)return;const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){show(index+(dx<0?1:-1));root.querySelector('.kv-slide:not([hidden])').addEventListener('click',e=>e.preventDefault(),{once:true});}start=null;schedule();},{passive:true});root.addEventListener('touchcancel',()=>{start=null;schedule();},{passive:true});reduced.addEventListener('change',()=>{paused=reduced.matches;sync();});sync();
})();
