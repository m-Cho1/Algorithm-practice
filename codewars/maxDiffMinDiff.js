/*
  Description:
Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:
arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid.
 */

function maxAndMin(arr1, arr2) {

  const result = [];

  const maxDiff1 = (Math.max(...arr1) - Math.min(...arr2));
  const maxDiff2 = (Math.max(...arr2) - Math.min(...arr1));

  result[0] = Math.max(maxDiff1, maxDiff2);

  // Initialize to Infinity to ensure correct minimum is found
  let minDiff = Infinity;
  let i = 0;
  let j = 0;

  // sorting arr1 and arr2 before setting up while loop,
  // so that the value starts from smallest:
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // calculate the difference between i and j
  // update minDiff when smallest value i - j is found:
  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    minDiff = Math.min(minDiff, diff);

    // if at any point the difference is 0, exit the loop:
    if (diff === 0) {
      break;
    }

    // move to the next element in the arr1 if i is less than j
    // else, move to the next element in arr2:
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  // set the minDiff in the result array
  // return the result
  result[1] = minDiff;
  return result;

}

console.log(`maxAndmin([1,2,3,4,5],[6,7,8,9,10]) returns array of [9,1] | ${maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}`);
