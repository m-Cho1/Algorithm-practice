/*
  Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

Examples
"add" ==> 1
"Dad" ==> 1
"aeiou" ==> 0
"sillystring" ==> 7
"abcdefghijklmnopqrstuvwxyz" ==> 21
"Count my unique consonants!!" ==> 7
*/

function countConsonants(str) {
  const allLow = str.replace(/[^\w\s]/gi, '').toLowerCase().split('');
  const filtered = allLow.filter(word => word !== 'i' && word !== 'a' && word !== 'e' && word !== 'o' && word !== 'u');
  const consonants = [...new Set(filtered)];
  const result = [];
  for (let i = 0; i < consonants.length; i++) {
    if (consonants[i] !== ' ' && consonants[i].includes(Number(consonants[i])) !== true) {
      result.push(consonants[i]);
    }
  }
  return result.length;
}

console.log(`countConsoants(how many consonants are there in this sentence?) will return 9 |${countConsonants('how many consonants are there in this sentence?')}`);
