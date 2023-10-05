/**
 * Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

 */

function solution(...s) {
  // return true if this method is called with duplicate argument values
  return new Set(s).size !== s.length;
}

console.log(`solution('is','there','any','duplicates','in','this','arguments','any') returns true | ${solution('is', 'there', 'any', 'duplicates', 'in', 'this', 'arguments', 'any')}`);

/** psuedo code:
 * used rest operator to put the arguments in the array
 * used Set object with arguments, so that the new array stores unique values.
 * Then compare the new array by using size property that returns the number of unique values in the array, with
 * the length of the original arguments.
 */
