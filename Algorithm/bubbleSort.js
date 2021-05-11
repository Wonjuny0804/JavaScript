/*

버블 소팅 알고리즘, 두개씩 비교한다.

*/
function bubbleSort(data) {
  let swap = false;
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }

  return data;
}

// function bubbleSortTo
function testCase(length, max) {
  const randomIntArray = [];
  for (let i = 0; i < length; i++) randomIntArray.push(Math.floor(Math.random() * max));

  return randomIntArray;
}
console.log(bubbleSort(testCase(5, 100)));
console.log(bubbleSort(testCase(6, 100)));
console.log(bubbleSort(testCase(7, 100)));
console.log(bubbleSort(testCase(8, 100)));
