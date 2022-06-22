// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
// 7 and 3 produce the largest product.

function findLargest(inputArray) {
  var largest = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > largest) {
      largest = inputArray[i] * inputArray[i + 1];
    }
  }
  return 'The largest adjacent element product is: ' + largest;
}

findLargest([-1, 3, 5, 22, 7, 11, -4]);
