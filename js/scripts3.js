const todoAdd = document.querySelector('.todo__add'); 
const todoAddBtn = document.querySelector('.todo__add--btn');
const todoList = document.querySelector('.todo__list');

class Todo {
    constructor(id, todo, isActive = true ) {
        this.id = id,
        this.todo = todo,
        this.isActive = isActive
    }
}

const todos = [];



const addTodo = (e) => {
    
        if(e.key === "Enter"){
            const newTodo = e.target.value;
            let giveMeId = todos.length + 1;
            if(newTodo.length === 0){
                alert("Something went wrong...");
            } else {
                const todo = new Todo(giveMeId, newTodo);
                todos.push(todo);
                console.log(todos);
                createTodo(todo);
                e.target.value = "";
                
            }
        }
}

const createTodo = (todo) => {

    
    

    
    const div = document.createElement('div');
        
    div.classList.add('todo__item');
    div.innerHTML = `<div><button class="circle"></button>
                        <span class="todo__item--item">${todo.todo}</span>
                        </div>
                        <button class="close" onclick="removeItem(${todo.id})"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 
                        8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 
                        .707.707 0 8.84 8.132 16.971 0z"/></svg></button>`
       
    todoList.prepend(div);
   
   

    
}

const removeItem = ( id) => {
 
    const itemToRemove = todos.find(item => item.id === id);
    todos.splice(todos.indexOf(itemToRemove));



}



todoAdd.addEventListener('keyup', addTodo);
