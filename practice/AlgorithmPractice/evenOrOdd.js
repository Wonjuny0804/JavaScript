// if문
function evenOrOdd(num) {
  if (num % 2) {
    return 'Odd';
  } else {return 'Even'; }
}
// 삼항 조건 연산자
function evenOrOdd2(num) {
  return num % 2 ? 'Odd' : 'Even';
}


console.log(evenOrOdd2(2)); // Even
console.log(evenOrOdd2(3)); // Odd
console.log(evenOrOdd2(1000)); // Even