function solution(d, budget) {
  const cases = [...d].sort((a, b) => a - b);
  let sum = 0;
  let index = 0;
  while (sum <= budget) {
    sum += cases[index];
    index++;
  }
  return index - 1;
}
console.log(solution([1, 3, 4, 2, 5], 9));
console.log(solution([2, 2, 3, 3], 10));