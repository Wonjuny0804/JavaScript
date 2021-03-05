const solution = n => {
  const nToTernary = n.toString(3).split('');
  const reversed = nToTernary.reverse().join('');
  return parseInt(reversed, 3);
};
console.log(solution(45));
