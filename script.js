const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggleBtn.textContent = '🌞';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  if (body.classList.contains('light')) {
    toggleBtn.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
const texts = [
  "🌟 Just being me!",
  "💻 Web Explorer!",
  "✨ Dream Chaser!",
  "📸 Follow my journey!"
];

let i = 0, j = 0, current = '', isDeleting = false;

function typeWriter() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  current = texts[i];
  element.textContent = current.substring(0, j) + (j % 2 === 0 ? "|" : "");

  if (!isDeleting) {
    j++;
    if (j === current.length + 1) {
      isDeleting = true;
      setTimeout(typeWriter, 1400);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 40 : 80);
}
typeWriter();
