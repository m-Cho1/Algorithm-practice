/**
 * Define a function that removes duplicates from an array of numbers and returns it as a result.

  The order of the sequence has to stay the same.
 */

function distinct(a) {
  return [...new Set(a)];
}

console.log(`distinct([4,6,1,3,7,4,3,14,4]) will return [4,6,1,3,7,14] : ${distinct([4, 6, 1, 3, 7, 4, 3, 14, 4])}`);
