function noSpace(x) {
  const split = x.split(' ');
  const result = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length >= 1) {
      result.push(split[i]);
    }
  }
  return result.join('');
}

console.log(`noSpace('this is string  with space) will return thisisstringwithspace: ${noSpace('this is string  with space')}`);
