const vaporwave = string => {
  const upperCase = string.split(' ').join('').toUpperCase();
  const addSpace = [];
  for (let i = 0; i < upperCase.length; i++) {
    const idx = upperCase[i] + ' ';
    addSpace.push(idx);
  }
  const result = addSpace.join(' ');
  return result.trimEnd();
};

console.log('vaporwave(lets practice code!)', vaporwave('lets practice code'));
