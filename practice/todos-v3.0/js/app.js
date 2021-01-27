// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $inputTodo = document.querySelector('.input-todo');
const $button = document.querySelector('.btn');
const $completeAll = document.querySelector('.complete-all');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';

  const _todos = todos.filter(({ completed }) => navState === 'completed' ? completed : navState === 'active' ? !completed : true
  );

  _todos.forEach(({ id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html; // ''
  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;
};

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ].sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  console.log('[addTodo]', todos);

  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  
  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);

  render();
};

const toggleCompleteAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));

  render();
};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  render();
}


// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ key, target }) => {
  console.log(target.value);
  const content = target.value.trim();
  if (key !== 'Enter' || content === '') return;
  addTodo(content);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$button.onclick = e => {
  todos = todos.filter(todo => !todo.completed);

  render();
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$nav.onclick = ({ target }) => {
  if (target === $nav) return;

  changeNavState(target.id);
};