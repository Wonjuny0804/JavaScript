const generateRange = (from, to) => {
  const res = [];
  for (let i = from; i <= to; i++) res.push(i);
  return res;
};
console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange(3, 15)); // [ 10, 11, 12, 13, 14, 15 ]
