function solution(phone_number) {
  return Array.from(phone_number).map((digit, index) => {
    if (index < phone_number.length - 4) return '*';
    return digit;
  }).join('');
}

console.log(solution('027778888'));