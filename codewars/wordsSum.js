/**
 * If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
 */

function wordsToMarks(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      result = result + 1;
    } else if (string[i] === 'b') {
      result = result + 2;
    } else if (string[i] === 'c') {
      result = result + 3;
    } else if (string[i] === 'd') {
      result = result + 4;
    } else if (string[i] === 'e') {
      result = result + 5;
    } else if (string[i] === 'f') {
      result = result + 6;
    } else if (string[i] === 'g') {
      result = result + 7;
    } else if (string[i] === 'h') {
      result = result + 8;
    } else if (string[i] === 'i') {
      result = result + 9;
    } else if (string[i] === 'j') {
      result = result + 10;
    } else if (string[i] === 'k') {
      result = result + 11;
    } else if (string[i] === 'l') {
      result = result + 12;
    } else if (string[i] === 'm') {
      result = result + 13;
    } else if (string[i] === 'n') {
      result = result + 14;
    } else if (string[i] === 'o') {
      result = result + 15;
    } else if (string[i] === 'p') {
      result = result + 16;
    } else if (string[i] === 'q') {
      result = result + 17;
    } else if (string[i] === 'r') {
      result = result + 18;
    } else if (string[i] === 's') {
      result = result + 19;
    } else if (string[i] === 't') {
      result = result + 20;
    } else if (string[i] === 'u') {
      result = result + 21;
    } else if (string[i] === 'v') {
      result = result + 22;
    } else if (string[i] === 'w') {
      result = result + 23;
    } else if (string[i] === 'x') {
      result = result + 24;
    } else if (string[i] === 'y') {
      result = result + 25;
    } else {
      result = result + 26;
    }
  }
  return result;
}
console.log(`wordsToMarks('winner') will return 83 | ${wordsToMarks('winner')}`);

// or other way using loop:
/**
 * function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}
 */
