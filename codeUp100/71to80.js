// 71번 0 입력될 때까지 무한 출력하기1(설명)

const untilZero = function () {
  let num = Number(prompt());
  while (num) {
    console.log(num);
    num = Number(prompt());
  }
};

// 72번 정수 입력받아 계속 출력하기(설명)
// 첫 줄에 정수의 개수 n이 입력되고,
// 두 번째 줄에 n개의 정수가 공백을 두고 입력된다.
const print = function () {
  let numbers = prompt();
  let i = 0;
  let input = [];
  while (i < numbers)
  {
    input.push(prompt());
    i++;
  }
  for (let j = 0; j < input.length; j++){
    console.log(input[j]);
  }
};
//73번 0 입력될 때까지 무한 출력하기2(설명)
const untilZero2 = function () {
  let num = Number(prompt());
  while (num) {
    console.log(num);
    num = Number(prompt());
  }
};

// 74 정수 1개 입력받아 카운트다운 출력하기1(설명)
const countdown = function (num) {
  while (num > 0) {
    console.log(num);
    --num;
  }
};

//75번 정수 1개 입력받아 카운트다운 출력하기2(설명)
const countdown2 = function (num) {
  while (num >= 0) {
    console.log(num);
    --num;
  }
}