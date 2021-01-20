function solution(n, arr1, arr2) {
  var answer = [];
  const decmaps = [arr1, arr2];
  const binmaps = decmaps.map(decmap => decmap.map(element => {
    if (element.toString(2).length !== n) {
      let modify = '';
      for (let i = 0; i < n - element.toString(2).length; i++) modify += '0';
      return Array.from(modify + element.toString(2));
    }
    return Array.from(element.toString(2));
  }));
  console.log(binmaps);
  answer = binmaps[0].map((elements, index) => {
    const final = [];
    for (let i = 0; i < elements.length; i++) final.push(+elements[i] || +binmaps[1][index][i]);
    return final;
  });
  return answer.map(ans => ans.reduce((acc, element) => {
      if (element === 1) acc += '#';
      else acc += ' ';
      return acc;
    }, ''));
}