// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1 - interesting polygon is just a square with a side of length 1. An n - interesting polygon is obtained by taking the n - 1 - interesting polygon and appending 1 - interesting polygons to its rim, side by side.

function shapeArea(n) {
  var area = Math.pow(n, 2) + Math.pow(n - 1, 2);
  return area;
}

shapeArea(3);

// Math.pow() is a method, given with two arguments, base and exponent, returns base to the exponenet power.
// using Math.pow() to calculate the shape with n number of sides.
