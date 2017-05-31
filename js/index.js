(function($) {
  const htmlWindow = $(window)
        header = $('.top-bar'),
        menuButton = $('.menu-button'),
        navigation = $('.navigation'),
        trigger = $('#trigger'),
        searchForm = $('.search-bar')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const checkSelected = view => { if(view === 'desktop') $('.children.selected').removeClass('selected') }

  const moveSearch = () => {
    const view = checkViewport()

    if(view === 'mobile') {
      searchForm.detach()
      searchForm.removeClass('is-hidden').prependTo(navigation)
    } else {
      searchForm.detach()
      searchForm.insertAfter(header.find('.logo'))
    }

    checkSelected(view)
  }

  htmlWindow.on('resize', () => {
    (!window.requestAnimationFrame) ? setTimeout(moveSearch, 300) : window.requestAnimationFrame(moveSearch);
  })

  trigger.click(event => {
    event.preventDefault();
    $([navigation, menuButton]).toggleClass('nav-is-visible')
  })

  $('.children > a').click(event => {
    const view = checkViewport()

    if(view === 'mobile' || view === 'tablet') {
      event.preventDefault()
      let item = $(event.target)

      if(item.parent('li').hasClass('selected')) {
        item.parent('li').removeClass('selected')
      } else {
        navigation.find('.children.selected').removeClass('selected')
        item.parent('li').addClass('selected')
      }
    }
  })

  navigation.children('ul').menuAim({
    activate: function(row) {
      $(row).addClass('hover')
    },
    deactivate: function(row) {
      $(row).removeClass('hover')
    },
    exitMenu: function() {
      navigation.find('.hover').removeClass('hover')
      return true
    },
    submenuSelector: ".children"
  })

  moveSearch()
})(jQuery)

