function solution(strings, n) {
  var answer = [];
  answer = [...strings].sort((string1, string2) => {
    if (string1.slice(n) > string2.slice(n)) return 1;
    else if (string1.slice(n) < string2.slice(n)) return -1;
    else return 0;
  });
  return answer;
}
console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(['abce', 'abcd', 'cdx']));
console.log('ed' - 'un');