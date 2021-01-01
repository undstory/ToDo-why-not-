
const todoAdd = document.querySelector(".todo__add");
const todoList = document.querySelector(".todo__list");
const todoAddBtn = document.querySelector(".todo__add--btn");
const itemsCounter = document.querySelector(".todo-footer-itemsCounter");
const todoFooter = document.querySelector(".todo__footer");


todoAdd.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        e.preventDefault();
        todoAddBtn.click();
    }
})

todoAddBtn.addEventListener('click', function() {
    if(todoAdd.value == "") {
        return false;
    }; 
    console.log(todoAdd.value);
    const paragraph = document.createElement("p");
    const todosCircle = document.createElement("div");
    const cancelBtn = document.createElement('div');

    paragraph.classList.add("todo__item");
    paragraph.classList.add("todos");
    paragraph.innerText = todoAdd.value;

    todosCircle.classList.add("todos-circle");
    cancelBtn.classList.add("todos-cancel");
    cancelBtn.innerText = "X";

    paragraph.appendChild(todosCircle);
    paragraph.appendChild(cancelBtn);
    todoList.appendChild(paragraph); 
    
    todoAdd.value = "";
    
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
    if(itemCount > 0) {
        todoFooter.style.display = "flex";
    } else {
        todoFooter.style.display = "none";
    }
    const checkedElement = document.querySelectorAll(".checked").length;
    const unCheckedCount = itemCount - checkedElement;
    itemsCounter.innerText = unCheckedCount + " items left"; 
}

document.querySelector(".clear-completed").addEventListener("click", function() {
    document.querySelectorAll(".checked").forEach(element => {
        element.remove();
        countItem();
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

const el = document.getElementById('sortable');
const sortable = Sortable.create(el);