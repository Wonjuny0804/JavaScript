// number12
/* 
실수값 1개가 입력된다.
(단, float로 저장할 수 있는 실수 값만 입력된다.)
입력된 실수값을 그대로 출력한다.
*/
console.log(prompt());

// number 13
// 정수 2개 입력받아 그대로 출력하기
/* 
정수 두개가 공백으로 구분되어 입력된다.
입력도니 두 정수를 공백으로 구분하여 출력한다. 
*/

let = a, b; 
[a, b] = prompt().split(" ");
console.log(a, b);

// 14번
//2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.
/*
    2개의 문자가 공백으로 구분되어 입력된다.
    두 문자의 순서를 바꿔 출력한다.
*/
let [a, b] = prompt().split(" ");
console.log(b, a);

// 15번 
/* 실수 입력받아 둘째 자리까지 출력하기(설명)
실수 1개가 입력된다.
결과를 소수점 셋 째 자리에서 반올림 해, 소숫점 이하 둘째 자리까지 출력한다.
(%.2f를 이용하면 된다.)
입력: 1.59254
출력: 1.59
*/
let a = Number(prompt());
console.log(a.toFixed(2));

// 기억하지 toFixed()함수는 소수점 몇번째 자리까지 출력할지 정하는 함수이다.
// 형변환 Number, String

// 16번 없어서 바로 17번으로 넘어감. 
/*   정수 1개 입력받아 3번 출력하기(설명)
 입력받아서 세번 출력하기
*/
let a = Number(prompt());
console.log(a, a, a);

//18번 시간 입력받아 그대로 출력하기
/*
시(hour)와 분(minute)이 ":" 으로 구분되어 입력된다.
입력받은 시간을 "시:분" 형식으로 출력한다.
*/
let [hour, minute] = prompt().split(":");
console.log(hour+":"+minute);

// 19번 연월일 입력받아 그대로 출력하기
/*
년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.
연, 월, 일이 ".(닷)"으로 구분되어 입력된다.
(%02d를 사용하면 2칸을 사용해 출력하는데, 한 자리 수인 경우 앞에 0을 붙여 출력한다.)
*/
// https://apost.kr/600 <---- 여기를 참고해서 코드를 작성했음. 
function fillZero(width, str){
    return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
}
let [year, month, date] = prompt().split(".");
console.log('%d.%02d.%02d', year, month, date);

//20번 문제
let [ssn_front,ssn_back] = prompt().split("-");
console.log(ssn_front+ssn_back);