const average = array => array.reduce((acc, item) => acc + item, 0) / array.length;

console.log(average([5, 3, 4]));