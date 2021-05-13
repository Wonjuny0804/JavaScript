function solution(n, start, end, roads, traps) {
  let current = start;
  let prev = start;
  let arrived = false;
  let time = 0;
  const visited = [];
  const visitedTwice = [];

  while (!arrived) {
    // select options amoungst roads
    const possibleOptions = roads.filter(road => road[0] === current);
    if (!possibleOptions) break;

    // 탈출구가 바로 보인다면 바로 나간다.
    for (let i = 0; i < possibleOptions.length; i++) {
      if (possibleOptions[i][1] === end) {
        console.log(`time: ${time}`);
        time += possibleOptions[i][2];
        current = possibleOptions[i][1];
        arrived = true;
      }
    }
    if (arrived) break;

    possibleOptions.sort((optionA, optionB) => optionB[2] - optionA[2]);
    prev = current;
    current = possibleOptions[0][1];
    if (visited.includes(current)) visitedTwice.push(current);
    visited.push(current);

    // if trap reverse
    if (traps.includes(current) || visitedTwice.includes(current)) {
      roads = roads.map(road => {
        if (road[0] === current || road[1] === current) {
          const tmp = road[0];
          road[0] = road[1];
          road[1] = tmp;
        } return road;
      });
    }

    time += possibleOptions[0][2];
  }
  return time;
}

console.log(solution(3, 1, 3, [[1, 2, 2], [3, 2, 3]], [2]));
