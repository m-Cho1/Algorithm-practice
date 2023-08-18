/*
  - This function counts how many "word" can be made in a given string.
  - The "word" should be made by going order of the string.
  - if the characters in oder in the string creates word, increment the number
  - return the increment value as a result
*/

function testit(s) {
  let count = 0;
  let progress = 'w'; // This keeps track of the next character we need to encounter.

  // iterating over each character:
  for (const char of s.toLowerCase()) {
    if (char === progress) {
      // if the char patches with progress, then change the progress value to the next target.
      switch (progress) {
        case 'w':
          progress = 'o';
          break;
        case 'o':
          progress = 'r';
          break;
        case 'r':
          progress = 'd';
          break;
        case 'd':
          progress = 'w'; // Reset to the beginning of "word".
          count++; // increment the value as full "word" is found.
          break;
      }
    }
  }

  return count;

}

console.log(`testit(the word can only be created by going through the order of the string.) returns | ${testit('the word can only be created by going through the order of the string')}`);
