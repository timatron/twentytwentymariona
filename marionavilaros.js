/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

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
  $('.cover-header').fadeIn(3000, function () {
    $('#post-inner').css('display', 'block');
    $('#site-header').fadeIn(3000, function () {
        $('.cover-header').fadeOut(3000, function () {
        $('body').removeClass('stop-scrolling');
      });
    });
  });
});