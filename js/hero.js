// Hero money-shot: show poster ~2s, then autoplay (muted — browser policy).
// Sound turns on at the first real interaction (scroll / click video / sound button).
(function () {
  var v = document.querySelector('.hero-auto');
  if (!v) return;
  var btn = document.querySelector('.hero-sound');

  v.muted = true;
  function label() { if (btn) btn.textContent = v.muted ? '🔇' : '🔊'; }

  // 2-second poster hold, then play
  setTimeout(function () { v.play().catch(function () {}); }, 2000);

  function unmute() { if (v.muted) { v.muted = false; v.volume = 1; label(); } }

  // First scroll unmutes (impact as the page comes alive)
  window.addEventListener('scroll', function onScroll() {
    unmute();
    window.removeEventListener('scroll', onScroll);
  }, { passive: true });

  // Click the video to toggle sound
  v.addEventListener('click', function () {
    v.muted = !v.muted; if (!v.muted) v.volume = 1; label();
  });

  // Explicit sound button
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      v.muted = !v.muted; if (!v.muted) v.volume = 1; label();
    });
  }
  label();
})();
