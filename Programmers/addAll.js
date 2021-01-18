function solution(n) {
  return Array.from(n + '').reduce((acc, num) => acc + +num, 0);
}

console.log(solution(123));
console.log(solution(987));