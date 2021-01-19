function solution(arr) {
  if (arr.length === 1) return [-1];
  const answer = [...arr];
  answer.splice(answer.indexOf(Math.min(...arr)), 1);
  return answer;
}

console.log(solution([4, 3, 2, 1]));