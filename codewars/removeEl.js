/**
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */

function removeEveryOther(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(`removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns [1, 3, 5, 7, 9] | ${removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);
