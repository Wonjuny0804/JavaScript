// Global state
let todos = [];

$todos = document.querySelector('.todos');
$inputTodo = document.querySelector('.input-todo');


const render = () => {
  todos.innerHTML = '';
  todos.forEach(({ id, content, completed }) => {
    const $li = document.createElement('li');
    const $input = document.createElement('input');
    const $label = document.createElement('label');
    
    $li.setAttribute('id', id);
    $li.setAttribute('class', 'todo-item');


    $input.setAttribute('id', `ck-${id}`);
    $input.setAttribute('type', 'checkbox');
    if (completed) $input.setAttribute('checked', 'checked');
    // $input.setAttribute('', `${completed ? 'checked' : ''}`);
    $label.setAttribute('for', `ck-${id}`);

    
    $label.textContent = content;
    
    $li.appendChild($input);
    $li.appendChild($label);
    
    $todos.appendChild($li);
  });
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

document.addEventListener('DOMContentLoaded', fetchTodos);
$todos.onchange = e => {
  const id = e.target.parentNode.id;
  
  todos.map
}