var singleNumber = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  console.log('sortedNums:', sortedNums);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1] || sortedNums[i] === sortedNums[i + 1]) {
      continue;
    } else {
      return sortedNums[i];
    }
  }

};

console.log('singleNumber: ', singleNumber([7, 2, 9, 1, 2, 9, 1]));
