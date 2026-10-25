(function () {
  // ✺ (8pt) → ✦ (4pt) → ✷ (6pt), in order
  var symbols = [
    'M12 1.5 L13.76 7.75 L19.42 4.58 L16.25 10.24 L22.5 12 L16.25 13.76 L19.42 19.42 L13.76 16.25 L12 22.5 L10.24 16.25 L4.58 19.42 L7.75 13.76 L1.5 12 L7.75 10.24 L4.58 4.58 L10.24 7.75 Z',
    'M12 0 L14.69 9.31 L24 12 L14.69 14.69 L12 24 L9.31 14.69 L0 12 L9.31 9.31 Z',
    'M12 1 L14.1 8.36 L21.53 6.5 L16.2 12 L21.53 17.5 L14.1 15.64 L12 23 L9.9 15.64 L2.47 17.5 L7.8 12 L2.47 6.5 L9.9 8.36 Z'
  ];

  var el = document.getElementById('hero-mark');
  var pathEl = document.getElementById('hero-mark-path');
  if (!el || !pathEl) return;

  // Respect reduced-motion: leave the first symbol static, no ticking.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var TICK_MS = 510;   // 15% faster than the original 600ms/tick
  var STEP_DEG = 45;
  var i = 0;
  var angle = 0;

  setInterval(function () {
    i = (i + 1) % symbols.length;
    angle = (angle + STEP_DEG) % 360;
    pathEl.setAttribute('d', symbols[i]);
    el.style.transform = 'rotate(' + angle + 'deg)';
  }, TICK_MS);
})();
