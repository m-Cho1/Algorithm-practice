/*
  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

function divisibleBy(numbers, divisor) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(`divisibleBy([2,5,65,33,78,132,5932], 7) will return 132 | ${divisibleBy([2, 5, 63, 33, 78, 132, 593], 12)}`);
