const elBtn = document.querySelector(".input-btn");
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");

const admin = [
  {
    fname: "Jamshid",
    lname: "Husanov",
  },
];

elBtn.addEventListener("click", (e) => {
  // console.log(admin[0].fname);
  // console.log(fName.value, "fname");
  // console.log(lName.value, "lname");

  if (lName.value == "" || fName.value == "") {
    alert("Toldirish shart");
  }

  if (admin[0].fname != fName.value && admin[0].lname != lName.value) {
    alert("Xato login parol");
  } else if (admin[0].fname == fName.value && admin[0].lname == lName.value) {
    localStorage.setItem("token", fName.value);
    window.location.href = './index.html';

  }
});
