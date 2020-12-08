// 81번 주사위 2개를 던지면?
// 1부터 n까지, 1부터 m까지 숫자가 적힌
// 서로 다른 주사위 2개를 던졌을 때 나올 수 있는 모든 경우를 출력해보자.
/*
입력
주사위 2개의 면의 개수 n, m이 공백을 두고 입력된다.
단, n, m은 10이하의 자연수
출력
나올 수 있는 주사위의 숫자를 한 세트씩 줄을 바꿔 모두 출력한다.
첫 번째 수는 n, 두 번째 수는 m으로 고정해 출력하도록 한다.
*/
const nestingFor = function (num1, num2) {
  for (let i = 1; i < num1+1 ; i++) {
    for (let j = j ; num2+1; j++) {
      console.log(i, j);
    }
  }
};
// 82번 16진수 구구단
/*
16진수로 한 자리 수가 입력된다.
단, A ~ F 까지만 입력된다.
입력된 16진수에 1~F까지 순서대로 곱한, 16진수 구구단을 줄을 바꿔 출력한다.
계산 결과도 16진수로 출력해야 한다.
*/
const hexMulTable = function (hexnum) {
   hexnum = hexnum.toString(16);
   for (let i = 1 ; i < 16; i++) {
    console.log(`${hexnum}*${i.toString(16)}=${(parseInt(hexnum, 16)*i).toString(16)}`);
   }
};
hexMulTable('B');