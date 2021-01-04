const isHarshad = n => {
  const numberArray = Array.from(n + '');
  return !(n % numberArray.reduce((acc, item) => acc + +item, 0)) ? true : false;
};

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false