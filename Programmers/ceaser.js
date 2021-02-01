const s = 'a B z';
const n = 4;
const str = Array.from(s);
const answer = str.map(ss => {
  if (ss === ' ') return ' '; 
  const ascii = ss.charCodeAt(0) < 91 ? ss.charCodeAt(0) + n > 90 ? ss.charCodeAt(0) + n - 26 : ss.charCodeAt(0) + n : ss.charCodeAt(0) + n > 122 ? ss.charCodeAt(0) + n - 26 : ss.charCodeAt(0) + n;
  return String.fromCharCode(ascii);
}).join('');

console.log(answer);
console.log(12 / 3);