/**
 * Your task is to return a number from a string.
 */

var filterString = function (value) {
  let numbers = '';
  for (let i = 0; i < value.length; i++) {
    if (value[i] === '0') {
      numbers = numbers + value[i];
    }
    if (parseInt(value[i])) {
      numbers = numbers + value[i];
    }
  }
  return parseInt(numbers);
};

console.log(`filterString(this is 531th times of practice!! 2022) will return 5312022 => ${filterString('this is 531th times of practice!! 2022')}`);
