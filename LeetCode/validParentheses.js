const isValid = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentIdx = s[i];

    if (map[currentIdx]) {
      stack.push(map[currentIdx]);
    } else if (currentIdx !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log('isValid (): ', (isValid('()')));
console.log('isValid (]: ', (isValid('(]')));
