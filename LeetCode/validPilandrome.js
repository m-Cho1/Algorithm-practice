const isPalindrome = function (s) {
  if (s.length === 1) return true;

  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const s2 = s.split('').reverse().join('');
  return s2 === s;
};

console.log('isPalindrome : A man, a plan, a canal: Panama ', isPalindrome('A man, a plan, a canal: Panama'));
