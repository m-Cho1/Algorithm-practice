/**
 * create a function that removes the first and last characters of a string. You're given one parameter, the original string.
 */

function removeChar(str) {
  const split = str.split('');
  split.pop();
  split.shift();
  return split.join('');

}

console.log(
  `removeChar(practice will return ractic) ${removeChar('practice')}`
);
