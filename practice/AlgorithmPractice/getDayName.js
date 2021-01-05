const getDayName = (a, b) => {
  const day = new Date(`2016/${a}/${b}`).getDay();
  if (day === 0) return 'SUN';
  else if (day === 1) return 'MON';
  else if (day === 2) return 'TUE';
  else if (day === 3) return 'WED';
  else if (day === 4) return 'THU';
  else if (day === 5) return 'FRI';
  else return 'SAT';
};
console.log(getDayName(5, 24)); // TUE