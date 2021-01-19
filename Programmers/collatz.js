function solution(num) {
  let collatz = num;
  let count = 0;
  while (collatz !== 1) {
    if (!(collatz % 2)) collatz /= 2;
    else collatz = collatz * 3 + 1;
    count++;
    if (count === 500) return -1;
  }
  return count;
}
console.log(solution(626331));