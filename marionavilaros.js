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
  }

  .to-the-content-wrapper {
    display: none;
  }

  .stop-scrolling {
    height: 100%;
    overflow: hidden;
  }
`);

// document.body.classList.add('stop-scrolling');

window.addEventListener('load', () => {
  const postInner = document.getElementById('post-inner');
  // postInner.scrollIntoView();
});
