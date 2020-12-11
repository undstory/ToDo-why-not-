const todoAddBtn = document.querySelector(".todo__add--btn");
const todoAdd = document.querySelector(".todo__add");
const todoList = document.querySelector('.todo__list');
const todosStatus = document.querySelector('.todos__status');
const todosStatusItems = document.querySelector('.todos__status--items');



const todos = [];

class Todo {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}




todoAdd.addEventListener('keypress',function(e) {
    
    if(e.key === "Enter") {
        const newTodo = e.target.value;


        if(newTodo !=="") {
            todos.push(new Todo(id(), newTodo));
            e.target.value = "";
            addTodo();
        } else {
            alert('Todo is empty!');
        }


}
});


function id() {
    const id = Math.floor(Math.random() * 99);
    return id
}

