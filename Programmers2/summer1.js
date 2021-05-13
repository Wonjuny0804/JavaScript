const data = ['price=80 code=987654 time=2019062113', 'price=90 code=012345 time=2019062014', 'price=120 code=987654 time=2019062010', 'price=110 code=012345 time=2019062009', 'price=95 code=012345 time=2019062111'];

function solution(code, day, data) {
  // 먼저 원하는 기업의 데이터 필터링
  const targetCompanys = data.filter(item => item.split(' ')[1] === `code=${code}`);
  // 원하는 날짜만 뽑아낸다.
  const datesTargetCompanys = targetCompanys.filter(item => item.split(' ')[2].slice(5, 13) === day);
  // 날짜 순 sort
  datesTargetCompanys.sort((targetA, targetB) => targetA.split(' ')[2].slice(5) - targetB.split(' ')[2].slice(5));
  const answer = datesTargetCompanys.map(targetCompanyData => +targetCompanyData.split(' ')[0].slice(6));

  return answer;
}

solution('012345', '20190620', data);
