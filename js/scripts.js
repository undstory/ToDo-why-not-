const input = document.querySelector('.todo__add');
const add = document.querySelector('.todo__add--btn');
const list = document.querySelector('.todo__list');

const todoFooter = document.querySelector(".todo__footer");
const itemsCounter = document.querySelector(".todo__footer--counter");

const filters = document.querySelector('.todo__footer--filters');

const btnAll = document.querySelector('.all');
const btnActive = document.querySelector('.active');
const btnCompleted = document.querySelector('.completed');
const btnClear = document.querySelector('.clear__completed');

let todo = [];

// theme
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
//  ----------------

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        if(input.value == "") {
            return false;
        }
        addTodo();
    }
})

add.addEventListener('click', (e) => {
    if(input.value == ""){
        return false;
    }
    addTodo();
})

function addTodo() {
    const task = document.createElement('li');
    const check = document.createElement('button');
    const content = document.createElement('p');
    const cancel = document.createElement('button');
    const wrapper = document.createElement("div");
    const num = todo.length + 1; 

    todo.push({
        id: num,
        value: input.value,
        state: false
    })

    check.classList.add('todo__circle');

    content.textContent = todo[num-1].value;

    task.classList.add('todo__item');
    task.classList.add('todos');
    task.dataset.id = num;
    task.dataset.state = false; 

    cancel.textContent = "x";
    cancel.classList.add("todo__cancel");
    
    wrapper.classList.add("todo__wrapper");

    wrapper.appendChild(check);
    wrapper.appendChild(content);
    task.appendChild(wrapper);
    task.appendChild(cancel);
    list.prepend(task);

    input.value = '';
    countItem();
}

list.addEventListener('click', e => {
    const closeBtn = e.target; 
    let flag = false;

    if(closeBtn.matches('.todo__cancel')) {
        closeBtn.parentElement.remove();
    
        for(let i=0; i < todo.length && flag === false; i++) {
            if(parseInt(closeBtn.parentElement.dataset.id) === todo[i].id) {
                todo.splice(i, 1); 
                flag = true;
            }
        }
    }

    countItem();
})

list.addEventListener('click', e => {
    const check = e.target;
    const task = check.parentElement.parentElement;

    if(check.matches('.todo__circle')){
        check.classList.toggle("clicked");
        check.nextElementSibling.classList.toggle("checked");
        task.classList.toggle("unactive");
        countItem();
    }
})

function countItem() {
    const itemCount = list.childElementCount;
    console.log(itemCount);
    if(itemCount > 0) {
        todoFooter.style.display = "flex";
    } else {
        todoFooter.style.display = "none";
    }

    const checkedElement = document.querySelectorAll(".checked").length;
    const unCheckedCount = itemCount - checkedElement;
    itemsCounter.innerText = unCheckedCount + " items left"; 
}

btnClear.addEventListener("click", () => {
    document.querySelectorAll(".unactive").forEach(element => {
        element.remove();
        countItem();
    })
})

btnActive.addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".unactive").forEach(element => {
        element.style.display = "none";        
    })
    document.querySelectorAll(".todos:not(.unactive)").forEach(element => {
        element.style.display = "flex";
    })
    this.classList.add("blue");
})

btnAll.addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".todos").forEach(element => {
        element.style.display = "flex";
    })
    this.classList.add("blue");
})

btnCompleted.addEventListener("click", function() {
    document.querySelector('.blue').classList.remove("blue");
    document.querySelectorAll(".unactive").forEach(element => {
        element.style.display = "flex";        
    })
    document.querySelectorAll(".todos:not(.unactive)").forEach(element => {
        element.style.display = "none";
    })
    this.classList.add("blue");
})
