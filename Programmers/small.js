function solution(n) {
  if (n === 1) return 1;
  const small = [];
  for (let i = 1; i <= (n / 2); i++) if (!(n % i)) small.push(i, n / i);
  const result = small.filter((item, index) => small.indexOf(item) === index).sort((a, b) => a - b);
  return result.reduce((acc, item) => acc + item, 0);
}

console.log(solution(1));