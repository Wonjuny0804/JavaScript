// Write Javascript code here!
const items = document.querySelectorAll('.item');

document.body.addEventListener('click', ({ target }) => {
  if (target.classList.contains('context')) return;
  if (target.classList.contains('item')) {
    target.classList.toggle('open');
    items.forEach(element => {
      if (element !== target) element.classList.remove('open');
    });
  }
});
