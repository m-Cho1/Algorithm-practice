/*
 * You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
 */

function array(string) {
  let result = [];
  const splitted = string.split(',');
  if (splitted.length <= 2) {
    return null;
  } else {
    for (let i = 1; i < splitted.length - 1; i++) {
      result.push(splitted[i]);
    }

    result = result.join(' ');
    return result;
  }
}

console.log(`array('a, 1, 45, 32, 65, f') returns '1, 45, 32, 65' | ${array('a, 1, 45, 32, 65, f')}`);
