/* Implement a function that returns the minimal and maximal value of a list in order. */

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(`getMinMax([2.,-9,45,67, 12]) returns [-9, 67] | ${getMinMax([2.0, -9, 45, 67, 12])}`);
