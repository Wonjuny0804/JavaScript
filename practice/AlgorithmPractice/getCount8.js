/*
1~10000의 숫자 중 8이 등장하는 회숫 구하기
*/ 
const getCount8 = () => {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < (i + '').length; j++) {
      if ((i + '')[j] === '8') count++;
    }
  }
  return count;
};
console.log(getCount8());
