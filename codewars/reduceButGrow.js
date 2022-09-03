const grow = function grows(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
};

console.log('grow([1,2,3,4]): ', grow([1, 2, 3, 4]));
