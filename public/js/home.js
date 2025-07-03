// Typewriter effect for tagline
const taglinePhrases = [
  'Building Intelligent Solutions with Code'
];
const typewriterElem = document.getElementById('typewriter');
const cursorElem = document.querySelector('.typewriter-cursor');
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function typeTagline() {
  const phrase = taglinePhrases[phraseIndex];
  if (!isDeleting) {
    typewriterElem.textContent = phrase.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === phrase.length) {
      setTimeout(() => { isDeleting = true; typeTagline(); }, 1800);
      return;
    }
  } else {
    typewriterElem.textContent = phrase.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % taglinePhrases.length;
      setTimeout(typeTagline, 600);
      return;
    }
  }
  setTimeout(typeTagline, isDeleting ? 40 : 80);
}
if (typewriterElem) typeTagline();

// Elegant floating bubble background
const canvas = document.getElementById('hero-bg-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h;
  let bubbles = [];
  const BUBBLE_COUNT = 22; // More bubbles, higher frequency
  const BUBBLE_COLORS = ['rgba(229,9,20,0.18)', 'rgba(255,255,255,0.13)', 'rgba(180,180,200,0.12)'];
  const GLOW_BLUR = 32;

  function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.querySelector('.hero-section').offsetHeight;
    createBubbles();
  }

  function createBubbles() {
    bubbles = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const r = 24 + Math.random() * 32; // Smaller bubbles (half size)
      const x = Math.random() * (w - 2 * r) + r;
      const y = Math.random() * (h - 2 * r) + r;
      const color = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
      const vx = (Math.random() - 0.5) * 0.4;
      const vy = (Math.random() - 0.5) * 0.4;
      bubbles.push({ x, y, r, color, vx, vy, alpha: 0.7 + Math.random() * 0.2 });
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let b of bubbles) {
      // Move
      b.x += b.vx;
      b.y += b.vy;
      // Bounce off edges
      if (b.x - b.r < 0 && b.vx < 0) b.vx *= -1;
      if (b.x + b.r > w && b.vx > 0) b.vx *= -1;
      if (b.y - b.r < 0 && b.vy < 0) b.vy *= -1;
      if (b.y + b.r > h && b.vy > 0) b.vy *= -1;
      // Draw
      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
      ctx.shadowColor = b.color;
      ctx.shadowBlur = GLOW_BLUR;
      ctx.fillStyle = b.color;
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  animate();
} 