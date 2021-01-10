function solution(s) {
  let answer = true;
  const str = Array.from(s);
  const pyArr = str.reduce((acc, s) => {
      if (s === 'p' || s === 'P') acc[0].push(s);
      else if (s === 'y' || s === 'Y') acc[1].push(s);
      return acc;
  }, [[], []]);
  answer = pyArr[0].length === pyArr[1].length;

  return answer;
}

console.log(solution('pPoooyY'));