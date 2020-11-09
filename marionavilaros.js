console.log('ready');

function doIntro() {
  var $j = jQuery.noConflict();

  console.log('hellyeah');

  // lock screen
  window.scrollTo(0,0);
  document.body.classList.add('stop-scrolling');

  // do intro
  $j('#site-header').css('display', 'none');
  $j('.cover-header').css('display', 'none');
  $j('#post-inner').css('display', 'none');
  $j('#site-header').css('opacity', '1');
  $j('.cover-header').css('opacity', '1');
  $j('#post-inner').css('opacity', '1');

  $j('.cover-header').fadeIn(2000, function () {
    $j('#site-header').fadeIn(1000, function () {
      $j('#site-header').fadeOut(1000);
      $j('.cover-header').fadeOut(1000, function () {
        $j('#site-header').fadeIn(1000);
        $j('#post-inner').fadeIn(1000, function () {
          $j('body').removeClass('stop-scrolling');
        });
      });
    });  
  });

};


// if ( document.body.classList.contains('template-cover') ) {
//   if (document.cookie.indexOf('visited=true') == -1 || 0 < window.location.href.indexOf('?develop=') ) {
//     // set cookie
//     var thirtydays = 1000*60*60*24*30;
//     var expires = new Date((new Date()).valueOf() +  thirtydays);
//     document.cookie = "visited=true;expires=" +  expires.toUTCString();


   
//   }
// }