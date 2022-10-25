/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function xo(str) {
  let xs = 0;
  let os = 0;
  const lowered = str.toLowerCase();
  for (let i = 0; i < lowered.length; i++) {
    if (lowered[i] === 'x') {
      xs++;
    } else if (lowered[i] === 'o') {
      os++;
    }
  }
  if (xs === os) {
    return true;
  } else {
    return false;
  }
}

console.log(`xo('ooxXm') will return true | ${xo('ooxXm')}`);
