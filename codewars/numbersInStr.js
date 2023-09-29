/**
 * compare the number groupings and return the largest number. Numbers will not have leading zeros.

 * For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
 */

/*
  - use for of loop to go through each character from string
  - if character is a number, accumulate the number to currentNum variable
  - if character is not a number, then add the currentNum value to numbers array
  - after for of loop, check if there is left behind number from currentNum.
  - return the biggest number from numbers array
*/

function solve(str) {
  const numbers = [];
  let currentNum = '';

  for (const char of str) {
    if (char >= '0' && char <= '9') {
      currentNum += char;
    } else if (currentNum !== '') {
      numbers.push(Number(currentNum));
      currentNum = '';
    }
  }
  if (currentNum !== '') {
    numbers.push(Number(currentNum));
  }

  return (Math.max(...numbers));

}

console.log(`solve('hello1this45is93a23string') returns 93 | ${solve('hello1this45is93a23string')}`);
