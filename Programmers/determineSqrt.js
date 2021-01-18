function solution(n) {
  return +Math.sqrt(n).toFixed() === Math.sqrt(n) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
console.log(solution(121));
console.log(typeof 12.1.toFixed());