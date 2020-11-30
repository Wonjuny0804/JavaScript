/*
Given an array arr, replace every element in that array with the 
greatest element among the elements to its right, and replace 
the last element with -1.

After doing so, return the array.

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Constraints
1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/
var replaceElements = function(arr) {
  for (let i = 0; i < arr.length; i++){
    let max = 0;
    for (let j = i+1; j < arr.length; j++){
      if (max < arr[j]) max = arr[j];
    }
    arr[i] = max;
  }
  arr[arr.length-1] = -1;
  return arr;
};
arr = [17, 18, 5, 4, 6, 1];
replaceElements(arr);
console.log(arr);