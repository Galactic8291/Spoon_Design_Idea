(function($) {
  const menuButton = $('.menu-button');
  const trigger = $('#trigger');

  trigger.click((event) => {
    event.preventDefault();

    $([menuButton, trigger]).toggleClass('nav-is-visible');
  });
})(jQuery);
