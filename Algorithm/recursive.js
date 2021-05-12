function factorial(num) {
  if (num > 1) return num * factorial(num - 1);
  return num;
}

console.log(factorial(16));

// returns true if palindrome
function palindrome(string) {
  if (string.length <= 1) return true;

  if (string[0] === string[string.length - 1]) return palindrome(string.slice(1, string.length - 1));
  return false;
}

console.log(palindrome('awa'));
