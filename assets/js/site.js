// ── Theme toggle ────────────────────────────────────────────────────────
// The initial theme is set in <head> before paint. Here we just wire the
// toggle button and remember the choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>';
  function sync() {
    // Show the icon for the theme you'll switch TO: moon while in light, sun while in dark.
    if (btn) btn.innerHTML = root.getAttribute('data-theme') === 'dark' ? SUN : MOON;
  }
  sync();
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  }
})();

// ── Mobile menu ─────────────────────────────────────────────────────────
(function () {
  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// ── Ambient waveform backdrop (about page hero) ─────────────────────────
(function () {
  var bg = document.getElementById('wavebg');
  if (!bg) return;
  var heights = [30,55,42,70,48,85,60,40,66,52,78,44,90,58,36,72,50,64,46,82,
                 54,38,68,56,88,42,60,48,74,52,36,64,80,44,58];
  heights.forEach(function (h) {
    var b = document.createElement('b');
    b.style.height = h + '%';
    bg.appendChild(b);
  });
})();

// ── Open external links in a new tab ────────────────────────────────────
// Any link to another site (publications, videos, links inside posts) opens
// in a new tab. Internal navigation (relative links) stays in the same tab.
(function () {
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (/^https?:\/\//i.test(href) && a.hostname !== location.hostname) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  });
})();
