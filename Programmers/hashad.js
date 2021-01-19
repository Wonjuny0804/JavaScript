function solution(x) {
  return !(x % Array.from(x + '').reduce((acc, number) => acc + +number, 0));
}
console.log(solution(12));