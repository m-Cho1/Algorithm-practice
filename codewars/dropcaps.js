/*
  DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   "
Note: you will be provided atleast one word and should take string as input and return string as output.
*/

function dropCap(n) {
  if (n.length <= 0) {
    return '';
  }

  const corrected = n.split(' ');
  for (let i = 0; i < corrected.length; i++) {
    if (corrected[i].length > 2) {
      corrected[i] = corrected[i].toLowerCase();
      corrected[i] = corrected[i][0].toUpperCase() + corrected[i].slice(1);
    }
  }
  return corrected.join(' ');
}

console.log(`cropCap('rAnDoM CaPs CrAzInEsS') will return ' Random Caps Craziness ' | ${dropCap('rAnDoM CaPs CrAzInEsS')}`);
