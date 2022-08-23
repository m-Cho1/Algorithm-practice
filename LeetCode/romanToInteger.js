/*
  converting Roman numberal string to numerical value
*/

const romanToInteger = function (symbol) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  for (let i = 0; i < symbol.length; i++) {
    if (map[symbol[i]] < map[symbol[i + 1]]) {
      result -= map[symbol[i]];
    } else {
      result += map[symbol[i]];
    }
  }
  return result;
};

console.log('romanToIngeger:', romanToInteger('MCXIV'));
