// 51번  정수 입력받아 비교하기3
// 입력
const compare3 = function (num1, num2) {
  return num1 >= num2 ? 1 : 0;
};

// 52번 두 정수 입력받아 비교하기
// 두 정수(a, b)를 입력받아
// a와 b가 서로 다르면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
const compare4 = function (num1, num2) {
  return num1 !== num2 ? 1 : 0;
};

//  53번 참 거짓 바꾸기
//  1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때
//  반대로 출력하는 프로그램을 작성해보자.

const trueorfalse1 = function (value) {
  return value === true ? false : true;
};

// 54번 둘 다 참일 경우만 참 출력하기
const trueorfalse2 = function (val1, val2) {
  return val1 === val2;
};

// 55번 하나라도 참이면 참 출력하기
const trueorfalse3 = function (val1, val2) {
  return val1 || val2;
};

// 56번 참/거짓이 서로 다를 때에만 참 출력하기
const trueorfalse4 = function (val1, val2) {
  return val1 !== val2;
};

// 57번 참/거짓이 서로 같을 때에만 참 출력하기
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,참/거짓이 서로 
// 같을 때에만 참이 계산되는 프로그램을 작성해보자
const trueorfalse5 = function () {
  const [val1, val2] = prompt().split(' ');
  return val1 === val2 ? 1 : 0;
};

// 58번 둘 다 거짓일 경우만 참 출력하기
const trueorfalse6 = function () {
  const [val1, val2] = prompt().split(' ');
  return val1 === false && val2 === false;
};

// 59번 비트 단위로 반전시켜서 10진수로 출력
const bitreverse = function (num1) {
  return ~num1;
};

// 60번 두 정수를 비트단위(bitwise)로 and 계산을 수행한 결과를 10진수로 출력한다.
const bitwise = function (num1, num2) {
  return num1 & num2;
};
