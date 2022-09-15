/**
 * Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
 */

function isUpperCase(str) {
  const split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== split[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

console.log(`isUpperCase(ACSKLDFJSgSKLDFJSKLDFJ) will return false: ${isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')}`);
console.log(`isUpperCase(HELLO I AM DON) will return true: ${isUpperCase('HELLO I AM DON')}`);
