/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  const split = str.split(' ');
  const map = split.map(x => x.split('').reverse().join(''));
  return map.join(' ');
}

console.log(`reverseWords(this is a test sentence) will return siht si a tset ecnetnes | ${reverseWords('this is a test sentence')}`);
