// 에라토스테네스의 체

function solution(n) {
  if (n <= 1) return;
  let answer = 0;
  const numbers = [];
  for (let i = 2; i < n; i++) numbers.push(true);
  for (let i = 2; i * i <= n; i++) {
    if (numbers[i]) for (let j = i * i; j <= n; j += i) numbers[j] = false;
  }
  return numbers.filter(number => number);
}

console.log(solution(10));