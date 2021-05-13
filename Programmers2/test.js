function solution(files) {
  // HEAD NUMBER TAIL 순으로 나누기
  const divided = files.map(file => {
    const headNumberTail = [];
    let lastIndex = 0;
    for (let i = 0; i < file.length; i++) {
      if (file.charCodeAt(i) >= 48 && file.charCodeAt(i) <= 57) {
        headNumberTail.push(file.substring(0, i));
        lastIndex = i;
        break;
      }
    }

    for (let i = lastIndex; i < file.length; i++) {
      if (file.charCodeAt(i) < 48 || file.charCodeAt(i) > 58) {
        headNumberTail.push(file.substring(lastIndex, i));
        lastIndex = i;
        break;
      }
    }
    headNumberTail.push(file.substring(lastIndex));
    return headNumberTail;
  });
  console.log(divided);

  // sort divided
  divided.sort((file1, file2) => {
    if (file1[0].toUpperCase() !== file2[0].toUpperCase()) {
      return file1[0] > file2[0] ? 1 : -1;
    }
    return file1[1] - file2[1];
  });
  // 문자열 합치기

  const answer = divided.map(file => file.join(''));
  console.log(answer);
  return answer;
}

// solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']);
solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']);
