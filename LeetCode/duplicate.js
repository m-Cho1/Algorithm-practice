// Given an integer array nums,
// return true if any value appears at least twice in the array, and
// return false if every element is distinct.

function checkDuplicate(nums) {
  const numArr = new Set(nums);
  if (nums.length !== numArr.size) {
    return true;
  } else {
    return false;
  }
}

checkDuplicate([1, 2, 3]);

// - create new Set object of input nums
// - check if the size of Set object is match with the nums length.
// - if not match, return true, else, return false.

// notes:
// the Set object lets you store unique values of any type, whether primitive values or object references.
// Set objects are collections of values. you can iterate through the elements of a set in insertion order.
// A value in the Set may only occur once; it is unique in the Set's collection.
