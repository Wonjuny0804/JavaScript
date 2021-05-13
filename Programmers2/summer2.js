function solution(t, r) {
  // 데이터 조작
  let All = t.map((guest, index) => [guest, r[index], index]);
  const sent = [];
  let liftNumber = 0;
  console.log(All);

  while (sent.length !== t.length) {
    const inLine = All.filter(guest => guest[0] <= liftNumber);
    console.log(`liftNumber: ${liftNumber}, inLine: ${inLine}`);
    if (!inLine) {
      liftNumber++;
      break;
    } else {
      if (inLine.length >= 2) {
        inLine.sort((guestA, guestB) => guestA[1] - guestB[1]);

        const sameRs = [];
        // 우선순위가 같은 사람이 있는지 찾는다.
        for (let i = 1; i < inLine.length; i++) {
          if (inLine[0][1] === inLine[i][1]) sameRs.push(inLine[i]);
        }
        console.log(inLine);
        if (!sameRs) {
          sent.push(inLine[0]);

          All = All.filter(guest => guest[2] !== inLine[0][2]);
          liftNumber++;
          continue;
        }

        // sameRs Sort based on ID
        sameRs.sort((guestA, guestB) => guestA[2] - guestB[2]);
        sent.push(sameRs[0]);
        All = All.filter(guest => guest[2] !== sameRs[0][2]);
      } else {
        sent.push(inLine[0]);
        All = All.filter(guest => guest[2] !== inLine[0][2]);
      }
      liftNumber++;
    }
  }
  const answer = sent.map(guest => guest[2]);
  return answer;
}

// console.log(solution([0, 1, 3, 0], [0, 1, 2, 3]));
console.log(solution([7, 6, 8, 1], [0, 1, 2, 3]));
