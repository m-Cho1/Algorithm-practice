/*
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

const isAnagram = function (s, t) {
  const order = s.split('').sort();
  const compare = t.split('').sort();
  if (order.toString() === compare.toString()) {
    return true;
  } else {
    return false;
  }
};

console.log('isAnagram: anagram, nagaram', isAnagram('anagram', 'nagaram'));
