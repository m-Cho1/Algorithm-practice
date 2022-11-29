/*
  * Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

  * Example
    input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
    ouptut: 5
    The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(array) {
  if (array.length === 0) {
    return 0;
  }
  let count = 0;
  let frequentCount = 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
      if (frequentCount < count) {
        frequentCount = count;
      }
    }
    count = 0;
  }
  return frequentCount;
}
