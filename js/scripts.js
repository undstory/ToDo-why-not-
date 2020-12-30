const todoInput = document.querySelector(".todo-inputBlock-ipt");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".todo-inputBlock-btn");
const itemsCounter = document.querySelector(".todo-footer-itemsCounter");


todoInput.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        e.preventDefault();
        addBtn.click();
    }
})

addBtn.addEventListener('click', function() {
    if(todoInput.value == "") {
        return false;
    }; 
    console.log(todoInput.value);
    const paragraph = document.createElement("p");
    const todosCircle = document.createElement("div");
    const cancelBtn = document.createElement('div');

    paragraph.classList.add("todos");
    paragraph.innerText = todoInput.value;

    cancelBtn.classList.add("todos-cancel");
    cancelBtn.innerText = "X";

    paragraph.appendChild(todosCircle);
    paragraph.appendChild(cancelBtn);
    todoList.appendChild(paragraph);  
})