const todoAdd = document.querySelector('.todo__add'); 
const todoList = document.querySelector('.todo__list');
const todosStatus = document.querySelector('.todos__status');
const todoItem = document.querySelector('.todo__item');

const todos = [];

todoAdd.addEventListener('change', addTodo);


function addTodo(e) {
    const newTodo = e.target.value;
   
    const div = document.createElement('div');
        div.classList.add('todo__item');
        div.innerHTML = `<div><button class="circle"></button>
                        <span class="todo__item--item">${newTodo}</span>
                        </div>
                        <button class="close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 
                        8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 
                        .707.707 0 8.84 8.132 16.971 0z"/></svg></button>`
       
        todoList.prepend(div);
        updateStatus();
        todosStatus.classList.remove('none');
    e.target.value = '';
    
    removeItem();
}

todoList.addEventListener('click', (e) => {
    const todoItemItem = document.querySelector('.todo__item--item');
    if(e.target.classList.contains("circle")){
        
        e.target.classList.toggle("checked");
            if(e.target.classList.contains("checked")){
                
                e.target.nextElementSibling.classList.add('done');
                
            } else {
                
                e.target.nextElementSibling.classList.remove('done')
            }
    }

    if(e.target.classList.contains("checked")) {{
       const howMany = (todoList.children.length) - 1; 
       
        console.log(howMany);
    }}
})


function removeItem() {
   const closeBtns = todoList.querySelectorAll('.close');
   
    
   closeBtns.forEach((closeBtn) =>
   closeBtn.addEventListener("click", (e) => {
    e.target.closest(".todo__item").remove();
    updateStatus();
   })
   )
}

function updateStatus() {
    const howMany = todoList.children.length;
    const todosStatusItems = document.querySelector('.todos__status--items');
    todosStatusItems.innerHTML = `${howMany} items left`;
    if(howMany === 0) {
        todosStatus.classList.add('none');
    }
    return howMany;
}


const close = document.querySelector('.close');
close.addEventListener('click', function() {
    this.parentElement.remove();
    console.log(todos);
})