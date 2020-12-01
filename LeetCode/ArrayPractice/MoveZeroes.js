/*

Given an array nums, write a function to move all 0's to the end 
of it while maintaining the relative order of the non-zero elements.
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Notes
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
    let writePointer = 0;
    for(let readPointer = 0; readPointer < nums.length; readPointer++){
      if (nums[readPointer] === 0) writePointer = readPointer;
      else {
        let temp = nums[readPointer];
        nums[readPointer] = nums[writePointer];
        nums[writePointer] = temp;
      }
    }
};
