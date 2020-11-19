// Given a binary array, find the maximum number of consecutive 1s in this array.
/*
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  this.nums = nums;
  // initialize.
  var count = 0;
  var length = 0;
  var max_length = 0;
  for (var i=0; i<this.nums.length; i++) {
      if (this.nums[i] === 1) {
          count += 1;
          length = count;
      }
      else {        
          count = 0;
      }
      // max length of the consequttive sequence.
      if (max_length < length) 
          max_length = length;
  }
  return max_length;
};