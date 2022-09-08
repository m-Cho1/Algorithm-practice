// You are given two interior angles(in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  if (a <= 0 && b <= 0) {
    return 0;
  }
  return 180 - a - b;
}

console.log('find 3rd side of angle(15, 30): ', otherAngle(15, 30));
