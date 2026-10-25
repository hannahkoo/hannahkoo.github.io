(function () {
  // EDIT: 이 비밀번호를 원하는 걸로 바꿔줘. 아주 약한 보호장치라는 거 알고 있음 —
  // 그냥 링크로 우연히 들어오는 사람 막는 용도.
  var PASSWORD = 'hannah2026';
  var STORAGE_KEY = 'portfolio-unlocked';

  function unlock() {
    document.body.classList.add('is-unlocked');
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    unlock();
    return;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('lock-form');
    var input = document.getElementById('lock-input');
    var error = document.getElementById('lock-error');
    var closeBtn = document.getElementById('lock-close');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        unlock();
      } else {
        error.textContent = 'Wrong password — try again.';
        input.value = '';
        input.focus();
      }
    });

    // X button just backs out — takes you home instead of unlocking.
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
    }
  });
})();
