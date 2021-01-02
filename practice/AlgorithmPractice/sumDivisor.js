const sumDivisor = num => {
  const divisor = [];
  for (let i = 1; i <= num; i++) if (!(num % i)) divisor.push(i);
  return divisor.reduce((acc, item) => acc + item, 0);
};
console.log(sumDivisor(12));