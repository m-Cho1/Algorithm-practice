/**
 * Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
 */

function vowel2index(str) {
  const splitStr = str.split('');
  if (str.length === 0) {
    return '';
  }

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === 'a' ||
        splitStr[i] === 'e' ||
        splitStr[i] === 'i' ||
        splitStr[i] === 'o' ||
        splitStr[i] === 'u' ||
        splitStr[i] === 'A' ||
        splitStr[i] === 'E' ||
        splitStr[i] === 'I' ||
        splitStr[i] === 'O' ||
        splitStr[i] === 'U'
    ) {
      splitStr[i] = i + 1;
    }
  }
  return splitStr.join('');
}

console.log(`vowel2index('The hire freeze is a new nightmare') returns  | ${vowel2index('The hire freeze is a new nightmare')}`);
