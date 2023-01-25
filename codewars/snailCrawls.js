/*
  * The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

Your function takes three arguments:

The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)
Calculate number of day when the snail will reach the top of the column.
*/

function snail(column, day, night) {

  const days = (column - night) / (day - night);
  if (days < 1) {
    return 1;
  } else {
    const result = Math.ceil(days);
    return result;
  }
}

console.log(`snail(100, 20, 5) returns 7 | ${snail(100, 20, 5)}`);
