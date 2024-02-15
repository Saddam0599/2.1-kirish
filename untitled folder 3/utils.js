

function get(selection) {
    if (selection) {
        return document.querySelector(selection);
    } else {
        throw new Error('Element is not found')
    }
};

function getLocalStorage() {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}
function AddToLocalStorage(id,val) {
    let item = {id, val };
    let items = getLocalStorage();
    items.push(item)
    localStorage.setItem('todos', JSON.stringify(items))
}

export {get, getLocalStorage, AddToLocalStorage}