// require jquery
var $hb = $('.js-mobile-trigger');

$hb.on('click', function() {
  if ($hb.hasClass('open')) {
    $hb.removeClass('open');
  } else {
    $hb.addClass('open');
  }
});
