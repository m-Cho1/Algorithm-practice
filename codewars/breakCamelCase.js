/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(string) {
  const newStr = [];
  const split = string.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[i].toUpperCase()) {
      split[i] = ' ' + split[i];
    }
    newStr.push(split[i]);
  }
  return newStr.join('');
}

console.log(`solution('helloWorld') will return hello World | ${solution('helloWorld')}`);
