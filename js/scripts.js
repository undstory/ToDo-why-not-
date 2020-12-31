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

    paragraph.classList.add("todo__item");
    paragraph.classList.add("todos");
    paragraph.innerText = todoInput.value;

    todosCircle.classList.add("todos-circle");
    cancelBtn.classList.add("todos-cancel");
    cancelBtn.innerText = "X";

    paragraph.appendChild(todosCircle);
    paragraph.appendChild(cancelBtn);
    todoList.appendChild(paragraph); 
    
    todoInput.value = "";

    countItem();

    todosCircle.addEventListener('click', function() {
        todosCircle.classList.toggle("clicked");
        paragraph.classList.toggle("checked");
        countItem();
    })

    cancelBtn.addEventListener("click", function() {
        this.parentElement.remove();
        countItem();
    })
})

function countItem() {
    const itemCount = todoList.childElementCount;
    const checkedElement = document.querySelectorAll(".checked").length;
    const unCheckedCount = itemCount - checkedElement;
    itemsCounter.innerText = unCheckedCount + " items left"; 
}

document.querySelector(".clear-completed").addEventListener("click", function() {
    document.querySelectorAll(".checked").forEach(element => {
        element.remove();
    })
})

document.querySelector(".all").addEventListener("click", function() {
    document.querySelectorAll(".todos").forEach(element => {
        element.style.display = "flex";
    })
})

document.querySelector(".completed").addEventListener("click", function() {
    document.querySelectorAll(".checked").forEach(element => {
        element.style.display = "flex";        
    })
    document.querySelectorAll(".todos:not(.checked)").forEach(element => {
        element.style.display = "none";
    })
})

document.querySelector(".active").addEventListener("click", function() {
    document.querySelectorAll(".checked").forEach(element => {
        element.style.display = "none";        
    })
    document.querySelectorAll(".todos:not(.checked)").forEach(element => {
        element.style.display = "flex";
    })
})
