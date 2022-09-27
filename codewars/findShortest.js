function findShortest(s) {
  const split = s.split(' ');
  let shortest = split[0];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length < shortest.length) {
      shortest = split[i];
    }
  }
  return shortest.length;
}

console.log('findShortest(this is practice string) will return 2: ', findShortest('this is practice string'));
