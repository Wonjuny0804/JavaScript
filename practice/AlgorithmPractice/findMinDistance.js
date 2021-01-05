const findMinDistance = array => {
  let dis = array[1] - array[0];
  let min = dis;
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    dis = array[i + 1] - array[i];
    if (dis < min) {
      min = dis;
      answer = Array.of([array[i], array[i + 1]]);
    } else if (dis === min) {
      answer.push([array[i], array[i + 1]]);
    }
  }
  return answer;
};

var array = [1, 3, 4, 8, 13, 17, 20, 23, 24, 25];
console.log(findMinDistance(array)); 