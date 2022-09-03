const doubleIt = function double(arr) {
  const doubledArr = arr.map(x => x * 2);
  return doubledArr;
};

console.log('doubleIt[2,3,8]:', doubleIt([2, 3, 8]));
