const isNotOverlapArray = array => {
  const check = [...array].sort((first, second) => first - second);
  for (let i = 0; i < check.length; i++) if (i + 1 !== check[i]) return false;
  return true; 
};
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false