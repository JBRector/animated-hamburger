var $hb = document.querySelector('.js-mobile-trigger');

$hb.addEventListener('click', () => {
  if ($hb.classList.includes('open')) {
    $hb.classList.remove('open');
  } else {
    $hb.classList.add('open');
  }
});
