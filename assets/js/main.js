$(window).load(function() {

  var $navMain = $('.main-nav').localScroll();
  var $toggleNavLabel = $('.mobile-nav-toggle-label');
  var $win = $(window);

  $toggleNavLabel.on('click', function(e){
    return true;
  });

  $navMain.find('a').on('click', function(e) {
    var $this = $(this);

    if($this.hasClass('single-page-layout')) {
      e.preventDefault();
      $('.mobile-nav-toggle-box').attr('checked', false);
    }
  });

});
