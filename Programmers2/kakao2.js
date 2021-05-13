function solution(places) {
  const placesToArray = places.map(place => {
    const array = place.map(row => row.split(''));
    return array;
  });

  // 먼저 P를 찾는다.
  const PLocations = placesToArray.map(place => {
    // find P
    const plocation = [];
    for (let i = 0; i < place[0].length; i++) {
      for (let j = 0; j < place.length; j++) {
        if (place[i][j] === 'P') plocation.push([i, j]);
      }
    }
    return plocation;
  });
  // p 끼리의 거리를 계산해서 둘 사이의 거리가 2 이하인 좌표들만 묶는다.
  const closePs = PLocations.map(PLocation => {
    const closeLocations = [];
    for (let j = 0; j < PLocation.length; j++) {
      for (let k = j + 1; k < PLocation.length; k++) {
        if (Math.abs(PLocation[j][0] - PLocation[k][0])
          + Math.abs(PLocation[j][1] - PLocation[k][1]) <= 2) {
          closeLocations.push([PLocation[j], PLocation[k]]);
        }
      }
    }
    return closeLocations;
  });
  // 각각의 가까이 앉은 사람들 사이에 파티션이 존재하는지만 알면된다. 없으면 0를 Return 있으면 1을 return
  const answer = closePs.map((closeP, index) => {
    for (let i = 0; i < closeP.length; i++) {
      if (Math.abs(closeP[i][0][0] - closeP[i][1][0])
        + Math.abs(closeP[i][0][1] - closeP[i][1][1]) <= 1) {
        return 0;
      }

      if (closeP[i][0][0] === closeP[i][1][0] || closeP[i][0][1] === closeP[i][1][1]) {
        if (closeP[i][0][0] === closeP[i][1][0]) {
          const checkX = closeP[i][0][0];
          const checkY = (closeP[i][0][1] + closeP[i][1][1]) / 2;
          if (placesToArray[index][checkX][checkY] !== 'X') return 0;
        }
        if (closeP[i][0][1] === closeP[i][1][1]) {
          const checkX = (closeP[i][0][0] + closeP[i][1][0]) / 2;
          const checkY = closeP[i][0][1];
          if (placesToArray[index][checkX][checkY] !== 'X') return 0;
        }
      } // 대각선으로 서로 가까운 경우
      else if (placesToArray[index][closeP[i][0][0]][closeP[i][1][1]] !== 'X'
        || placesToArray[index][closeP[i][1][0]][closeP[i][0][1]] !== 'X') return 0;
    }

    return 1;
  });

  return answer;
}

// [ [ 0, 0 ], [ 2, 0 ] ], => 1, 0
// [ [ 0, 3 ], [ 1, 2 ] ], => 1, 3 | 0, 2
// [ [ 0, 3 ], [ 1, 4 ] ],
// [ [ 1, 2 ], [ 1, 4 ] ],
// [ [ 4, 3 ], [ 4, 4 ] ]
const ex = [['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'], ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'], ['PXOPX', 'OXOXP', 'OXPXX', 'OXXXP', 'POOXX'], ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'], ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP']];
const ex1 = [['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP']];
solution(ex);
