/*
  - write a function whether the string contains the whole word "english"
  - The order of characters is important
    => a string "abcEnglishdef" is correct, but "abcnEnglishsef" is not correct.
  - Upper or lower case letter does not matter -- "eNglisH" is also correct.
  - Return value as boolean values, true for the string to contains "English", false for it does not.
*/

function spEng(sentence) {
  const target = 'english';
  const toLow = sentence.toLowerCase();

  if (toLow.includes(target)) {
    return true;
  } else {
    return false;
  }
}

console.log(`spEng('abejEnglIsHwled') will return true | ${spEng('abejEnglIsHwled')}`);
