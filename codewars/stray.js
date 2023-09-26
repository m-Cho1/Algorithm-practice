/*
  You are given an odd-length array of integers, in which all of them are the same, except for one single number.

  Complete the method which accepts such an array, and returns that single different number.

  The input array will always be valid! (odd-length >= 3)

  Examples
  [1, 1, 2] ==> 2
  [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

/* For this challenge, I used XOR operator to solve this.
   XOR is exclusive OR operator.
   XOR operator return 1 if the bits are different, and returns 0 if the bits are the same.
   using the XOR operator cancels out the duplicates and only leaves different one.
*/

function stray(numbers) {
  let result = 0;
  for (const num of numbers) {
    result ^= num;
  }
  return result;

}

console.log(`stray([4,2,2,2,2]) returns 4 | ${stray([4, 2, 2, 2, 2])}`);
