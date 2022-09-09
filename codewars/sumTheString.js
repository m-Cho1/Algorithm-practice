/**
 * Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
 * Example: (Input1, Input2 -->Output)
 */

function sumStr(a, b) {
  if (a === '' && b === '') return '0';
  let result = 0;
  result = Number(a) + Number(b);
  return result.toString();
}

console.log('sumStr(3, 54) = 57', sumStr('3', '54'));
