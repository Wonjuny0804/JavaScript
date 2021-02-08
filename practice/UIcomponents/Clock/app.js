const renderTime = (() => {
  const $secondHand = document.querySelector('.hand.second');
  const $minuteHand = document.querySelector('.hand.minute');
  const $hourHand = document.querySelector('.hand.hour');

  return () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    $secondHand.style.setProperty('--deg', seconds * 6);
    $minuteHand.style.setProperty('--deg', minutes * 6 + seconds * 0.1);
    $hourHand.style.setProperty('--deg', hours * 30 + minutes * 0.5 + seconds * (0.5 / 60));
    console.log('fuck you bongchul')
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  setInterval(renderTime, 1000);
});