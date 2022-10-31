/*
 *Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

function disemvowel(str) {
  const split = str.split('');
  const newStr = [];
  for (let i = 0; i < split.length; i++) {
    const target = split[i].toLowerCase();
    if (target === 'a' || target === 'e' || target === 'i' || target === 'o' || target === 'u') {
      continue;
    } else {
      newStr.push(split[i]);
    }
  }
  return newStr.join('');
}

console.log(`disemvowl('This website is for losers LOL!') will return Ths wbst s fr lsrs LL! | ${disemvowel('This website is for losers LOL!')}`);
