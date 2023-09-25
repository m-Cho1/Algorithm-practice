/*
  Create a function that sums a list, but ignores any duplicate items in the list.

  For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/

/* psuedo code:
  - Use filter function to filterout the elements that does not pass the callback function.
  - for the call back funtion, use indexOf and lastIndexOf methods of the array to sort out the duplicate in the array.
  - indexOf method returns the FIRST index of the current element from the given array, and lastIndexOf method returns index of the LAST element of the array.
  - if the value of indexOf and lastIndexOf matches, that means the element does not have duplicate.
  - The filter method will not include that does not pass the callback function.
  - after filter method. loop around the new array to add the total value, and return.
*/

function sumNoDuplicates(numList) {
  let result = 0;
  const filtered = numList.filter(value => numList.indexOf(value) === numList.lastIndexOf(value));
  for (let i = 0; i < filtered.length; i++) {
    result += filtered[i];
  }
  return result;
}

console.log(`sumNoDuplicates([1,2,3,5,10,30,24,5,11,1,7,0,3,4,10]) returns 78 | ${sumNoDuplicates([1, 2, 3, 5, 10, 30, 24, 5, 11, 1, 7, 0, 3, 4, 10])}`);
