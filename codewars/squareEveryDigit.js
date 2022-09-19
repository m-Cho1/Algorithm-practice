/**
 * square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

  Note: The function accepts an integer and returns an integer
 */

function squareDigits(num) {
  const nums = String(num);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push((Math.pow(Number(nums[i]), 2)));
  }
  return Number(result.join(''));
}

console.log(`squareDigits(9119) returns 811181 ${squareDigits(9119)}`);
