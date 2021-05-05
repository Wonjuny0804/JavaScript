// 프로그래머스 2단계
// 오픈채팅방 문제
const record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'];
//  result ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

function solution(records) {
  if (!records) return;

  const map = new Map();

  const actions = records.map(record => {
    const [action, uid, nickname] = record.split(' ');

    if (nickname) map.set(uid, nickname);

    const lastpart = action === 'Enter' ? [uid, '들어왔습니다.'] : action === 'Leave' ? [uid, '나갔습니다.'] : '';

    return lastpart;
  });

  // 빈 문자열 제거
  const noEmptyString = actions.filter(record => record !== '');

  // add nickname
  const result = noEmptyString.map(record => `${map.get(record[0])}님이 ${record[1]}`);

  return result;
}
console.log(solution(record));
