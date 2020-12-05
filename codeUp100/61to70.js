// 61번 비트단위로 OR하여 출력하기
const bitwise = function (val1, val2) {
  return val1 | val2;
};
// console.log(bitwise(3,5));

// 62번  비트 XOR 연산
const bitwisexor = function (val1, val2) {
  return val1 ^ val2;
};

//63번 두 정수 입력받아 큰 수 출력하기
const compareMax = function(num1, num2) {
  return num1 > num2 ? num1 : num2;
};

// 64번 정수 3개 입력받아 가장 작은 수 출력하기(설명)
const compareMin = function (num1, num2, num3) {
  return num1 > num2 ? num1 : (num2 > num3 ? num2 : num1);
};

// 65번 정수 3개 입력받아 짝수만 출력하기(설명)
const onlyEven = function () {
  for (let i = 0; i < arguments.length; i++) {
    if (!(arguments[i] % 2)) console.log(arguments[i]);
  }
};

// 66번 정수 3개 입력받아 짝/홀 출력하기(설명)
const evenOdd = function () {
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] % 2) console.log('Odd');
    else console.log('Even');
  }
};

// 67번 정수 1개 입력받아 분석하기(설명)
// 정수 1개가 입력되었을 때, 음(minus)/양(plus)과 짝(even)/홀(odd)을 출력해보자.
const numInfo = function (num) {
  num > 0 ? console.log('plus') : console.log('minus');
  num % 2 ? console.log('odd') : console.log('even'); 
};

// 68번 정수 1개 입력받아 평가 출력하기(설명)
const gpa = function (point) {
  if (point <= 0 || point > 100) return; // 방어 코드
  return point >= 90 ? 'A' : point >= 70 ? 'B' : point >= 40 ? 'C' : 'D';
};
// console.log(gpa(100));

// 69번 평가 입력받아 다르게 출력하기(설명)
const gpaReact = function (gpa) {
  switch (gpa)
  {
    case 'A': return 'best!!!';
    case 'B': return 'good!!';
    case 'C': return 'run!';
    case 'D': return 'slowly~';
    default: return 'what?'
  }
};
console.log(gpaReact('E'));

//70번 월 입력받아 계절 출력하기(설명)
const fourSeasons = function (month) {
  switch (month)
  {
    case 12: case 1: case 2: return 'winter';
    case 3: case 4: case 5: return 'spring';
    case 6: case 7: case 8: return 'summer';
    case 9: case 10: case 11: return 'fall';
    default: return;
  }
};