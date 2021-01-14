function solution(s) {
  const answer = true;
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) if (Number.isNaN(+s[i])) return false;
  return answer;
}
console.log(solution('a234'));