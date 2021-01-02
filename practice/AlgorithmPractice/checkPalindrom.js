const checkPalindrom = str => {
  const word = Array.from(str);
  const reversed = [...word].reverse();
  for (let i = 0; i < reversed.length; i++) if (reversed[i] !== word[i]) return false;
  return true;
};

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true