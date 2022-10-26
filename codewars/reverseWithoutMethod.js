/**
 * create a function that reverses an array, without using reverse() methods
 */

function reverseIt(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(`reverseIt([1, false, 14, 'two']) will return ['two', 14, false, 1] | ${reverseIt([1, false, 14, 'two'])}`);
