/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

if ( document.body.classList.contains('template-cover') ) {

  if (document.cookie.indexOf('visited=true') == -1 || 0 < window.location.href.indexOf('?develop=') ) {
    var thirtydays = 1000*60*60*24*30;
    var expires = new Date((new Date()).valueOf() +  thirtydays);
    document.cookie = "visited=true;expires=" +  expires.toUTCString();

    addStyle(`
      #post-inner {
        position: absolute;
        top: 0;
        z-index: -1;
        display:none;
      }

      .to-the-content-wrapper {
        display: none;
      }

      .stop-scrolling {
        height: 100%;
        overflow: hidden;
      }

      .cover-header {
        display: none;
      }
    `);

    // lock screen
    window.scrollTo(0,0);
    document.body.classList.add('stop-scrolling');

    jQuery(document).ready(function( $ ) {
      $('#site-header').css('display', 'none');
      $('#site-header').css('-webkit-animation', 'none');
      $('#site-header').css('-moz-animation', 'none');
      $('#site-header').css('-ms-animation', 'none');
      $('#site-header').css('-o-animation', 'none');
      $('#site-header').css('animation', 'none');

      $('#site-header').fadeIn(2000);
      $('.cover-header').fadeIn(2000, function () {
        $('#site-header').fadeOut(1000);
        $('.cover-header').fadeOut(1000, function () {
          $('#site-header').fadeIn(1000);
          $('#post-inner').fadeIn(1000, function () {
            $('body').removeClass('stop-scrolling');
          });
        });
      });
    });
  } else {
    addStyle(`
      #post-inner {
        position: absolute;
        top: 0;
        z-index: 0;
      }

      .to-the-content-wrapper {
        display: none;
      }

      .cover-header {
        display: none;
      }

      #site-header {
        display: block;
      }
    `);
  }
}