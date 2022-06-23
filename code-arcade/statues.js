// objective: check if each index is in order, and incremented by 1
// example: [6,2,3,8] the output of this array would be 3.
// indicating that 4, 5, 7 is needed in order to fulfill the objective.

// - sort the input array.
// - compare if the sorted array is incremented by 1.
// - if index is not incremented by 1, increment variable num
// - if incremented, don't increment the variable num.
// - return num as a return value.

function consecutive(array) {
  var num = 0;
  var sortedArr = array.sort((a, b) => (a - b)); // indicating sort order
  for (var i = 0; i < sortedArr.length; i++) {
    var index = sortedArr[i + 1] - sortedArr[i];
    if (index > 1) {
      num += index - 1;
    }
  }
  return num;
}

// Alternative option:
// - find the largest number in array.
// - find the smallest number in array.
// - subtract largest with smallest, then subtract with arr.length + 1.
// - return the result.
function fill(array) {
  var result = Math.max(...array) - Math.min(...array) - array.length + 1;
  return result;
}
