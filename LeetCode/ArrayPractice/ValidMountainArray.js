/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 내가 생각한 로직... 먼저 가장 큰 요소의 인덱스를 찾는다. 

// 첫번째 시도... 실패했다...
/*
var validMountainArray = function(arr) {
    var max = Math.max(...arr);
    var topIndex = arr.indexOf(max);
    if (arr.length <= 2) return false;
    for (var i = 0; i < topIndex; i++){
      if (arr[i] >= arr[i+1]){
        return false;
      }
    }
    for (var j = topIndex; j < arr.length; j++){
      if (arr[j] <= arr[j+1]){
        return false;
      }
    }
    return true;
};
arr = [0,1,2,4,6,3,2,2];
console.log(validMountainArray(arr));
*/
// 첫번째가 실패한 이유는 그만큼 다른 케이스들을 생각을 하지 않았기 때문이다. 
/*
다시 알고리즘을 짜보기로 한다. 
increasing and decreasing 하고 있는지를 먼저 알아보기로 했다. 
*/

var validMountainArray = function(arr){
  var isIncreasing = false;
  var isDecreasing = false;

  if (arr.length < 3) return false;

  for (var i=i, j=0; i < arr.length; i++, j++) {

    if (arr[j] <= arr[i] && !isDecreasing){
      isIncreasing = true;
      continue;
    }

    isDecreasing = true;
    if (arr[i] <= arr[j]) return false;
  }
  return isIncreasing && isDecreasing;
}; 

arr = [0,1,2,3,4,5,6,7,8,9];
console.log(validMountainArray(arr));

//최종 코드
let validMountainArray = A => {
  let N = A.length,
      i = 0,
      j = N - 1;
  while (i + 1 < N  && A[i] < A[i + 1]) ++i; // climb mountain from left-to-right 👉
  while (0 <= j - 1 && A[j] < A[j - 1]) --j; // climb mountain from right-to-left 👈
  return 0 < i && i == j && j < N - 1; //  did we meet at the peak?
};