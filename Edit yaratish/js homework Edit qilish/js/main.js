let groupsFilter = document.querySelector(".groups-filter");
let groupsSelect = document.querySelector(".groups-select");
let studentForm = document.querySelector(".student-form");
let saveBtn = document.querySelector(".save-btn");
let studentModal = document.querySelector("#studentModal");
let studentsTableBody = document.querySelector(".students-table tbody");
let openModalBtn = document.querySelector(".open-modal-btn");

groupsFilter.innerHTML = `<option value="all">All</option>`;

groups.map((gr) => {
  groupsFilter.innerHTML += `<option value="${gr}">${gr}</option>`;
  groupsSelect.innerHTML += `<option value="${gr}">${gr}</option>`;
});

let studentsJson = localStorage.getItem("students");

let students = JSON.parse(studentsJson) || [];

let selected = null;

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let elements = this.elements;

  let student = {
    firstName: elements.firstName.value,
    lastName: elements.lastName.value,
    group: elements.group.value,
    doesWork: elements.doesWork.checked,
  };

  if (this.checkValidity()) {
    bootstrap.Modal.getInstance(studentModal).hide();
    if (selected == null) {
      students.push(student);
    } else {
      students[selected] = student;
    }
    localStorage.setItem("students", JSON.stringify(students));
    getStudents();
  } else {
    this.classList.add("was-validated");
  }

  console.log(students);
});
// edit btn
function getStudentRow({ firstName, lastName, group, doesWork }, i) {
  return `
    <tr>
      <th scope="row">${i + 1}</th>
      <td scope="col">${firstName}</td>
      <td scope="col">${lastName}</td>
      <td scope="col">${group}</td>
      <td scope="col">${doesWork}</td>
      <td scope="col" class="text-end">
        <button onClick="editStudent(${i})" class="btn btn-primary mr-3" data-bs-toggle="modal" data-bs-target="#studentModal">Edit</button>
        <button class="btn btn-danger" onClick="deleteStudent(${i})" >Delete</button>
      </td>
  </tr>
    `;
}

function getStudents() {
  studentsTableBody.innerHTML = "";
  students.map((student, i) => {
    studentsTableBody.innerHTML += getStudentRow(student, i);
  });
}

getStudents();

function editStudent(i) {
  selected = i;
  saveBtn.textContent = "Save student";
  let { firstName, lastName, group, doesWork } = students[i];
  let elements = studentForm.elements;
  elements.firstName.value = firstName;
  elements.lastName.value = lastName;
  elements.group.value = group;
  elements.doesWork.checked = doesWork;
}

openModalBtn.addEventListener("click", () => {
  selected = null;
  saveBtn.textContent = "Add student";
  let elements = studentForm.elements;
  elements.firstName.value = "";
  elements.lastName.value = "";
  elements.group.value = "";
  elements.doesWork.checked = false;
});

function deleteStudent(i) {
  let isDelete = confirm("Do you want to delete this student ?");
  if (isDelete) {
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    getStudents();
  }
}
