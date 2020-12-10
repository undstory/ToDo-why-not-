const todoAddBtn = document.querySelector(".todo__add--btn");
const todoAdd = document.querySelector(".todo__add");
const todoList = document.querySelector('.todo__list');
const todosStatus = document.querySelector('.todos__status');
const todosStatusItems = document.querySelector('.todos__status--items');

const todos = [];

class Todo  {
    constructor(todo) {
        this.todo = todo;
        this.resume();
    }

    addTodo(task) {
        this.todo = task;
        let div = document.createElement('div');
        div.classList.add("todo__item");
        div.innerHTML = `<div><button class="circle"></button>
                        <span>${this.todo}</span>
                        </div>
                        <button class="close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 
                        8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 
                        .707.707 0 8.84 8.132 16.971 0z"/></svg></button>`;
        todoList.prepend(div);
        todos.push(this.todo);
        console.log(todos);
        todosStatus.classList.remove('none');
    }

    resume() {
       
        todosStatusItems.innerText = `${todos.length} items left`;
        
    }

    clearInput() {
        todoAdd.value = "";
    }

}

const todoApp = new Todo();

todoAddBtn.addEventListener('click', function() {
    const value = todoAdd.value;
    console.log(value);
    if(value !== ""){
        todoApp.addTodo(value);
        todoApp.resume();

    } else {
        alert("Todo is empty!");
    }

})

todoAdd.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const value = e.target.value;

        if(value !== ""){
            todoApp.addTodo(value);
            todoApp.resume();
            todoApp.clearInput();
        } else {
            alert("Todo is empty!");
        }
    }

});