const addButton =document.getElementById('add-button');
const todoInput =document.getElementById('todo-input');
const todoList =document.getElementById('todo-List');

addButton.addEventListener('click', function()) {
    const newTask = todoInput.ariaValueMax.trim();
    if(newTask !== '') {
        const li = document.createElement('li');
        li.textContent =newTask;
        const deleteButton =document.createElement('button');
        deleteButton.addEventListener('click',function() {
            li.remove();
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.ariaValueMax='';
    }
})    