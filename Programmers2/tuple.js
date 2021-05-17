function solution(s) {
  const answer = [];
  const withbrackets = s.slice(1, s.length - 1);
  const toArray = [];
  for (let i = 0; i < withbrackets.length; i++) {
    if (withbrackets[i] === '{') {
      let j = i + 1;
      while (withbrackets[j] !== '}') {
        j++;
      }
      toArray.push(withbrackets.slice(i + 1, j).split(','));
    }
  }
  const sInArray = toArray.map(array => {
    const toNum = array.map(element => +element);
    return toNum;
  });
  sInArray.sort((array1, array2) => array1.length - array2.length);
  for (let i = 0; i < sInArray.length; i++) {
    for (let j = 0; j < sInArray[i].length; j++) {
      if (!answer.includes(sInArray[i][j])) answer.push(sInArray[i][j]);
    }
  }
  return answer;
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
