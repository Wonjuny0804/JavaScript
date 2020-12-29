function toWeirdCase(s) {
  const word = Array.from(s);
  const weirdArray = word.map(
    (letter, index) => index % 2 ? letter.toLowerCase() : letter.toUpperCase());
  return weirdArray.join('');
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
