const solution = (_progresses, _speeds) => {
  let progresses = _progresses;
  const speeds = _speeds;

  const answer = [];
  while (progresses.length > 0) {
    let count = 0;
    progresses = progresses.map((progress, index) => progress + speeds[index]);
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }
    if (count !== 0) answer.push(count);
  }
  return answer;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));
console.log(solution([93, 30, 55, 60, 40, 65], [1, 30, 5, 10, 60, 7]));
