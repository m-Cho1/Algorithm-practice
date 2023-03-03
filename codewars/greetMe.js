/*
  - Create a function that takes one argument name, and return the string "Hello name". The name should have proper capitalization and end with exclamation mark.
*/

var greet = function (name) {
  const correctedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${correctedName}!`;
};

console.log(`greet('mINJi') will return Hello Minji! | ${greet('mINJi')}`);
