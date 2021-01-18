function solution(s) {
  const strings = s.split(' ');
  return strings.map(string => {
    const str = Array.from(string);
    return str.map((letter, index) => {
      if (!(index % 2)) return letter.toUpperCase();
      return letter.toLowerCase();
    }).join('');
  }).join(' ');
}
console.log(solution('try hello world'));