
const todoAdd = document.querySelector(".todo__add");
const todoList = document.querySelector(".todo__list");
const todoAddBtn = document.querySelector(".todo__add--btn");
const itemsCounter = document.querySelector(".todo__footer--counter");
const todoFooter = document.querySelector(".todo__footer");
const small = document.querySelector(".small");

const container = document.querySelector(".container");
const themeSwitcherIcon = document.querySelector(".header__icon");

const themeSwitcher = document.querySelector(".header__icon");

let currentTheme = "light";
themeSwitcher.addEventListener('click', changeTheme, false);

function changeTheme() {
    if(currentTheme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        container.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
        themeSwitcherIcon.style.backgroundImage = "url(../images/icon-sun.svg)";
        currentTheme = "dark";
    } else if(currentTheme === "dark") {
        document.documentElement.removeAttribute('data-theme', 'dark');
        container.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
        themeSwitcherIcon.style.backgroundImage = "url(../images/icon-moon.svg)";
        currentTheme = "light";
    }
}

todoAdd.addEventListener('keyup',(e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        todoAddBtn.click();
    }
})

todoAddBtn.addEventListener('click', () => {
    if(todoAdd.value == "") {
        return false;
    }; 
    
    const todoWrapper = document.createElement("div");
    const todosCircle = document.createElement("button");
    const paragraph = document.createElement("p");
    const todoLittleWrapper = document.createElement("div");
    const cancelBtn = document.createElement('button');

    todoWrapper.classList.add("todo__item");
    todoWrapper.classList.add("todos");
    paragraph.innerText = todoAdd.value;
    todoLittleWrapper.classList.add("todo__wrapper")
    todosCircle.classList.add("todo__circle");
    cancelBtn.classList.add("todo__cancel");
    cancelBtn.innerText = "X";

    todoLittleWrapper.appendChild(todosCircle);
    todoLittleWrapper.appendChild(paragraph);
    todoWrapper.appendChild(todoLittleWrapper);
    todoWrapper.appendChild(cancelBtn);
    todoList.prepend(todoWrapper); 
    
    todoAdd.value = "";
    
    countItem();

    todosCircle.addEventListener('click', () => {
        todosCircle.classList.toggle("clicked");
        paragraph.classList.toggle("checked");
        todoWrapper.classList.toggle("unactive");
        countItem();
    })

    todosCircle.addEventListener('keyup', () => {
        todosCircle.classList.toggle("clicked");
        paragraph.classList.toggle("checked");
        todoWrapper.classList.toggle("unactive");
        countItem();
    })

    cancelBtn.addEventListener("click", function(){
        this.parentElement.remove();
        countItem();
    })

    cancelBtn.addEventListener("keyup", function(){
        this.parentElement.remove();
        countItem();
    })
})


function countItem() {
    const itemCount = todoList.childElementCount;
    if(itemCount > 0) {
        todoFooter.style.display = "flex";
        small.style.display = "flex";
    } else {
        todoFooter.style.display = "none";
        small.style.display = "none";
    }
    const checkedElement = document.querySelectorAll(".checked").length;
    const unCheckedCount = itemCount - checkedElement;
    itemsCounter.innerText = unCheckedCount + " items left"; 
}

document.querySelector(".clear__completed").addEventListener("click", () => {
    document.querySelectorAll(".unactive").forEach(element => {
        element.remove();
        countItem();
    })
})

document.querySelector(".all").addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".todos").forEach(element => {
        element.style.display = "flex";
    })
    this.classList.add("blue");
})

document.querySelector(".completed").addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".unactive").forEach(element => {
        element.style.display = "flex";        
    })
    document.querySelectorAll(".todos:not(.unactive)").forEach(element => {
        element.style.display = "none";
    })
    this.classList.add("blue");
})

document.querySelector(".active").addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".unactive").forEach(element => {
        element.style.display = "none";        
    })
    document.querySelectorAll(".todos:not(.unactive)").forEach(element => {
        element.style.display = "flex";
    })
    this.classList.add("blue");
})

const el = document.getElementById('sortable');
const sortable = Sortable.create(el);