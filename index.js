// your code here
'use strict';

$(document).ready(function () {

  $('#number-chooser').on('submit', function (e) {
    e.preventDefault();
    const inputValue = $(this).find('input').val();
    const jsResults = $('.js-results');
    if (inputValue < 0) {
      return alert('Number must be postive');
    }


    for (let i = 0; i <= inputValue; i++) {


      if (fizzbuzz(i) === 'fizzbuzz') {
        jsResults.append(createDiv(fizzbuzz(i), 'fizzbuzz'));
      } else if (fizzbuzz(i) === 'fizz') {
        jsResults.append(createDiv(fizzbuzz(i), 'fizz'));
      } else if (fizzbuzz(i) === 'buzz') {
        jsResults.append(createDiv(fizzbuzz(i), 'buzz'));
      } else {
        jsResults.append(createDiv(fizzbuzz(i)));
      }


      //console.log(fizzbuzz(i));
    }
  });

  function createDiv(value, className) {
    if (!className) {
      return `<div class="fizz-buzz-item"><span>${value}</span></div>`;
    }
    return `<div class="fizz-buzz-item ${className}"><span>${value}</span></div>`;
  }


  function fizzbuzz(num) {
    if (num % 15 === 0) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  }
});