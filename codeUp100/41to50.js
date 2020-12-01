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