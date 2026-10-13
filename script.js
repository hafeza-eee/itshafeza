const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{document.body.classList.toggle('dark');toggle.classList.toggle('on');});
document.getElementById('year').textContent=new Date().getFullYear();
const menuToggle=document.getElementById('menuToggle');
menuToggle?.addEventListener('click',()=>{
 const nav=document.querySelector('.side-nav');
 if(!nav)return;
 nav.classList.toggle('mobile-open');
});
document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click',()=>{
 document.querySelectorAll('.side-nav a').forEach(link=>link.classList.remove('active'));
 a.classList.add('active');
 document.querySelector('.side-nav')?.classList.remove('mobile-open');
}));
