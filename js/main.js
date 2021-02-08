'use strict';

const topButton = document.querySelector('.top-button');

$(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 500){
      topButton.classList.remove('hide')
     } else {
      topButton.classList.add('hide')
     }
});