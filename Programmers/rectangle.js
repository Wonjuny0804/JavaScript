const solution = (w, h) => {
  const gcd = (a, b) => {
    if (a < b) {
      const tmp = a;
      a = b;
      b = tmp;
    }
    if (a % b === 0) return b;
    return gcd(b, a % b);
  };
  return w * h - w - h + gcd(w, h);
};

console.log(solution(8, 12));
