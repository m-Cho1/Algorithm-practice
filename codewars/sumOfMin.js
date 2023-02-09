/*
 * Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
 */

function sumOfMinimums(arr) {
  const min = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    min.push(Math.min(...arr[i]));
  }
  for (let i = 0; i < min.length; i++) {
    sum += min[i];
  }
  return sum;
}

console.log('sumOfMinimums([11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) will return 76 => ', sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));
