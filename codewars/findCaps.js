/**
 * Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
 */

var capitals = function (word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

console.log(`capitals(Check If AnYThing Is CaPITal!) will return array of [0,5,6,8,9,11,12,17,18,20,21,23,24,25,28]  | ${capitals('Check If AnYThing Is CaPITal!')} `);
