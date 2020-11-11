function doIntro() {

  if ( document.body.classList.contains('template-cover') ) {

    // if ( document.cookie.indexOf('visited=true') == -1 || 0 < window.location.href.indexOf('?develop=') ) {
    // if ( 0 < window.location.href.indexOf('?develop=') ) {
      // set cookie
      // var thirtydays = 1000*60*60*24*30;
      // var expires = new Date((new Date()).valueOf() +  thirtydays);
      // document.cookie = "visited=true;expires=" +  expires.toUTCString();
     
      // lock screen
      window.scrollTo(0,0);
      jQuery('body').addClass('stop-scrolling');

      // do intro
      jQuery('#site-header').css('display', 'none');
      jQuery('#post-inner').css('display', 'none');
      jQuery('#coverall').css('display', 'none');
      jQuery('.cover-branding').css('display', 'none');
      
      jQuery('.cover-branding').fadeIn(1000, function () {
        jQuery('#coverall').delay(1000).fadeIn(1000, function () {
          jQuery('#coverall').delay(1000).fadeOut(1000, function () {
            jQuery('#post-inner').fadeIn(1000, function () {
              jQuery('.cover-branding').fadeOut(1000);
              jQuery('#site-header').fadeIn(1000);
              jQuery('body').removeClass('stop-scrolling');
            });
          });
        });
      });
     
   
    // }
  }
};

function removeLightboxOnMobile(width) {
  if (width.matches) { 
    // $('.wp-block-image a').prop("onclick", null).off("click");
    console.log( jQuery('.wp-block-image a')[0] );
    console.log( jQuery._data( jQuery('.wp-block-image a')[0], "events" ) );

    // document.body.style.backgroundColor = "yellow";
  } else {
    // document.body.style.backgroundColor = "pink";
  }
}

jQuery(document).ready(function($){
  var width = window.matchMedia("(max-width: 500px)");
  removeLightboxOnMobile(width);
  width.addListener(removeLightboxOnMobile);
});
