/*
  - create a function that returns the number of arguments in a function
  - this algorithm is for learning to use spread operator
*/

function argsCount(...args) {
  if (args.length === 0) {
    return 0;
  }
  return args.length;
}

console.log(`argsCount('a', 'test', 'argument') will return 3 | ${argsCount('a', 'test', 'argument')}`);
console.log(`argsCount(['foo', 'bar']) will return 1 | ${argsCount(['foo', 'bar'])}`);
