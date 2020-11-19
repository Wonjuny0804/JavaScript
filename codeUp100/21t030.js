// 21번. 단어 1개 입력받아 그대로 출력하기
/*


1021 : [기초-입출력] 단어 1개 입력받아 그대로 출력하기(설명)
시간 제한: 1 Sec  메모리 제한: 128 MB
제출: 102947  해결 문제 수: 68520
  
문제 분류 : 보기
문제 설명
1개의 단어를 입력받아 그대로 출력해보자.


입력
한 단어가 입력된다.(단, 단어의 길이는 50자 이하이다.)

문자를 50개 저장하기 위해서는 char data[51] 로 선언하면 된다.

char data[51]="";
scanf("%s", data);

를 실행하면, data[51] 에 한 단어가 저장된다.

*/
let a = String((prompt());
console.log(a);

// 22번 문장 1개 입력받아 그대로 출력하기(설명)
/*
입력: Programming is very fun!!
출력: Promgramming is very fun!!
*/
let sentense = String((prompt());
console.log(sentense);

//23번 실수 1개 입력받아 부분별로 출력하기(설명)
/*
입력: 실수 1개가 입력된다.
(단, 입력값은 절댓값이 10000을 넘지 않으며, 소수점 이하 자릿수는 최대 6자리까지이고
0이 아닌 숫자로 시작한다.)
출력: 첫 번째 줄에 정수 부분을, 두 번째 줄에 실수 부분을 출력한다.

*/
const [front, back] = prompt().split(".");
console.log(front+"\n"+back);

//24번 단어 1개 입력받아 나누어 출력하기(설명)
/*
단어를 1개 입력받는다.

입력받은 단어(영어)의 각 문자를

한줄에 한 문자씩 분리해 출력한다.

입력
단어(영어) 하나를 입력받는다.
(단, 단어의 길이는 20자 이하이다.)

출력
단어의 문자(영어)를 하나씩 나누어 한 줄에 한 개씩
' '로 묶어서 출력한다.
Boy 가 입력되면 
'B'
'o'
'y'
가 출력된다..
*/
const letter = prompt();
for (let i = 0; i < letter.length; i++ )
{
  console.log("'"+letter[i]+"'");
}

// 25번 [기초-입출력] 정수 1개 입력받아 나누어 출력하기(설명)
/*
입력 예시   
75254

출력 예시
[70000]
[5000]
[200]
[50]
[4]
 */
let number = Number(prompt());
let result = 0;
let i = 1; // 1에서 시작해야함
result_list = [];
while (number > 0){
   result = number % (10**i);
   number -= result;
   result_list.push(result);
   i++;
}
console.log(result_list)

for (let j = result_list; j > 0; j--)
{
  console.log(result_list[j-1]);
}