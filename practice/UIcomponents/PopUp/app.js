// DOM elements
const $popupBg = document.querySelector('.popup-bg');
const $popupBtn = document.querySelector('.popup-btn');
const $popup = document.querySelector('.popup-btn').nextElementSibling.firstElementChild;
const $popupCloseBtn = document.querySelector('.popup-close');
const $popupInput = document.querySelector('.popup-input');
const $popupOk = document.querySelector('.popup-ok');
const $popupCancel = document.querySelector('.popup-cancel');

const closePopup = () => {
  $popupBg.style.display = 'none';
  $popup.style.display = 'none';
};


// Add Event listener
$popupBtn.addEventListener('click', () => {
  $popupBg.style.display = 'flex';
  $popup.style.display = 'flex';
});

$popupCloseBtn.addEventListener('click', closePopup);
$popupOk.addEventListener('click', closePopup);
$popupCancel.addEventListener('click', closePopup);


$popupInput.addEventListener('keyup', e => {
  if (e.key !== 'Enter') return;
  console.log(e.target.value);

  // 1. create element node
  const $popupMsg = document.createElement('div');

  // 2. text node.
  $popupMsg.textContent = `from popup: ${e.target.value}`;

  document.querySelector('body').appendChild($popupMsg);
  
  closePopup();
  e.target.value = '';
});