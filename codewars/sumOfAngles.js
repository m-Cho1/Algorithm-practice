/*
  - find the total sum of internal angles (in degrees) in an n-sided simple polygon.
  - N will be greater than 2
*/

/*
  - The formula of finding the sum of polygon is (n -2) * 180, where the n is the number of sides of polygon
*/

function sumOfAngles(n) {
  const result = (n - 2) * 180;
  return result;
}

console.log(`sumOfAngles(4) will return ${sumOfAngles(4)}`);
