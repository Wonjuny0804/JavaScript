
function BinarySearch(array, target) {
  array.sort();
  while (array.length > 0) {
    if (array.length % 2) {
      var i = Math.floor(array.length / 2);
      if (array[i] > target) {
        array = array.slice(0, i);
        console.log(array);
      } else if (array[i] < target) {
        array = array.slice(i + 1, array.length);
        console.log(array);
      } else {
        return i;
      }
    } else {
      var j = array.length / 2;
      if (array[j] > target) {
        array = array.slice(0, j);
      } else if (array[j] < target) {
        array = array.slice(j + 1, array.length);
        console.log(array);
      } else {
        return j;
      }
    }
  }
  return -1;
}


// 현재 작동 안함... 디버깅 중...
console.log(BinarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(BinarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(BinarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(BinarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 7)); // -1