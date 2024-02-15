let inp = document.getElementById('inp');
let add = document.getElementById('add');
let list = document.querySelector('.list');
let id = new Date().getTime().toString();

add.addEventListener('click', function () {
    addToLocalStorage(id, inp.value);
    inp.value = '';
    location.reload(true);
});

window.addEventListener('DOMContentLoaded', function ()  {
    let todos = getLocalStorage();
    let display = todos.map((todo) => {
        return `
        <li class="item" data-id="${todo.id}">
            <h2>${todo.qiymat}</h2>
            <button onclick="deleteItem('${todo.id}')" id="delBtn">trash</button>
            <button onclick="editItem()"  id="editBtn">editItem</button>
        </li>
        `;
    });
    
    display = display.join('');
    list.innerHTML = display;
});

function deleteItem(id) {
    let todos = getLocalStorage();
    let newItem = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newItem));
    location.reload(true);


}

let modal = document.querySelector('.modal')

function editItem() {
    modal.classList.add('show');
    
}




function getLocalStorage() {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
}

function addToLocalStorage(id, qiymat) {
    let item = { id, qiymat };
    let items = getLocalStorage();
    items.push(item);
    localStorage.setItem('todos', JSON.stringify(items));
}


// editItem funksiyasini boshqarish
function editItem(id) {
    modal.classList.add('show');

    // Modal oynasiga qiymatni kiritish uchun inputni to'ldirish
    let editInput = document.getElementById('editInput');
    let todos = getLocalStorage();
    let todoToEdit = todos.find(todo => todo.id === id);
    editInput.value = todoToEdit.qiymat;

    // Save tugmasi bosilganda ro'yxatdagi qiymatni yangilash
    let saveEditBtn = document.getElementById('saveEdit');
    saveEditBtn.addEventListener('click', function() {
        todoToEdit.qiymat = editInput.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        location.reload(true);
    });

    // Cancel tugmasi bosilganda modal oynasini yopish
    let cancelEditBtn = document.getElementById('cancelEdit');
    cancelEditBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
}
