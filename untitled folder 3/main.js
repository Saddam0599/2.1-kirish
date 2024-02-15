import { AddToLocalStorage, get, getLocalStorage } from "./utils.js";


let inp = get('#inp');
let add = get('#add');
let list = get('.list'); 



let id = new Date().getTime().toString()


let todos = getLocalStorage();

add.addEventListener('click', function () {
    AddToLocalStorage(id, inp.value);
    location.reload(true)
})

window.addEventListener('DOMContentLoaded', function(){
    let display = todos.map((todo) => {
        return `
        <li data-id="${todo.id}">
        <h2>${todo.val}</h2>
        <button class="removeItem">delete</button>
        </li>

        `
    })

    display = display.join('')
    list.innerHTML = display;



    let rmItem = document.querySelectorAll('.removeItem');
    console.log(rmItem);
})










function deleteItem(id) {
    let todos = getLocalStorage()
    todos =todos.filter((todo) => todo.id === id);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// deleteItem('1706855402611');
// deleteItem('1706856079365')


// localStorage.removeItem('todos');