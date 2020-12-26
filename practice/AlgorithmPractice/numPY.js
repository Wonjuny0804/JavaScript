const numPY = s => {
  let countP = 0;
  let countY = 0;
  const chkArr = Array.from(s);
  chkArr.forEach(value => {
    if (value === 'p' || value === 'P') countP++;
    if (value === 'y' || value === 'Y') countY++;
  });
  return countP === countY;
};

console.log(numPY('pPoooyY'));