//
/* Check If N and Its Double Exist
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
*/
// 첫번째 제출
/*
var checkIfExist = function(arr) {
  var result = 0
  for(var i =0; i < arr.length; i++) {
    if (arr.includes(arr[i]*2)) {
      result += 1;
    }
  }
  return result ? true : false;
};
arr = [3,1,7,11];
console.log(checkIfExist(arr));
*/
// submit 실패 
// 실패 이유 : [-2,0,10,-19,4,6,-8]
// 0이 있는 경우를 포함하는 것을 생각하지 못했기 때문이다. ..
// 또한 0일 경우 자기 자신은 포함하지 말아야한다. 


// 두번째 시도.. 실패.. 
/*
var checkIfExist = function(arr) {
  var result = 0;
  for(var i =0; i < arr.length; i++) {
    if (arr[i] !== 0) { // 해당 원소가 0이 아닐때만 다음의 문을 실행한다.
      if (arr.includes(arr[i]*2)) {
        result += 1;
      }
    }
  }
  console.log(result);
  return result ? true : false;
};
arr = [0,0];
console.log(checkIfExist(arr));
*/
// 실패 이유는 2번에서 0을 아예 제거해버렸기 때문이다... 이런 경우 
// 문제의 의도를 완전히 파악하지 못한 것이다. 애초에 
// 이중 for문을 원했다는 것이다.

// 3차 시도도 실패했다... 그 이유는 알고리즘 상에 문제가 있다.
// 자신과 자신 다음의 원소들만 확인했다. 이중 for문의 알고리즘을 
//  조금만 수정하도록 하자.
var checkIfExist = function(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++){
      if ( i !== j ) {
        if ( arr[i]*2 === arr[j]){
          result += 1;
        }
      }
    }
  }
  console.log(result);
  return result ? true : false;
};
arr = [10,2,5,3];
console.log(checkIfExist(arr));
/*
위 처럼 적어서 최종 코드가 완성되었다. 
로직을 보면 m을 정하고 m의 2배해준 값을 다른 인덱스값들과 비교해준다. 
*/