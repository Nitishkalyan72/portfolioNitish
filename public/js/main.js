// Main JS for portfolio UI and transitions

document.addEventListener('DOMContentLoaded', () => {
  // Example: Smooth fade-in
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s';
    document.body.style.opacity = 1;
  }, 100);

  // Add more UI logic here
});

// Header scroll effect: transparent background on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.style.background = 'rgba(20,20,20,0.85)';
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.7)';
  } else {
    header.style.background = 'linear-gradient(90deg, #0F172A 0%, #141414 100%)';
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.7)';
  }
});

// Browse menu toggle for mobile
const browseBtn = document.getElementById('browse-btn');
const browseMenu = document.getElementById('browse-menu');
const browseDropdown = document.getElementById('browse-dropdown');

document.addEventListener('click', (e) => {
  if (browseMenu.contains(e.target)) {
    browseMenu.classList.toggle('open');
  } else {
    browseMenu.classList.remove('open');
  }
});

// Hamburger/mobile menu logic
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle('open');
  mobileOverlay.classList.toggle('open');
});

mobileOverlay.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    closeMobileMenu();
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMobileMenu();
}); 