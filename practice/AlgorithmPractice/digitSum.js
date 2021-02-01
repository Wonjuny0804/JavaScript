const digitSum = n => {
  if (n > 100000000) return;
  return Array.from(n + '').reduce((acc, item) => acc + (+item), 0);
};
console.log(digitSum(980));
