const digitSum = n => {
  if (n > 100000000) return;
  const numberArray = Array.from(n + '');
  return numberArray.reduce((acc, item) => acc + (+item), 0);
};
console.log(digitSum(987));
