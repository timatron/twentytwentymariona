console.log('ready');

function doIntro() {
  console.log('hellyeah');

  if ( document.body.classList.contains('template-cover') ) {

    console.log('oh boy');

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
      
      jQuery('#site-header').fadeIn(1000, function () {
        jQuery('#site-header').fadeOut(1000);
        jQuery('#coverall').fadeOut(1000, function () {
          jQuery('#site-header').fadeIn(1000);
          jQuery('#post-inner').fadeIn(1000, function () {
            jQuery('body').removeClass('stop-scrolling');
          });
        });
      });  
   
    // }
  }
};


