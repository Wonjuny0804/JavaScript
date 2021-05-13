// function solution(orders, course) {
//   // 가능한 조합을 모두 꺼낸다.
//   const possibleCombinations = [];
//   for (let i = 0; i < orders.length - 1; i++) {
//     for (let j = i + 1; j < orders.length; j++) {
//       let combination = '';
//       // i와 j를 가지고 비교해서 뽑아낼 수 있는 조합은 다 뽑아낸다.
//       for (let k = 0; k < orders[i].length; k++) {
//         for (let l = 0; l < orders[j].length; l++) {
//           if (orders[i][k] === orders[j][l]) combination += orders[i][k];
//         }
//       }
//       if (combination.length >= 2) possibleCombinations.push(combination);
//     }
//   }
//   console.log(possibleCombinations);

//   // 중복을 제거해준다.
//   const removeDuplicates = possibleCombinations.filter((combination, index) => possibleCombinations.indexOf(combination) === index);

//   // 각 갯수별로 가장 많이 주문된 메뉴 찾기 그리고 처리
//   const map = [];
//   for (let i = 0; i < removeDuplicates.length; i++) {
//     map.push([removeDuplicates[i], 0]);
//     for (let j = 0; j < possibleCombinations.length; j++) {
//       if (removeDuplicates[i] === possibleCombinations[j]) map[i][1]++;
//     }
//   }

//   // course에 들어온 경우의 수만 남긴다.
//   let answer = [];
//   for (let i = 0; i < course.length; i++) {
//     for (let j = 0; j < removeDuplicates.length; j++) {
//       if (removeDuplicates[j].length === course[i]) answer.push(removeDuplicates[j]);
//     }
//   }

//   // 들어가있는 문자열도 알파벳 순으로 오름차순 정렬을 해준다.
//   answer = answer.map(combination => combination.split('').sort().join(''));
//   answer.sort();
//   return answer;
// }

// // solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
// console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]));

// 설명을 듣고 다시 내가 생각해서 푼 것이다.
function solution(orders, course) {
  // 완전 탐색과 재귀를 쓰면 풀 수 있단는 것을 알게되었다.
  let answer = [];
  const foodMapArray = [];
  const maxCount = [];

}
