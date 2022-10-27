/*
 * Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
 */

function squares(x, n) {
  if (n <= 0) {
    return [];
  }
  const squared = [];
  squared.push(x);
  for (let i = 1; i <= n - 1; i++) {
    const newSquared = Math.pow(x, 2);
    x = newSquared;
    squared.push(newSquared);
  }
  return squared;
}

console.log(`squares(2, 5) will return [2, 4, 16, 256, 65536] | ${squares(2, 5)}`);
