function doIntro() {
  if ( document.body.classList.contains('template-cover') ) {
    // lock screen
    window.scrollTo(0,0);
    jQuery('body').addClass('stop-scrolling');

    // do intro
    jQuery('#site-header').css('display', 'none');
    jQuery('#post-inner').css('display', 'none');
    jQuery('#coverall').css('display', 'none');
    jQuery('.cover-branding').css('display', 'none');
    
    jQuery('.cover-branding').fadeIn(1000, 'linear', function () {
      jQuery('#coverall').fadeIn(2000, 'linear', function () {
        jQuery('#coverall').delay(1000).fadeOut(1000, 'linear', function () {
          jQuery('#post-inner').delay(500).fadeIn(1000, 'linear', function () {
            jQuery('.cover-branding').fadeOut(1000, 'linear');
            jQuery('#site-header').fadeIn(1000, 'linear');
            jQuery('body').removeClass('stop-scrolling');
          });
        });
      });
    });
  }
};
