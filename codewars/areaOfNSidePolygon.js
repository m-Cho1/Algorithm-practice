/**
 * Write the following function:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

Input :: Output Examples

areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042
 */

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {

  const angle = (360 / numberOfSides) / 2;
  const longerTriSide = circleRadius * Math.sin(angle);
  const shorterTriSide = circleRadius * Math.cos(angle);
  const areaOfPolygon = (1 / 2) * longerTriSide * shorterTriSide * numberOfSides;
  return areaOfPolygon.toFixed(3);
}

console.log(`areaOfPolygonInsideCircle(8, 5) will return 20.306 | ${areaOfPolygonInsideCircle(8, 5)}`);

/**
 * first, find the each triangle of the n-sided polygon by divinding 360 degrees by numberOfSides, then by 2
 * to find the area of the each angle. Using the circleRadius, a right triangle's area can be calculated.
 * Then, using the central angle found from above step, find the first side of the triangle, the longer side, using sin
 * Then, using the central angle, calculate the shorter side, using cos
 * Both of the sin and cos formula is using circleRadius as a hypotenuse value
 * Then, the area of triangle can be calculated.
 * multiply all found values by multiplying (1/2) * longerSide * shorterSide * numberOfSides to find area of polygon
 * return the result by having 3 decimal points using .toFixed method
 */
