const todoList = document.getElementById('todo-list');
const addTaskForm = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const newTaskText = newTaskInput.value;

  // Create a new list item for the task
  const newListItem = document.createElement('li');
  newListItem.textContent = newTaskText;

  // now i shouldAdd the new list item to the To Do list
  todoList.appendChild(newListItem)
});