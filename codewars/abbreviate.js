/**
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot separating them.

  It should look like this:

  Sam Harris => S.H

  patrick feeney => P.F
 */

function abbrevName(name) {
  const split = name.split(' ');
  const result = [];
  for (let i = 0; i < split.length; i++) {
    result.push(split[i][0]);
  }
  const abbreviate = result[0] + '.' + result[1];
  return abbreviate.toUpperCase();
}

console.log(`abbrevName('Minji Cho') returns M.C : ${abbrevName('Minji Cho')}`);
