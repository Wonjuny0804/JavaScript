function solution(rows, columns, queries) {
  // 일단 배열을 채워보자.
  const answer = [];
  const motherMatrix = [];
  for (let i = 0; i < rows; i++) {
    const sonMatrix = [];
    for (let j = 0; j < columns; j++) {
      sonMatrix.push(i * columns + j + 1);
    }
    motherMatrix.push(sonMatrix);
  }

  console.log(motherMatrix);
  // 먼저 두개의 배열이 필요하다.
  // 테두리에 있는 모든 값들이 담긴 배열
  // (i - 1) * columns + j
  const allCordinates = [];
  for (let i = 0; i < queries.length; i++) {
    // 위쪽 상단의 좌표들을 넣는다.
    const [x1, y1, x2, y2] = queries[i].map(cordinate => cordinate - 1);

    for (let j = y1; j < y2; j++) allCordinates.push(motherMatrix[x1][j]);
    // 오른쪽 측면의 값들을 넣는다. y2고정
    for (let j = x1; j < x2; j++) allCordinates.push(motherMatrix[j][y2]);
    // 아래쪽 좌표들을 넣는다. x2고정 y가 움직인다
    for (let j = y2; j > y1; j--) allCordinates.push(motherMatrix[x2][j]);
    // 왼쪽 좌표들을 넣는다. [y1고정]
    for (let j = x2; j > x1; j--) allCordinates.push(motherMatrix[j][y1]);

    answer.push(Math.min(...allCordinates));

    // allCordinates 끝을 앞으로 보내주기:)
    const end = allCordinates.pop();
    allCordinates.unshift(end);

    for (let j = y1; j < y2; j++) motherMatrix[x1][j] = allCordinates.shift();
    for (let j = x1; j < x2; j++) motherMatrix[j][y2] = allCordinates.shift();
    for (let j = y2; j > y1; j--) motherMatrix[x2][j] = allCordinates.shift();
    for (let j = x2; j > x1; j--) motherMatrix[j][y1] = allCordinates.shift();
  }
  return answer;
}

//  ((i-1) x columns + j)
console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));
