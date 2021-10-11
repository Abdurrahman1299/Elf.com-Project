// MAKING A SCROLL TO TOP BUTTON
let button = document.getElementById('top');
window.onscroll = function () {
  'use strict';
  if (window.pageYOffset >= 600) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};
// THE FUNCTION TO MAKE THE BUTTON GO TO TOP OF PAGE
button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
// END MAKING A SCROLL TO TOP BUTTON

