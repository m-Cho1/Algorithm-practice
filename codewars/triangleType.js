/**
 * In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
 */

function triangleType(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y);

  if (sides[0] + sides[1] <= sides[2]) {
    return 0;
  }

  const sumSquareSides = Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
  const squareLongSide = Math.pow(sides[2], 2);

  if (sumSquareSides === squareLongSide) {
    return 2;
  } else if (sumSquareSides > squareLongSide) {
    return 1;
  } else {
    return 3;
  }

}

console.log(`triandgleType(6, 7, 4) will return 1 | ${triangleType(6, 7, 4)}`);
