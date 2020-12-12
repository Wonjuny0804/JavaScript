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
  for (let i = 1; i < num1 + 1; i++) {
    for (let j = i; num2 + 1; j++) {
      console.log(i, j);
    }
  }
};
nestingFor();
// 82번 16진수 구구단
/*
16진수로 한 자리 수가 입력된다.
단, A ~ F 까지만 입력된다.
입력된 16진수에 1~F까지 순서대로 곱한, 16진수 구구단을 줄을 바꿔 출력한다.
계산 결과도 16진수로 출력해야 한다.
*/
const hexMulTable = function (hexnum) {
  hexnum = +(hexnum.toString(16));
  for (let i = 1; i < 16; i++) {
    console.log(`${hexnum}*${i.toString(16)}=${(parseInt(hexnum, 16) * i).toString(16)}`);
  }
};

// 83번 3 6 9 게임의 왕이 되자!
// 10 보다 작은 정수 1개가 입력된다.
// (1 ~ 9)
//  1 부터 그 수까지 순서대로 공백을 두고 수를 출력하는데,
//  3 또는 6 또는 9인 경우 그 수  대신 영문 대문자 X 를 출력한다.
const threeSixNine = function (num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    const temp = i + '';
    if ((temp.indexOf('3') !== -1) || (temp.indexOf('6') !== -1) || (temp.indexOf('9') !== -1)) {
      result += 'X';
    } else {
      result += i;
    }
  }
  return result;
};
console.log(threeSixNine(25));

// 84번 빛 섞어 색 만들기
/*
빨강(red), 초록(green), 파랑(blue) 빛을 섞어
여러 가지 빛의 색을 만들어 내려고 한다.

빨강(r), 초록(g), 파랑(b) 각각의 빛의 개수가 주어질 때,
(빛의 강약에 따라 0 ~ n-1 까지 n가지의 빛 색깔을 만들 수 있다.)

주어진 rgb 빛들을 다르게 섞어 만들 수 있는 모든 경우의 조합(r g b)과
총 가짓 수를 계산해보자.

입력: 빨녹파(r, g, b) 각 빛의 강약에 따른 가짓수(0 ~ 128))가 공백을 사이에 두고 입력된다.
예를 들어, 3 3 3 은 각 색깔 빛에 대해서 그 강약에 따라 0~2까지 3가지의 색이 있음을 의미한다.

출력:만들 수 있는 rgb 색의 정보를 오름차순(계단을 올라가는 순, 12345... abcde..., 가나다라마...)으로
줄을 바꿔 모두 출력하고, 마지막에 그 개수를 출력한다.

*/

const possibleRGB = function (num1, num2, num3) {
  let count = 0;
  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      for (let k = 0; k < num3; k++) {
        console.log(i, j, k);
        count++;
      }
    }
  }
  console.log(count);
};
possibleRGB(2, 2, 2);