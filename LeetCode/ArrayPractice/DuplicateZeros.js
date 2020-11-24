/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var orgArr = [1,0,2,3,0,4,5,0];
var duplicateZeros = function(arr) {
    // first traverse from front to the end
    var dupArr = [];
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] !== 0) {
            dupArr.push(arr[i]);
        }
        else {
            // 0을 두번 삽입한다. 
            dupArr.push(arr[i]);
            dupArr.push(arr[i]);
        }
    }
    if (dupArr.length !== arr.length) {
        dupArr = dupArr.slice(0,arr.length);
    }
    return dupArr;
};

var result = duplicateZeros(orgArr);
console.log(result);