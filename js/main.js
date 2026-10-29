document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  // Deterrents against casual video grabbing (not real protection —
  // files are still reachable via the browser's network tab).
  document.querySelectorAll('video').forEach((v) => {
    v.setAttribute('controlsList', 'nodownload noplaybackrate');
    v.setAttribute('oncontextmenu', 'return false');
    v.disablePictureInPicture = true;
    v.addEventListener('contextmenu', (e) => e.preventDefault());
  });
});
