const solution = numbers => {
  const allResults = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      allResults.push(numbers[i] + numbers[j]);
    }
  }

  allResults.sort((firstResult, secondResult) => firstResult - secondResult);

  return allResults.filter((result, index) => allResults.indexOf(result) === index);
};

console.log(solution([5, 0, 2, 7]));
