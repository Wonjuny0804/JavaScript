 // 41번 문자 1개 입력받아 다음 문자 출력하기
// 영문자 1개를 입력받아 그 다음 문자를 출력해보자. 
/*
영문자 1개가 입력된다.
다음 문자를 출력한다.

 */
const nextAlphabet = function (alphabet) {
  if (typeof alphabet !== String && alphabet.length !== 1) return;
  return String.fromCharCode(alphabet.charCodeAt(0)+1);
}

// 42번 수 2개 입력받아 나눈 몫 출력하기(설명)
/*
정수 2개(a, b) 를 입력받아 a를 b로 나눈 몫을 출력해보자.
단, -2147483648 <= a <= b <= +2147483647, b는 0이 아니다.
 */
const [first, second] = Number(prompt().split(' '));
console.log(Math.floor(first / second));

// 43번문제 정수 2개 입력받아 나눈 나머지 출력하기(설명)
const [first, second] = Number(prompt().split(' '));
console.log(first % second);

// 44번 정수 1개 입력받아 1 더해 출력하기(설명)
const addOne = function (num) {
  console.log(num+1);
};

// 45번 정수 2개 입력받아 자동 계산하기
const autoCal = function (num1, num2) {
  console.log(num1+num2);
  console.log(num2-num2);
  console.log(num1*num2);
  console.log(Math.floor(num1/num2));
  console.log(num1%num2);
  console.log(num1/num2);
};

// 46 정수 3개 입력받아 합과 평균 출력하기
const threeNumbers = function (num1, num2, num3) {
  const sum = num1 + num2 + num3; 
  console.log(sum);
  console.log(sum/3);
};

// 47번 정수 1개 입력받아 2배 곱해 출력하기 비트 연산자 << 사용
const doublebit = function (num) {
  console.log(num<<1);
};

// 48번 한 번에 2의 거듭제곱 배로 출력하기(설명)
const square = function (num1, num2) {
  console.log(num1**num2);
};

// 49번 두 정수 입력받아 비교하기1(설명)
/*
두 정수(a, b)를 입력받아

a가 b보다 크면 1을, a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.
*/
const compare = function(num1, num2) {
  return result = num1 > num2 ? 1 : 0;
};

// 50번 두 정수 입력받아 비교하기2(설명)
/*
두 정수(a, b)를 입력받아
a와 b가 같으면 1을, 같지 않으면 0을 출력하는 프로그램을 작성해보자.
*/
const compare = function(num1, num2) {
  return num1 === num2 ? 1 : 0;
};