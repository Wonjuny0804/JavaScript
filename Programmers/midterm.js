function solution (answers) {
  let who = [];
  const giveups = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const results = giveups.map(giveup => (answers.filter((answer, index) => answer === giveup[index % giveup.length]).length));
  results.forEach((result, index) => {
     if (result === Math.max(...results)) who.push(index + 1);
  });
  return who;
}

console.log(solution([1, 2, 3, 4, 5]));