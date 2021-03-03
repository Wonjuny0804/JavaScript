const solution = (bridge_length, weight, truck_weights) => {
  const trucks = [...truck_weights];
  const otherSide = [];
  let bridge = [];
  let time = 0;
  while (otherSide.length !== truck_weights.length) {
    if (bridge.reduce((acc, truck) => acc + truck[0], 0) < weight) {
      if (weight - bridge.reduce((acc, truck) => acc + truck[0], 0) >= trucks[0]) {
        bridge.push([trucks[0], 0]);
        trucks.shift();
      }
    }

    bridge = bridge.map(truck => [truck[0], truck[1] + 1]);

    if (bridge[0][1] === bridge_length) {
      otherSide.push(bridge[0]);
      bridge.shift();
    }
    time += 1;
  }
  return time + 1;
};

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
