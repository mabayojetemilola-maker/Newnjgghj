document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
});
