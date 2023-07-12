/**
 * Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

function ages(humanYears) {
  const human = humanYears;
  let cat = 0;
  let dog = 0;
  if (humanYears === 1) {
    cat = 15;
    dog = 15;
  } else if (humanYears > 1 && humanYears <= 2) {
    cat = 15 + 9;
    dog = 15 + 9;
  } else {
    cat = 24 + ((humanYears - 2) * 4);
    dog = 24 + ((humanYears - 2) * 5);
  }
  return [human, cat, dog];
}

console.log(`ages(7) will return [7, 44, 49] | ${ages(7)}`);
