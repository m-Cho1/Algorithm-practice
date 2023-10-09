/**
 * Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.
 */

function noIfsNoButs(a, b) {
  const relations = ['is smaller than', 'is equal to', 'is greater than'];
  return `${a} ${relations[1 + Math.sign(a - b)]} ${b}`;
}

/**
 * using Math.sign() method, it returns a number between -1, 0, and 1 depending on a number.
 * -1 if the number is negative.
 * 0 if the number is zero (or -0; yes, in JavaScript, there's a concept of -0).
 * 1 if the number is positive.
 * using this method, create an array that contains the different sentences and using the result of Math.sign method,
 * the result will return the matching value from the relations array.
 */

console.log(`noIfsNobuts(42,67) will return 42 is smaller than 67 | ${noIfsNoButs(42, 67)}`);
