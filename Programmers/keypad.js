function solution(numbers, hand) {
  var answer = '';
  const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
  let loc = [[3, 0], [3, 2]];
  answer = numbers.map(number => {
    for (let i = 0; i < keypad.length; i++) {
      const index = keypad[i].indexOf(number);
      if (index !== -1) {
        if (index === 0) {
          loc[0] = [i, index];
          return 'L';
        } else if (index === 2) {
          loc[1] = [i, index];
          return 'R';
        } else {
          if ((Math.abs(i - loc[0][0]) + Math.abs(index - loc[0][1])) > (Math.abs(i - loc[1][0]) + Math.abs(index - loc[1][1]))) {
            loc[1] = [i, index];
            return 'R';
          } else if ((Math.abs(i - loc[0][0]) + Math.abs(index - loc[0][1])) < (Math.abs(i - loc[1][0]) + Math.abs(index - loc[1][1]))) {
            loc[0] = [i, index];
            return 'L';
          } else {
            if (hand === 'left') {
              loc[0] = [i, index];
              return 'L';
            } else {
              loc[1] = [i, index];
              return 'R';
            }
          }
        }
      }
    }
  }).join('');
  return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));