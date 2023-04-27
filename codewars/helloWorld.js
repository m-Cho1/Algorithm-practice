/**
 * You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.
 */

const helloWorld = () => {
  // used ASCII table to find each characters, saved them into an array.
  const chars = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

  // used fromCharCode method of String to convert the ASCII code into string
  // then used apply method to call fromCharCode method on chars array.
  // store the result into result variable, then return
  const result = String.fromCharCode.apply(null, chars);
  return result;
};

console.log(`helloWorld() returns a string Hello, World! without returning the raw string | ${helloWorld()}`);
