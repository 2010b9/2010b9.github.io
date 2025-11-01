import {
  initializeTypewriter,
  initializeGranim,
} from '../components/common.js';

// Hero section and typewriter removed for better performance
// initializeTypewriter(
//   'app',
//   `These are just some thoughts that I have had in my head for a while now.
//   I hope you enjoy reading them as much as I enjoyed writing them.`
// );
// initializeGranim('#canvas-image-blending', '../assets/walpaper.png');

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const topnav = document.getElementById('topnav');

if (mobileMenuToggle && topnav) {
  const container = topnav.closest('.container');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    topnav.classList.toggle('active');

    // Add/remove class to container to adjust spacing
    if (container) {
      if (topnav.classList.contains('active')) {
        container.classList.add('menu-open');
      } else {
        container.classList.remove('menu-open');
      }
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !topnav.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      topnav.classList.remove('active');
      if (container) {
        container.classList.remove('menu-open');
      }
    }
  });

  // Close menu when clicking a nav link
  const navLinks = topnav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      topnav.classList.remove('active');
      if (container) {
        container.classList.remove('menu-open');
      }
    });
  });
}
