function solution(strings, n) {
  var answer = [];
  answer = [...strings].map(item => item.slice(n));
  answer.sort();
  answer = answer.map(item => strings.filter(string => string.slice(n) === item)).flat();
  return answer;
}
console.log(solution(	["sun", "bed", "car"], 1));
console.log('ed' - 'un');