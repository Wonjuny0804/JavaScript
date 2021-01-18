function solution(n) {
  return Array.from(n + '').map(num => +num).reverse();
}
console.log(solution(12345));