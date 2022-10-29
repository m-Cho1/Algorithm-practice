/*
  Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse(data) {
  const split = data.split('');
  let value = 0;
  const result = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'i') {
      value++;
    }
    if (split[i] === 'd') {
      value--;
    }
    if (split[i] === 's') {
      value = value * value;
    }
    if (split[i] === 'o') {
      result.push(value);
    }
  }
  return result;
}

console.log(`parse('iiisdoso') will return [8, 64] | ${parse('iiisdoso')}`);
