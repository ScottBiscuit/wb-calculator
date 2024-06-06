//add +
function add(num1, num2) {
return num1 + num2; 
}

//subtract -
function subtract(num1, num2) {
return num1 - num2; 
}

//multiply *
function multiply(num1, num2) {
return num1 * num2; 
}

//divide /
function divide(num1, num2) {
return num1 / num2; 
}

//power ^ 
function power(num1, num2) {
return num1 ** num2; 
}

//mod (remainder) %
function mod(num1, num2) {
return num1 + num2; 
}

//sqrt sqrt
function sqrt(num1, num2) {
return num1 ** 0.5;
}


function calculate(expression) {

  const tokens = expression.split(' ');

  const num1 = tokens[0];
  const operator = tokens[1];
  const num2 = tokens[2];

  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
  if (operator === '^') {
    return power(num1, num2);
  }
  if (operator === '%') {
    return mod(num1, num2);
  }
  if (operator === 'sqrt') {
    return sqrt(num1);
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
