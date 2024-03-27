const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
    const todoText = todoInput.value;

    if (todoText) {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        const deleteButton = document.createElement('button');

        label.innerText = todoText;
        deleteButton.innerText = 'remove';

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
});