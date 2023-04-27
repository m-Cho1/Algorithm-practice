/*
   * Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

  * The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329.
  * The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

  * [3,2,9],[1,2] --> [3,4,1]
    [4,7,3],[1,2,3] --> [5,9,6]
    [1],[5,7,6] --> [5,7,7]

  * If both arrays are empty, return an empty array.

  * In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

    [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
*/

function addArrays(array1, array2) {
  const sum = Number(array1.join('')) + Number(array2.join(''));
  const sumArr = Math.abs(sum).toString().split('').map(Number);

  // If the sum is negative, the function returns an array of the sum with a negative sign in front.
  // The toString() method converts the sum to a string, slice(1) removes the negative sign from the string, and
  // '-' + concatenates a negative sign to the front of the string.
  // The resulting string is then split into an array of characters using split(''), and each character is
  // converted to a number using map(Number).
  // If the sum is not negative, the function returns an array of the sum without a negative sign.
  // The toString() method converts the sum to a string, and split('') splits the string into an array of
  // characters.
  // Each character is then converted to a number using map(Number).

  if (sum === 0) {
    return [];
  } else if (sum < 0) {
    sumArr[0] *= -1;
  }
  return sumArr;
}

console.log(`addArrays([3,2,6,6], [-7,2,2,8]) returns array of [-3,9,6,2] | ${addArrays([3, 2, 6, 6], [-7, 2, 2, 8])}`);
