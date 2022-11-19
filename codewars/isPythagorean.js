/**
 * Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false

** the input must be sorted to pass all tests.
 */

function isPythagoreanTriple(integers) {

  const sorted = integers.sort((a, b) => a - b);

  const a = sorted[0];
  const b = sorted[1];
  const c = sorted[2];

  if ((c * c) === (a * a) + (b * b)) {
    return true;
  } else {
    return false;
  }
}

console.log(`isPythagoreanTriple([32,66,38]) will return false:  ${isPythagoreanTriple([32, 66, 38])}`);
