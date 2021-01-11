function solution(s) {
  var answer = '';
  const strings = Array.from(s);
  return answer = strings.sort((string1, string2) => string2.charCodeAt(0) - string1.charCodeAt(0)).join('');
}

console.log(solution('Zbcdefg'));