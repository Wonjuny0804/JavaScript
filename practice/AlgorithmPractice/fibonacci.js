const fibonacci = n => {
  if (n < 2 || typeof n !== 'number') return;
  const fib = [0, 1];
  for (let i = 0; i < n; i++) fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib[fib.length - 2];
};
console.log(fibonacci(9));