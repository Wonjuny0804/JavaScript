function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let key = array[i];
    while (array[j] > key && j >= 0) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]