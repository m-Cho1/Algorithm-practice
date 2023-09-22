/**
 * create a function that finds how many friday the 13th is in a given year.
 * This function utilizes Date function from javascript to find friday the 13th.
 */

function unluckyDays(year) {
  const unluckyDates = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      unluckyDates.push(date);
    }
  }
  return unluckyDates;
}

const dates = unluckyDays(2023);

console.log(`The year 2023 returns ${dates.length} Friday(s) the 13th.`);
dates.forEach(date => console.log(date.toDateString()));
