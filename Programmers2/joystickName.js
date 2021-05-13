// GREEDY문제이다.
// 위가 빠를지 아래가 빠를지만 알면된다. 처음 시작은 A이므로 A에서 얼마나 떨어져있느
// 지 알면 된다.
// A -> B
//   X Y Z A B C D 알파벳은 총 26자이다.
// A = 65 Z = 90  Z - A + 1 = 26
// A + 13 = 78 N Z - 13 = 77 M
// A0 B1 ... N13 O14(12) ... Z(25)(1)
// 옆으로 이동 횟수는 전체 길이 - 1이다.
function solution(name) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    const distance = name.charCodeAt(i);
    console.log(`from A to ${name[i]}: ${distance - 'A'.charCodeAt(0)}`);
    console.log(`from Z to ${name[i]}: ${'Z'.charCodeAt(0) - distance + 1}`);
    const FromA = distance - 'A'.charCodeAt(0);
    const FromZ = 'Z'.charCodeAt(0) - distance + 1;
    const min = Math.min(FromA, FromZ);
    count += min;
  }
  count += name.length - 1;
  return count;
}

console.log(solution('JAN'));
// console.log('N'.charCodeAt(0) - 'A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0) - 'N'.charCodeAt(0));
// console.log('Z'.charCodeAt(0) - 'A'.charCodeAt(0));
