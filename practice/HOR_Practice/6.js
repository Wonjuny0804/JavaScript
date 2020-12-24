let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];



// function toggleCompletedById(id) {
//   todos.forEach((val) => {
//     if(val['id'] === id) val.completed = !val.completed;
//   });
// }

function toggleCompletedById(id) {
  todos.forEach((todo, index) => {
    if (todo.id === id) todos[index] = ({...todo, completed: !todo.completed });
  });
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/