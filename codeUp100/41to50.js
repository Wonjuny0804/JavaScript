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
}