const gcd = (n, m) => {
  while (m != 0) {
    const r = n % m;
    n = m;
    m = r;
  }
  return n;
};
const lcm = (n, m) => (n * m) / gcd(n, m);

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}