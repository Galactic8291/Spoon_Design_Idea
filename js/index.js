(function($) {
  const menuButton = $('.menu-button')
  const navigation = $('.navigation')
  const trigger = $('#trigger')

  trigger.click(event => {
    event.preventDefault();
    $([navigation, menuButton]).toggleClass('nav-is-visible')
  })

  $('.children').click(event => {
    event.preventDefault()
    let item = $(event.target)

    if(item.parent('li').hasClass('selected')) {
      item.parent('li').removeClass('selected')
    } else {
      item.parent('li').addClass('selected')
    }
  })
})(jQuery)

