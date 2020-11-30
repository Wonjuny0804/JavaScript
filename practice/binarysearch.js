
function BinarySearch(array, target) {
  array.sort();
  while (array.length > 0) {
    if (array.length % 2) {
      var i = Math.round(array.length / 2);
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