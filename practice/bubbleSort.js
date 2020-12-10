const bubbleSort = function (arr) {
  let temp = 0;
  let count = 0;
  while (count < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i+1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    count++;
  }
  return arr;
};
console.log(bubbleSort([2,4,5,1,3]));