// DOM Document Object Model
// console.log(document);

// // --------

// all
// //  console.log(document.all);
// let htmlCollection = document.all;
// for (let i = 0; i < htmlCollection.length; i++) {
//     console.log(htmlCollection [i]);
// }

// let htmlCollection = document.all;
// for (let i = 0; i < htmlCollection.length; i++) {
//   if (htmlCollection[i] === 'title') {
//     console.log(htmlCollection [i]);
//   }
// }
// // console.log(htmlCollection[4]); bodiy metodlarini ko`rish
// -----------

// getElementsByTagName
// let title = document.getElementsByTagName('title');
// title[0].textContent = 'n46';

// let btn = document.getElementsByTagName('button');
// console.log('btn'); //yoki btn o`zini console ga kirib yozsak ham bo`ladi

// let btn = document.getElementsByTagName("button");
// function change() {
//   console.log('changed');//funksiya ishladi
// }

// let btn = document.getElementsByTagName("button");
// function change() {
//   //qachonki shu funksiya ishlaganda
//   btn[0].textContent = "edit"; // //btni 0 indeksi document bilan getElementsByTagName taxmin qlganimadek array qaytariyapti  va bu arrayda faqat 0 index bor xolos, texstContent sifatidagi matinni o`zgartir
//   console.log("changed"); //funksiya ishladi
// }

// var paragraphs = document.getElementsByTagName("p");
// -------------

// getElementsByName
// var usernameInput = document.getElementsByName("username")[0];
// var emailInput = document.getElementsByName("email")[0];
// var subscribeCheckbox = document.getElementsByName("subscribe")[0];
// ---------------

// getElementsByClassName
// let box = document.getElementsByClassName("box");

//  var elements = document.getElementsByClassName("my-class");
//  console.log(elements);
// --------------------

// getElementsById
// let bokss = document.getElementById('boks');

// let bokss = document.getElementById("boks");
// function saddam() {
//   bokss.textContent = "singil element qaytaradi";
// }

 let box = document.querySelector('.delite');
// function Saddam() {
//   bokss.textContent = "button bosilganda o`chirish";
// }

// var myElement = document.querySelector("#myDiv");
// console.log(myElement.textContent); // Mening elementim
