function getCurrentWeek() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const week = [];
  for (let i = date - day; i < date - day + 7; i++) {
    week.push(`${year}-${month + 1}-${i}`);
  }
  return week;
}

console.log(getCurrentWeek());

console.log(getCurrentWeek());