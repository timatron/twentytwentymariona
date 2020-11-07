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
  }
`);


window.addEventListener('load', () => {
  const postInner = document.getElementById('post-inner');
  // postInner.scrollIntoView();
});
