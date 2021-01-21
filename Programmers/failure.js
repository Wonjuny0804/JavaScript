// function solution(N, stages) {
  
//   return answer;
// }
const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
stages.sort((a, b) => a - b);
console.log(stages);

const current = [];
for (let i = 0; i < N; i++) current.push(0);
console.log(current);
const stopped = stages.filter(stage => stage <= 5);
for (let i = 0; i < stopped.length; i++) current[stopped[i] - 1]++;
console.log(stopped, current);
let cleared = stages.length;
const failures = current.map(c => {
  const value = c / cleared;
  cleared -= c;
  return value;
});
console.log(failures);