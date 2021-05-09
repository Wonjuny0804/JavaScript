function solution(num) {
  let remainder = 0;
  let value = num;
  let answer = '';

  while (value > 0) {
    remainder = value % 3;
    value = Math.floor(value / 3);

    if (remainder === 0) {
      value -= 1;
      remainder = 4;
    }

    answer = remainder + answer;
  }

  return answer;
}

console.log(solution(6)); // 14
console.log(solution(12)); // 21
console.log(solution(18)); // 112
console.log(solution(21)); // 211
