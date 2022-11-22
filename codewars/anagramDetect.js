/**
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */

var isAnagram = function (test, original) {
  const test1 = test.toLowerCase().split('').sort().join('');
  const original1 = original.toLowerCase().split('').sort().join('');

  console.log(test1, original1);
  if (test1 === original1) {
    return true;
  } else {
    return false;
  }

};

console.log(`isAnagram('Buckethead', 'DeathhCubeK') returns true: ${isAnagram('Buckethead', 'DeathCubeK')}`);
