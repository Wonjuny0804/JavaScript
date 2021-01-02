const numberOfPrime = n => {
  const numbers = [];
  for (let i = 1; i <= n; i++) numbers.push(i);
  const result = numbers.reduce((acc, item) => {
    for (let j = 2; j < item; j++) if (!(item % j)) return acc;
    return acc + 1;
  }, 0);
  return result - 1;
};
console.log(numberOfPrime(17));