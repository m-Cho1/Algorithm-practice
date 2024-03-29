/**
 * We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
 */

const arr = N => {
  const newArr = [];
  for (let i = 0; i < N; i++) {
    newArr.push(i);
  }
  return newArr;
};

console.log(`arr(5) will return array of [0,1,2,3,4] | ${arr(5)}`);
