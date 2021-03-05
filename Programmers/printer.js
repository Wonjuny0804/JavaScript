const solution = (priorities, location) => {
  const tasks = [...priorities].map((priority, index) => {
    if (index === location) return [priority, 1];
    return [priority, 0];
  });
  const printOrder = [];
  let answer = 0;

  while (tasks.length > 0) {
    // check
    if (tasks[0][0] < tasks.reduce((max, task) => {
      if (max < task[0]) return task[0];
      return max;
    }, tasks[0][0])) {
      tasks.push(tasks[0]);
      tasks.shift();
    } else {
      printOrder.push(tasks[0]);
      tasks.shift();
    }
  }

  for (let i = 0; i < printOrder.length; i++) {
    if (printOrder[i][1] === 1) {
      answer = i + 1;
    }
  }

  return answer;
};

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
