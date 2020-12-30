const hideNumbers = (str => {
  const phoneNumber = Array.from(str);
  const secure = phoneNumber.map((digit, index) => {
    if (index < phoneNumber.length - 4) return '*';
    return digit;
  });
  return secure.join('');
});

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888