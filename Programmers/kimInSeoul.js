function solution(seoul) {
  const where = seoul.indexOf('Kim');
  return `김서방은 ${where}에 있다`; 
}

console.log(solution(['Jane', 'Kim']));