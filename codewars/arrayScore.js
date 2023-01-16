/*
  You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x) {
  const result = [];
  let score;
  if ((typeof x[0] !== 'number') && (typeof x[1] !== 'number')) {
    return 'Void!';
  } else if ((typeof x[0] === 'number') && (typeof x[1] !== 'number')) {
    score = x[0];
  } else if ((typeof x[0] !== 'number') && (typeof x[1] === 'number')) {
    score = x[1];
  } else {
    score = x[0] + x[1];
  }
  for (let i = 0; i < score; i++) {
    result.push(x);
  }
  return result;
}

console.log(`explode(['x',5]) will return [['x',5],['x',5],['x',5],['x',5],['x',5]] | ${explode(['x', 5])}`);
