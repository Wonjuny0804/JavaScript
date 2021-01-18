function solution(n) {
  return +Array.from(n + '').sort((a, b) => +b - +a).join('');
}

console.log(solution(118372));