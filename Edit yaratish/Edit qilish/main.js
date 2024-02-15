let inp = document.getElementById("inp");
let add = document.getElementById("add");
let list = document.querySelector(".list");
let id = new Date().getTime().toString();
let editMode = false;
let cancel = document.querySelector("#cancel");

add.addEventListener("click", function () {
  if (editMode) {
    let todos = getLocalStorage();
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { id: todo.id, qiymat: inp.value };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    editMode = false;
  } else {
    if (inp.value != "") {
      addToLocalStorage(id, inp.value);
    }
  }
  
  inp.value = "";
  location.reload(true);
});

window.addEventListener("DOMContentLoaded", function () {
  let todos = getLocalStorage();
  let display = todos.map((todo) => {
    return `
        <li class="list-group-item col-md-6 d-flex justify-content-between align-items-start item" data-id="${todo.id}">
            <div class="ms-2 me-auto">
                <p>${todo.qiymat}</p>
            </div>
            <div class = "ms-3">
                <button class = "btn btn-danger" onclick="deleteItem('${todo.id}')" id="delBtn">trash</button>
                <button class = "btn btn-primary" onclick="editToggle('${todo.id}')"  id="editBtn">editItem</button>
            </div>
        </li>
        `;
  });

  display = display.join("");
  list.innerHTML = display;
});

function editToggle(clickedId) {
  let todos = getLocalStorage();
  editingtodo = todos.find((todo) => todo.id == clickedId);

  id = editingtodo.id;

  editMode = true;
  inp.value = `${editingtodo.qiymat}`;
  add.textContent = "Save";
  list.innerHTML = "";
  cancel.classList.remove("hidden");
}

function deleteItem(id) {
  let todos = getLocalStorage();
  let newItem = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(newItem));
  location.reload(true);
}

cancel.addEventListener("click", () => {
  location.reload(true);
});

function getLocalStorage() {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
}

function addToLocalStorage(id, qiymat) {
  let item = { id, qiymat };
  let items = getLocalStorage();
  items.push(item);
  localStorage.setItem("todos", JSON.stringify(items));
}
