function solution(string) {
  let shortestCompression = string;

  for (let i = 1; i < Math.floor(string.length / 2) + 1; i++) {
    let currentCompression = '';
    let temp = '';

    let count = 1;
    temp = string.substr(0, i);

    for (let j = i; j < string.length; j += i) {
      if (temp === string.substr(j, i)) count++;
      else {
        if (count > 1) currentCompression += count;
        currentCompression += temp;
        temp = string.substr(j, i);
        count = 1;
      }
    }

    if (count > 1) currentCompression += count;

    currentCompression += temp;
    console.log(currentCompression);
    if (currentCompression.length < shortestCompression.length) shortestCompression = currentCompression;
  }
  console.log(shortestCompression);
  return shortestCompression.length;
}

console.log(solution('ababcdcdababcdcd'));
