// Global state
let todos = [];

// get DOM elements
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $button = document.querySelector('.btn');
const $completeTodo = document.querySelector('.checkbox');

const render = () => {
  $todos.innerHTML = '';
  todos.forEach(({ id, content, completed }) => {
    const $li = document.createElement('li');
    const $input = document.createElement('input');
    const $label = document.createElement('label');
    const $i = document.createElement('i');
    const $complete = document.querySelector('.completed-todos');
    const $active = document.querySelector('.active-todos');
    
    $li.setAttribute('id', id);
    $li.setAttribute('class', 'todo-item');

    $input.setAttribute('id', `ck-${id}`);
    $input.setAttribute('class', 'checkbox');
    $input.setAttribute('type', 'checkbox');
    if (completed) $input.setAttribute('checked', 'checked');
    
    $label.setAttribute('for', `ck-${id}`);
    $label.textContent = content;

    $i.classList.add('remove-todo', 'far', 'fa-times-circle');
    
    $li.appendChild($input);
    $li.appendChild($label);
    $li.append($i);

    $complete.textContent = todos.filter(todo => todo.completed).length;
    $active.textContent = todos.filter(todo => !todo.completed).length;

    if (completed) $label.classList.add('done');

    // <i class="remove-todo far fa-times-circle"></i>
    $todos.appendChild($li);
  });

  if (todos.map(({ completed }) => completed).reduce((acc, complete) => acc && complete, true)) $completeAll.checked = true;
  if (todos.map(({ completed }) => completed).reduce((acc, complete) => !acc && !complete, false)) $completeAll.checked = false;
};
const fetchTodos = () => {
  // TODO: 서버로부터 todos 데이터를 취득한다. 잠정처리..
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];
  todos = [...todos].sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

const addTodo = content => {
  const generateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
};

$inputTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = e.target.value;
  addTodo(content);
  e.target.value = '';
};

$todos.onchange = e => {
  todos = todos.map(todo => todo.id === +e.target.parentNode.id ? { ...todo, completed: !todo.completed } : todo);
  render();
};

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
};

$completeAll.onclick = e => {
  if (e.target.checked) todos = todos.map(todo => ({ ...todo, completed: true }));
  else todos = todos.map(todo => ({ ...todo, completed: false }));

  todos = e.target.checked ? todos.map(todo => ({ ...todo, completed: true })) : todos.map(todo => ({ ...todo, completed: false }));
  render();
};

$button.onclick = e => {
  todos = todos.filter(({ completed }) => !completed);
  render();
};

document.addEventListener('DOMContentLoaded', fetchTodos);
