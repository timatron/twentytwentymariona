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
    
    jQuery('.cover-branding').fadeIn(1000, function () {
      jQuery('#coverall').fadeIn(2000, function () {
        jQuery('#coverall').delay(1000).fadeOut(1000, function () {
          jQuery('#post-inner').fadeIn(1000, function () {
            jQuery('.cover-branding').fadeOut(1000);
            jQuery('#site-header').fadeIn(1000);
            jQuery('body').removeClass('stop-scrolling');
          });
        });
      });
    });
  }
};
