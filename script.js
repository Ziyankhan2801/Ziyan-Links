const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌞";
}

toggleBtn.onclick = () => {
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("light") ? "🌞" : "🌙";
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
};

/* TYPEWRITER */
const texts = [
  "🌟 Just being me!",
  "💻 Web Explorer!",
  "✨ Dream Chaser!",
  "📸 Follow my journey!"
];

let i=0,j=0,del=false;
function typeWriter(){
  const el=document.getElementById("typewriter");
  el.textContent=texts[i].slice(0,j)+(j%2?"":"|");
  if(!del){j++; if(j>texts[i].length+1){del=true;setTimeout(typeWriter,1200);return}}
  else{j--; if(j===0){del=false;i=(i+1)%texts.length}}
  setTimeout(typeWriter,del?40:80);
}
typeWriter();

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
resize();window.onresize=resize;

let dots=Array.from({length:60},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*2,
  dx:(Math.random()-.5)*.4,
  dy:(Math.random()-.5)*.4
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,0.5)";
  dots.forEach(d=>{
    d.x+=d.dx; d.y+=d.dy;
    if(d.x<0||d.x>canvas.width) d.dx*=-1;
    if(d.y<0||d.y>canvas.height) d.dy*=-1;
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
