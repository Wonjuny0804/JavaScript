const getCurrentWeek = (function () {
  const today = new Date(`2020/04/1`);
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  
  const week = [];
  for (let i = date - day; i < date - day + 7; i++) {
    week.push(`${year}-${month + 1}-${i}`);
  }
  return week;
})();

console.log(getCurrentWeek);