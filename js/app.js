(function () {
  'use strict';
  let result = 0;
  let previousEntry = 0;
  let operation = null;
  $('.buttons').on('click', 'span', (event) => {
    const $event = $(event.target)
    console.log($event.hasClass('operator'))
    if ($event.hasClass('operator')) {
      operation = $event.text()
      console.log(operation)
      return operation
    }
    $('#screen').append(parseInt($event.text()));
    // console.log(result)
  })

  const sum = ((operation) => {
    if (operation === '+') {
      return a + b;
    }
  })

  const divide = ((operation) => {
    if (operation === '÷') {
      return a / b;
    }
  })

  const product = ((operation) => {
    if (operation === '*') {
      return a * b;
    }
  })

  const subtract = ((operation) => {
    if (operation === '-') {
      return a - b;
    }
  })
})();
