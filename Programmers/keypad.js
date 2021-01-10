function solution(numbers, hand) {
  var answer = '';
  answer = numbers.map((number, index) => {
    if (number === 1 || number === 4 || number === 7) return 'L';
    else if (number === 3 || number === 6 || number === 9) return 'R';
    else {
      return;
    }
  }).join();
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));