const alphaString = s => {
  const regExp = /[0-9]{4,6}/;
  return regExp.test(s);
};

console.log(alphaString('1234'));
console.log(alphaString('9014'));
console.log(alphaString('723'));
console.log(alphaString('a234'));
console.log(alphaString(''));
console.log(alphaString());