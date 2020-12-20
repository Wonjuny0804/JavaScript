// 91번
const sequence = function (start, m, d, n) {
  let i = 1;
  let result = start;
  while (i < n) {
    result = (result * m) + d;
    i++;
  }
  return result;
};
console.log(sequence(1, -2, 1, 8));

// 92번
/**
 같은 날 동시에 가입한 인원 3명이 규칙적으로 방문하는,
방문 주기가 공백을 두고 입력된다. (단, 입력값은 100이하의 자연수이다.) 

3명이 다시 모두 함께 방문해 문제를 풀어보는
 날(동시 가입/등업 후 며칠 후?)을 출력한다.

 공배수를 구하는 문제
 */
const whenVisit = function (a, b, c) {
  let dday = 0;
  let date = 1;
  while (!dday) {
    if (!(date % a) && !(date % b) && !(date % c)) dday = date;
    date++;
  }
  return dday;
};
console.log(whenVisit(3, 7, 9));

// 93번
/*
첫 번째 줄에 출석 번호를 부른 횟수인 정수 n이 입력된다. (1 ~ 10000)
두 번째 줄에는 무작위로 부른 n개의 번호(1 ~ 23)가 공백을 두고 순서대로 입력된다.
1번부터 번호가 불린 횟수를 순서대로 공백으로 구분하여 한 줄로 출력한다.
*/
const findDup = function ( num, attend) {
  const result = Array.from({ length: 23 }, () => 0); // 배열 생성
  for (let i = 0; i < attend.length; i++) {
    result[attend[i]-1] += 1;
  }
  return result;
};
console.log(findDup(10, [1, 3, 2, 2, 5, 6, 7, 4, 5, 9]));

// 94번 이상한 출석 번호 부르기2
/*
번호를 부른 횟수(n, 1 ~ 10000)가 첫 줄에 입력된다.
n개의 랜덤 번호(k, 1 ~ 23)가 두 번째 줄에 공백을 사이에 두고 순서대로 입력된다.

출석을 부른 번호 순서를 바꾸어 공백을 두고 출력한다.

*/
const flipAttend = function (attend) {
  return attend.reverse;
};

// 95번
const findMin = function (num, attend) {
  let min = attend[0];
  for (let i = 0; i < num; i++) {
    if (min > attend[i]) {
      min = attend[i];
    }
  }
  return min;
};

// 96
const go = function (location) {
  const result = [];
  for (let i = 0; i < 18; i++) {
    result[i] = Array.from({ length: 19 }, () => 0);
  }
  for (let j = 0; j < location.length; j++) {
    result[location[j][0] - 1][location[j][1] - 1] = 1;
  }
  return result;
};
const a = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
console.log(go(a));

// 97
const go2 = function (...location) {
  const result = [];
  for (let i = 0; i < 18; i++) {
    result[i] = Array.from({ length: 19 }, () => 0);
  }
  for (let j = 0; j < location.length; j++) {
    for (let k = 0; k < location[j].length; k++) {
      if (location[j][k] === 0) {
        for (let a = 0; a < result.length; a++) {
          result[location[j][k][a]] = 1;
        }
      }
    }
  }
  return result;
};
const location = [[10, 10], [12, 12]];
console.log(go2([10, 10], [12, 12]));

// 98