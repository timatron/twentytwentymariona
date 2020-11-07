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

  #site-header {
    opacity: 0;
  }

  .cover-header {
    opacity: 0;
  }
`);

// lock screen
window.scrollTo(0,0);
document.body.classList.add('stop-scrolling');


jQuery(document).ready(function( $ ) {
  console.log('yo')
  $('.cover-header').fadeIn();
});

window.addEventListener('load', () => {
  const postInner = document.getElementById('post-inner');
  // postInner.scrollIntoView();
});
