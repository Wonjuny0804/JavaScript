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

// 85번 소리 파일 저장용량 계산하기(설명)
/*
소리가 컴퓨터에 저장될 때에는 디지털 데이터화 되어 저장된다.

마이크를 통해 1초에 적게는 수십 번, 많게는 수만 번 소리의 강약을 체크해
그 값을 정수값으로 바꾸고, 그 값을 저장해 소리를 파일로 저장할 수 있다.

값을 저장할 때에는 비트를 사용하는 정도에 따라 세세한 녹음 정도를 결정할 수 있고,
좌우(스테레오) 채널로 저장하면 2배… 5.1채널이면 6배의 저장공간이 필요하고,
녹음 시간이 길면 그 만큼 더 많은 저장공간이 필요하다.

1초 동안 마이크로 소리강약을 체크하는 수를 h
(헤르쯔, Hz 는 1초에 몇 번? 체크하는가를 의미한다.)

한 번 체크한 결과를 저장하는 비트 b
(2비트를 사용하면 0 또는 1 두 가지, 16비트를 사용하면 65536가지..)

좌우 등 소리를 저장할 트랙 개수인 채널 c
(모노는 1개, 스테레오는 2개의 트랙으로 저장함을 의미한다.)

녹음할 시간 s가 주어질 때,

필요한 저장 용량을 계산하는 프로그램을 작성해보자.

실제로 일반적인 CD 음질(44.1KHz, 16bit, 스테레오)로 1초 동안 저장하려면
44100 * 16 * 2 * 1 bit의 저장공간이 필요하다.

이렇게 녹음하는 방식을 PCM(Pulse Code Modulation) 방법이라고 하는데,
압축하지 않은 순수한(raw) 소리 데이터 파일은 대표적으로 *.wav 가 있다.

**
      8 bit(비트)           = 1byte(바이트)     //       8bit=1Byte
1024 Byte(210 byte) = 1KB(킬로 바이트) // 1024bit=1KB
1024 KB(210 KB)      = 1MB(메가 바이트)
1024 MB(210 MB)     = 1GB(기가 바이트)
1024 GB(210 GB)      = 1TB(테라 바이트)

입력: h, b, c, s 가 공백을 두고 입력된다.
h는 48,000이하, b는 32이하(단, 8의배수), c는 5이하, s는 6,000이하의 자연수이다.

 출력: 필요한 저장 공간을 MB 단위로 바꾸어 출력한다.
단, 소수점 둘째 자리에서 반올림해 첫째 자리까지 출력하고 MB를 공백을 두고 출력한다.
*/
const soundData = function (h, b, c, s) {
  const howMuch = h * b * c * s;
  const result = (howMuch / 8) / (1024 ** 2);
  return result.toFixed(1) + 'MB';
};
console.log(soundData(44100, 16, 2, 10));

// 86번
const imageData = function (width, height, rgb) {
  const result = ((width * height * rgb) / 8) / (1024 ** 2);
  return result.toFixed(2) + 'MB';
};
console.log(imageData(1024, 768, 24));

// 87번 
/*
1, 2, 3 ... 을 순서대로 계속 더해나갈 때,
그 합이 입력한 정수보다 작을 동안만 계속 더하는 프로그램을 작성해보자.

*/
const okThatIsEnough = function (num) {
  let total = 0;
  let start = 1;
  while (total < num) {
    total += start;
    ++start;
  }
  return total;
};
console.log(okThatIsEnough(57));

// 88번 3의 배수는 통과
/*
1부터 입력한 정수까지 1씩 증가시켜 출력하는 프로그램을 작성하되,
3의 배수인 경우는 출력하지 않도록 만들어보자.
*/

const notThrees = function (num) {
  let count = 1;
  let result = '';
  while (count <= num) {
    if (!(count % 3)) count++;
    else {
      result += count + ' ';
      count++;
    }
  }
  return result;
};
console.log(notThrees(10));

// 89번 수 나열하기1
/*
입력
시작 값(a), 등차의 값(d), 몇 번째 수 인지를 의미하는 정수(n)가
공백을 두고 입력된다.(모두 0 ~ 100)
출력
n번째 수를 출력한다.

*/
const arithmetic = function (start, d, n) {
  return start + d * (n - 1);
};
console.log(arithmetic(1, 3, 5));

// 90 번 수 나열하기2
// 등비 수열
const geometric = function (start, r, n) {
  return start * (r ** (n - 1));
};
console.log(geometric(2, 3, 7));