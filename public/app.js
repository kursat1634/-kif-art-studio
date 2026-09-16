const $=(s)=>document.querySelector(s);
const menu=$('.menu'), nav=$('#main-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const panel=$('#ai-panel'), fab=$('#ai-fab'), close=$('#ai-close'), form=$('#ai-form'), input=$('#ai-input'), messages=$('#ai-messages');
function toggleAI(open){panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));fab.setAttribute('aria-expanded',String(open));if(open)setTimeout(()=>input.focus(),150)}
fab.addEventListener('click',()=>toggleAI(!panel.classList.contains('open')));close.addEventListener('click',()=>toggleAI(false));document.querySelectorAll('[data-open-ai]').forEach(b=>b.addEventListener('click',()=>toggleAI(true)));
function addMsg(text,who='bot',html=false){const d=document.createElement('div');d.className=`ai-msg ${who}`;if(html)d.innerHTML=text;else d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight;return d}
async function ask(text){const typing=addMsg('KIF AI düşünüyor…','bot');try{const r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});if(!r.ok)throw new Error('AI endpoint unavailable');const data=await r.json();typing.remove();addMsg(data.answer||'Şu an yanıt veremiyorum. Lütfen hello@kifartstudio.com adresinden bize ulaşın.','bot',true)}catch(e){typing.remove();addMsg('Şimdilik canlı AI bağlantısı hazır değil. Projenizi hello@kifartstudio.com adresine gönderin; KIF ekibi sizinle iletişime geçsin. ✦','bot')}}
form.addEventListener('submit',e=>{e.preventDefault();const text=input.value.trim();if(!text)return;addMsg(text,'user');input.value='';ask(text)});
document.querySelectorAll('[data-prompt]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.prompt;input.focus();}));
