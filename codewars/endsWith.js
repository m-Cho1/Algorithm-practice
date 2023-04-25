/*
 create a function that checks if the given string ends with the input letters
*/

function solution(str, ending) {

  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

console.log(`solution(distinguish, she) will reutrn false | ${solution('distinguish', 'she')}`);
