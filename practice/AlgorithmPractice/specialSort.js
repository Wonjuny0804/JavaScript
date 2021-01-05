const specialSort = array => {
  let result = [...array].sort((first, second) => first - second);
  result.splice(0, result.indexOf(0),...result.slice(0, result.indexOf(0)).sort((first, second) => second - first));
  return result;
};

const testArray = [-1, 1, 3, -2, 2, 0, -7, -9];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]