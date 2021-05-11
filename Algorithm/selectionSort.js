function selectionSort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
}

function testCase(length, max) {
  const randomIntArray = [];
  for (let i = 0; i < length; i++) randomIntArray.push(Math.floor(Math.random() * max));

  return randomIntArray;
}

console.log(selectionSort(testCase(5, 100)));
