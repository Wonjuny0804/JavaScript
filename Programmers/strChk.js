function solution(s) {
  var answer = true;
  const str = Array.from(s);
  console.log(s.length);
  if (s.length !== 4 || s.length !== 6) return false;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  return answer;
}
console.log(solution('1234'));
console.log(typeof ('1' * 0));