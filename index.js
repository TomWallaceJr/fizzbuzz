// your code here
'use strict';

$(document).ready(function () {

  // when form submitted 
  $('#number-chooser').on('submit', function (e) {
    // prevents page reload on submit
    e.preventDefault();

    // IN case there are already results this clears it
    $('.js-results').empty();
    // finds input value & stores in var
    const inputValue = $(this).find('input').val();
    const jsResults = $('.js-results');

    // if entered negative number return alert message
    if (inputValue < 0) {
      return alert('Number must be postive');
    }

    // loops through each number up to number inputed by user
    for (let i = 1; i <= inputValue; i++) {

      // tests if fizzbuzz and appends jsResult to create div object
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
  }); // end when form submitted function


  // creates the divtag content by detecting if there is a classbane or not
  function createDiv(value, className) {
    if (!className) {
      return `<div class="fizz-buzz-item"><span>${value}</span></div>`;
    }
    return `<div class="fizz-buzz-item ${className}"><span>${value}</span></div>`;
  }

  // function that tests if number is fizz or buzz and returns
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