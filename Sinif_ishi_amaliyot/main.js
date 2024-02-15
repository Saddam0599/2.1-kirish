



let inp = document.getElementById('inp')
let add = document.getElementById('add')

let list = document.querySelector('.list');

let todos = getLocalStorage();

let id = new Date().getTime().toString()


add.addEventListener('click', function () {
    addToLocalStorage(id, inp.value);
    location.reload(true)
    inp.value = '';
})


window.addEventListener('DOMContentLoaded', function ()  {
    let display = todos.map((todo) => {
        return `
        <li class="item" data-id="${todo.id}">
            <h2>${todo.qiymat}</h2>
            <button onclick="deleteItem(${todo.id})" id="delBtn">delete</button>
        </li>
        `
    })

    display = display.join('');
    list.innerHTML = display;



})


function deleteItem(id) {
    let todos = getLocalStorage();
    let newItem = todos.filter((todo) => { todo.id !== id })
    console.log(newItem);
    // localStorage.setItem('todos', JSON.stringify(newItem));
    // location.reload(true)
}



















function getLocalStorage() {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
}


// function addToLocalStorage(id, qiymat) {
//     let item = { id, qiymat };
//     let items = getLocalStorage();
//     items.push(item);
//     localStorage.setItem('todos', JSON.stringify(items));
// }

function deleteItem(id) {
  let todos = getLocalStorage();
  let newItem = todos.filter((todo) => todo.id !== id);
  console.log(newItem);
  // localStorage.setItem('todos', JSON.stringify(newItem));
  // location.reload(true)
}
