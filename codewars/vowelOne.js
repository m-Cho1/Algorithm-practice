/**
 * Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
 */

function vowelOne(s) {
  const split = s.split('');
  let result = '';
  for (let i = 0; i < split.length; i++) {
    const vowel = split[i].toLowerCase();
    if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
      result = result + 1;
    } else {
      result = result + 0;
    }
  }
  return result;
}

console.log(`vowelOne("abceios") will return "1001110" | ${vowelOne('abceios')}`);
