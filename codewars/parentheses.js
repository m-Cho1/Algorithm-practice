
/**
 Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.
 */

function validParentheses(parenStr) {
  let parentheses = 0;

  // check for open parenthesis in the given string
  for (let i = 0; i < parenStr.length; i++) {
    // if index is open parenthesis, increment the parentheses.
    if (parenStr[i] === '(') {
      parentheses++;
    } else {
      // for others, decrement the parentheses.
      parentheses--;
    }

    // check for the parentheses if the value is less than 0 for checking there is no pair/balanced.
    if (parentheses < 0) {
      return false;
    }
  }

  // if parentheses is equal to 0, this shows that there is valid order of parentheses.
  // also returns true for empty string.
  return parentheses === 0;
}

console.log(`validParentheses("()()(((") returns false | ${validParentheses('()()(((')}`);
