// function solution(N, stages) {
  
//   return answer;
// }
const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
stages.sort((a, b) => a - b);
console.log(stages);

const stuck = {};
const failure = {};
for (let i = 0; i < N; i++) {
  stuck[i + 1] = 0;
  failure[i + 1] = 0;
}
stuck['allCleared'] = 0;
console.log(stuck);

for (let i = 0; i < stages.length; i++) {
  if (stuck.hasOwnProperty(stages[i])) stuck[stages[i]]++;
  else stuck.allCleared += 1;
}
console.log(stuck);

// for (let i = 0; i < stuck.length; i++) {
//   let total = 0;
//   for (let j = i; j < stuck.length; j++) {
//     total += stuck[`${i}`]
//   }
// }
console.log(Object.keys(stuck));
console.log(Object.keys(stuck).map(id => stuck[id]));