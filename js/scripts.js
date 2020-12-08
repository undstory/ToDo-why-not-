const todoAddBtn = document.querySelector(".todo__add--btn");
const todoAdd = document.querySelector(".todo__add");



class Todo  {
    constructor(todo) {
        this.todo = todo;
        this.resume();
    }

    addTodo(task) {
        this.todo = task;
        const todoList = document.querySelector('.todo__list');
        const div = document.createElement('div');
        div.classList.add("todo__item");
        div.innerHTML = `<p>${this.todo}</p>`;
        todoList.appendChild(div);
    }

    resume() {
        return this.todo;
    }

}

const todoApp = new Todo();

todoAddBtn.addEventListener('click', function() {
    const value = todoAdd.value;
    console.log(value);
    if(value !== ""){
        todoApp.addTodo(value);

    }

})

todoAdd.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const value = e.target.value;

        if(value !== ""){
            todoApp.addTodo(value);
    
        }
    }

});