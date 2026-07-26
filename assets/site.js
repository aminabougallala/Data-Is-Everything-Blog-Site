// Mobile nav toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('.burger')) {
    var m = document.querySelector('.mobile-nav');
    if (m) m.classList.toggle('open');
  }
});
