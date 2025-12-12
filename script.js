const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

/* ================= THEME ================= */
let particleColor = "rgba(255,255,255,0.5)"; // default (dark)

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌞";
  particleColor = "rgba(0,0,0,0.4)"; // light theme
}

toggleBtn.onclick = () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // 🔥 particle color switch
  particleColor = isLight
    ? "rgba(0,0,0,0.4)"   // light bg
    : "rgba(255,255,255,0.5)"; // dark bg 
};

/* ================= TYPEWRITER ================= */
const texts = [
  "🌟 Just being me!",
  "💻 Web Explorer!",
  "✨ Dream Chaser!",
  "📸 Follow my journey!"
];

let i = 0, j = 0, del = false;
function typeWriter() {
  const el = document.getElementById("typewriter");
  el.textContent = texts[i].slice(0, j) + (j % 2 ? "" : "|");

  if (!del) {
    j++;
    if (j > texts[i].length + 1) {
      del = true;
      setTimeout(typeWriter, 1200);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      del = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(typeWriter, del ? 40 : 80);
}
typeWriter();

/* ================= PARTICLES ================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

let dots = Array.from({ length: 60 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  dx: (Math.random() - 0.5) * 0.4,
  dy: (Math.random() - 0.5) * 0.4
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = particleColor;

  dots.forEach(d => {
    d.x += d.dx;
    d.y += d.dy;

    if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.dy *= -1;

    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();