/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

 *Example: (Input --> Output)

 "Dermatoglyphics" --> true
 "aba" --> false
 "moOse" --> false (ignore letter case)
 */

function isIsogram(str) {

  const lowerCase = str.toLowerCase().split('');
  lowerCase.sort().join('');
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === lowerCase[i + 1]) {
      return false;
    }
  }
  return true;

}

console.log(`isIsogram(Dermatoglyphics) will return true: ${isIsogram('Dermatoglyphics')}`);
