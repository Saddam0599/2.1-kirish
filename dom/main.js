let val = document.getElementById('val');
const demo = document.getElementById('demo');



// function addToLocalStorage() {
//     localStorage.setItem('todo', val.value);
// }


// demo.textContent = localStorage.getItem('todo');

// let LS = {
//     todo: []
// }


function getLocalstorage() {
    if (localStorage.getItem('todo')) {
        return JSON.parse(localStorage.getItem('todo'))
    } else {
        return []
    }
}


function addToLocalStorage(qiymat) {
    let item = { qiymat };
    let items = getLocalstorage();
    items.push(item);
    localStorage.setItem('todo', JSON.stringify(items));
}


let list = document.querySelector('.list');
let todos = getLocalstorage()




list.innerHTML = todos.map((item) => {
    return `
    <li>${item.qiymat}</li>
    <button>delete</button>
    `
});








