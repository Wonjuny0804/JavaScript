// 31번 
// 10진수 정수 1개 입력받아 8진수로 출력하기
intVal = Number(prompt());
octVal = intVal.toSting(8);
console.log(octVal);

// 32번
/*
10진 정수 입력받아 16진수로 출력하기1(설명)
*/
intVal = Number(prompt());
hexVal = intVal.toString(16);
console.log(hexVal);

// 33번 10진 정수 입력받아 16진수로 출력하기2(설명)
/*
입력:255
출력:FF
*/
intVal = Number(prompt());
hexVal = intVal.toString(16);
hexVal += '';
console.log(hexVal.toUpperCase());
