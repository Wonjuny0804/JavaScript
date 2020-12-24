function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let flag = 0;
    let index = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        flag++;
        index = j;
      }
    }
    if (flag) {
      array[index] = array[i];
      array[i] = min;
    }
  }
  return array;
  // for (let i = 0; array.length; i++) {
  //   if (array[i] > Math.min(...array.slice(i + 1,))) {
  //     const temp = array[i];
  //     array[i] = array[array.slice(i + 1,).indexOf(Math.min(...array.slice(i + 1,)))];
  //     array[array.slice(i + 1,).indexOf(Math.min(...array.slice(i + 1,)))] = temp;
  //   }
  // }
  // return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2]));
