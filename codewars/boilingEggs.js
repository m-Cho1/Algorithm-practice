/**
 * You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
 */

function cookingTime(eggs) {
  const batches = Math.floor(eggs / 8);
  const remainingEggs = eggs % 8;

  const fullBatchCookingTime = batches * 5;
  const remainingCookingTime = (remainingEggs > 0) ? 5 : 0;

  return fullBatchCookingTime + remainingCookingTime;
}

console.log(`cookingTime(35) will return 25 | ${cookingTime(35)}`);

/**
 * calculate the full batches (max 8 eggs in a pot)
 * calculate remaining eggs after full batch (using modulus operator)
 * calculate the cooking time for full batches (5min per cooking)
 * calculate the cooking time for the remaining eggs (if there are remaining eggs, add 5 mingues, if not, 0)
 * return the sum of cooking time
 */
