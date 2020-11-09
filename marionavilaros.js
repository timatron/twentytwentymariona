console.log('ready');

function doIntro() {
  var $j = jQuery.noConflict();

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
      $j('body').addClass('stop-scrolling');

      // do intro
      $j('#site-header').css('display', 'none');
      $j('#coverall').css('display', 'none');
      $j('#post-inner').css('display', 'none');
      $j('#site-header').css('opacity', '1');
      $j('#coverall').css('opacity', '1');
      $j('#post-inner').css('opacity', '1');

      $j('#coverall').fadeIn(2000, function () {
        $j('#site-header').fadeIn(1000, function () {
          // $j('#site-header').fadeOut(1000);
          // $j('#coverall').fadeOut(1000, function () {
          //   $j('#site-header').fadeIn(1000);
          //   $j('#post-inner').fadeIn(1000, function () {
          //     $j('body').removeClass('stop-scrolling');
          //   });
          // });
        });  
      });
    
    // }
  }
};


