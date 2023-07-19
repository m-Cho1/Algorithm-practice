/*
  If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.
*/

function tacofy(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const taco = [];
  word = word.toLowerCase();

  if (word.length === 0) {
    return ['shell', 'shell'];
  }
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      taco.push('beef');
    }
    if (word[i] === 't') {
      taco.push('tomato');
    }
    if (word[i] === 'l') {
      taco.push('lettuce');
    }
    if (word[i] === 'c') {
      taco.push('cheese');
    }
    if (word[i] === 'g') {
      taco.push('guacamole');
    }
    if (word[i] === 's') {
      taco.push('salsa');
    }
  }
  taco.unshift('shell');
  taco.push('shell');
  return taco;
}

console.log(`tacofy('ydjkpwqrzto') will return ['shell', 'tomato', 'beef', 'shell'] | ${tacofy('ydjkpwqrzto')}`);
