(function() {
  'use strict';

  const $screen = $('#screen');
  const clear = () => $('#screen').text('');
  const sum = (lo, ro) => lo + ro;
  const divide = (lo, ro) => lo / ro;
  const product = (lo, ro) => lo * ro;
  const subtract = (lo, ro) => lo - ro;

  $('#clear').on('click', () => {
    clear();
  });

  $('#equals').on('click', () => {
    const screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    const regexp = /^(\-?\d+)(\+|\-|x|÷)(\-?\d+)$/;
    const matches = screen.match(regexp);

    if (matches === null) {
      $screen.text('Error');

      return;
    }
    const leftOperand = parseInt(matches[1]);
    const rightOperand = parseInt(matches[3]);
    const operator = matches[2];
    let result;

    if (operator === '+') {
      result = sum(leftOperand, rightOperand);
      $screen.text(result);
    }
    else if (operator === '-') {
      result = subtract(leftOperand, rightOperand);
      $screen.text(result);
    }
    else if (operator === 'x') {
      result = product(leftOperand, rightOperand);
      $screen.text(result);
    }
    else if (operator === '÷') {
      if (rightOperand === 0) {
        $screen.text('Error');
        return;
      }
      result = divide(leftOperand, rightOperand);
      $screen.text(result);
    }
    const nextScreen = result.toString();
    $screen.text(nextScreen);
  });

  $('.buttons').on('click', 'span', (event) => {
    const screen = $screen.text();
    if (screen === 'Error') {
      return;
    }
    const nextScreen = screen + event.target.textContent;
    $screen.text(nextScreen);
  });
})();
