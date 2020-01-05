'use strict'


// reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_sectionss/Math/random

const randomRGB = () => Math.floor(Math.random() * 256);

const randomA = () => Math.random();

// to detect window width change referenced
// https://stackoverflow.com/questions/10750603/detect-a-window-width-change-but-not-a-height-change


let width = $(window).width();
$(window).on('resize', function() {
  if ($(window).width() !== width) {
    // console.log('randomA:', randomA());
    $('#boxA').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    // console.log($('#boxA').css('background-color'));
    $('#boxB').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxC').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxD').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxE').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxF').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxG').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxH').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);
    $('#boxI').css('background-color',
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomA()}`);

  }
});
