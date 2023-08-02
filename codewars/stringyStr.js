/**
 * write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
 */

function stringy(size) {

  let result = '';

  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      result += '0';
    } else if (i % 2 !== 0) {
      result += '1';
    }
  }
  return result;
}

console.log(`stringy(5) will return string of 10101 | ${stringy(5)}`);
console.log(`typeof stringy(5) : ${typeof stringy(5)}`);
