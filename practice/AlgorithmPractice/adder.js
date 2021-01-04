const adder = (x, y) => {
  const res = [];
  const start = x >= y ? y : x;
  const end = x >= y ? x : y;
  for (let i = start; i <= end; i++) res.push(i);
  return res.reduce((acc, item) => acc + item, 0);
};
console.log(adder(3, 5)); // 12