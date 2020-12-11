// 71번 0 입력될 때까지 무한 출력하기1(설명)
const untilZero = function () {
  let num = Number(prompt());
  while (num) {
    console.log(num);
    num = Number(prompt());
  }
};
untilZero();
// 72번 정수 입력받아 계속 출력하기(설명)
// 첫 줄에 정수의 개수 n이 입력되고,
// 두 번째 줄에 n개의 정수가 공백을 두고 입력된다.
const print = function () {
  const numbers = prompt();
  let i = 0;
  const input = [];
  while (i < numbers) {
    input.push(prompt());
    i++;
  }
  for (let j = 0; j < input.length; j++) {
    console.log(input[j]);
  }
};
print();
// 73번 0 입력될 때까지 무한 출력하기2(설명)
const untilZero2 = function () {
  let num = Number(prompt());
  while (num) {
    console.log(num);
    num = Number(prompt());
  }
};
untilZero2();
// 74 정수 1개 입력받아 카운트다운 출력하기1(설명)
const countdown = function (num) {
  let val = num;
  while (val > 0) {
    console.log(val);
    --val;
  }
};
countdown();
// 75번 정수 1개 입력받아 카운트다운 출력하기2(설명)
const countdown2 = function (num) {
  let val = num;
  while (val >= 0) {
    console.log(val);
    --val;
  }
};
countdown2();
// 76번 문자 1개 입력받아 알파벳 출력하기(설명)
const printAlphabet = function (alphabet) {
  let val = alphabet;
  while (val.charCodeAt(0) < 123) {
    let temp = val.charCodeAt(0);
    console.log(val);
    temp++;
    val = String.fromCharCode(temp);
  }
};
printAlphabet('y');

// 77번 정수 1개 입력받아 그 수까지 출력하기(설명)
const printUntilNumber = function (number) {
  let current = 0;
  while (current <= number) {
    console.log(current);
    current++;
  }
};
printUntilNumber();
// 78 번 짝수 합 구하기(설명)
//  정수(1 ~ 100) 1개를 입력받아 1부터 그 수까지 짝수의 합을 구해보자.
const sumOfEven = function (number) {
  let val = number;
  let total = 0;
  while (val > 0) {
    if (!(val % 2)) total += val;
    val--;
  }
  return total;
};
sumOfEven();
// 79번 원하는 문자가 입력될 때까지 반복 출력하기
// 'q'가 입력될 때까지 입력한 문자를 계속 출력하는 프로그램을 작성해보자.
const untilLetter = function (letter) {
  let val = letter;
  if (val === 'q') return;
  while (val !== 'q') {
    console.log(val);
    val = prompt();
  }
};
untilLetter();
// 80번 언제까지 더해야 할까?
const untilSum = function (num) {
  let total = 0;
  let current = 1;
  while (total < num) {
    total += current;
    current++;
  }
  return current;
};
untilSum();
