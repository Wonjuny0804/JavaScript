const adjacentElementsProduct = arr => arr.reduce((acc, item, index) => acc < item * arr[index + 1] ? item * arr[index + 1] : acc
  , arr[0] * arr[1]);

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));