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


// MAKING A LIST WITH THE TEARS TO CHOOSE FROM
let list = function () {
  let endYear = 1940;
  let startYear = (new Date).getFullYear(); // current year
  let selectedYear = "year";

  let option = '';
  option = '<option>-year-</option>'; // first option

  for (let i = startYear; i >= endYear; --i) {
    let selected = (i === selectedYear ? ' selected' : '');
    option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
  }

  document.getElementById("year").innerHTML = option;
};

document.querySelector('#year').addEventListener('click', list());

// END MAKING A LIST WITH THE TEARS TO CHOOSE FROM


// SHOWING THE DROP-LIST ON CLICKING THE (CHOOSEBY) BUTTON

let dropList = document.getElementById('drop-list');
let chooseBtn = document.getElementById('chooseBtn');

let showList = function () {
  chooseBtn.addEventListener('click', function one() {
    if (dropList.classList.contains("drop-list-show")) {
      dropList.classList.remove("drop-list-show")
    } else {
      dropList.classList.add("drop-list-show")
    }
  });
}
showList();

// END SHOWING THE DROP-LIST ON CLICKING THE (CHOOSEBY) BUTTON