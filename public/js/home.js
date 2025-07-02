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