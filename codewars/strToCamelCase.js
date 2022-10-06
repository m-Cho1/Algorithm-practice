/**
 *
 */

function toCamelCase(str) {
  const split = str.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '-' || split[i] === '_') {
      split[i + 1] = split[i + 1].toUpperCase();
      split[i] = '';
    }
  }
  return split.join('');
}

console.log(`toCamelCase(hello-world) will return helloWorld => ${toCamelCase('hello-world')}`);
