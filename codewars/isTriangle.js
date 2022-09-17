/**
 * Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

console.log(`isTriangle(4, 5, 6) returns true: ${isTriangle(4, 5, 6)}`);
console.log(`isTriangle(5,4,1) returns false: ${isTriangle(5, 4, 1)}`);
