const getArray = arr => arr.filter(item => (!(item % 2) && item > 3));
console.log(getArray([1, 2, 3, 4, 5, 6]));