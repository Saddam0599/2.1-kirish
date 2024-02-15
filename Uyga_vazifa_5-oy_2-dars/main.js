// click va change event DomContentLoaded event
//   <!-- <ul class="list">

//     </ul> -->
// <!-- const menu = [
//   {
//     id: 1,
//     title: "buttermilk pancakes",
//     category: "breakfast",
//     price: 15.99,
//     img: "./images/item-1.jpeg",
//     desc: "Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
//   },
//   {
//     id: 2,
//     title: "diner double",
//     category: "lunch",
//     price: 13.99,
//     img: "./images/item-2.jpeg",
//     desc: " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
//   },
//   {
//     id: 3,
//     title: "godzilla milkshake",
//     category: "shakes",
//     price: 6.99,
//     img: "./images/item-3.jpeg",
//     desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
//   },
//   {
//     id: 4,
//     title: "country delight",
//     category: "breakfast",
//     price: 20.99,
//     img: "./images/item-4.jpeg",
//     desc: " Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
//   },
//   {
//     id: 5,
//     title: "egg attack",
//     category: "lunch",
//     price: 22.99,
//     img: "./images/item-5.jpeg",
//     desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90",
//   },
//   {
//     id: 6,
//     title: "oreo dream",
//     category: "shakes",
//     price: 18.99,
//     img: "./images/item-6.jpeg",
//     desc: " Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
//   },
//   {
//     id: 7,
//     title: "bacon overflow",
//     category: "breakfast",
//     price: 8.99,
//     img: "./images/item-7.jpeg",
//     desc: " carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
//   },
//   {
//     id: 8,
//     title: "american classic",
//     category: "lunch",
//     price: 12.99,
//     img: "./images/item-8.jpeg",
//     desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
//   },
//   {
//     id: 9,
//     title: "quarantine buddy",
//     category: "shakes",
//     price: 16.99,
//     img: "./images/item-9.jpeg",
//     desc: " skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing",
//   },
// ];
// let hodisa = document.getElementById('event');

// let = list document.querySelector('.list');

// // hodisa


// window.addEventListener('DOMContentLoaded', function () {
//     let display = menu.map((item) => {
//         return `
//         <li>${item.title}</li>
//     `
//     })
//     display = display.join('');
//     list.innerHTML = display;
// }) -->

// ----------------------------===============================---------------------------------


// // JavaScript dasturlashida, DOM (Document Object Model) orqali brauzer yoki boshqa mamlakatlar ko'rsatkichidan foydalaniladi. window brauzer obyekti, asosan, brauzer oynasini va undagi xususiyatlar bilan bog'liq boshqa funksiyalarni o'z ichiga oladi.
// // window brauzer obyekti brauzer oynasini ifodalaydi. U asosan global obyekt sifatida ishlaydi va brauzerdagi bir nechta katta funksiyalarni o'z ichiga oladi. Buning orqali, HTML dokumentini tahrirlash, yuklab olish, oynani o'lchash, va boshqa harakatlarni amalga oshirish mumkin.

// // windowga misollar

// // Oynaning o'lchami
//    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//    console.log(`Oyna o'lchami: ${width} x ${height}`);


// // Saqlangan URL manzil
//    let currentURL = window.location.href;
//    console.log(`Joriy saqlangan URL: ${currentURL}`);


// // Brauzerning nomi
//    let browserName = window.navigator.appName;
//    console.log(`Brauzer nomi: ${browserName}`);


// // Dokumentning matni
//    let documentText = window.document.body.textContent;
//    console.log(`Dokument matni: ${documentText}`);



// // Brauzerdagi sahifaning yuqori uchidagi bo'sh joy
//    window.scrollTo(0, 0); // Sahifaning yuqori qismiga o'tish



// // Brauzer oynasida yangi ochilgan oynaning ob'ektini olmoq
//    let newWindow = window.open('https://www.example.com', '_blank');


// // Oyna ishora
//    window.alert('Salom, dunyo!');


// // Oynaning judayam oson qismi
//    let documentBody = window.document.body;



// // Oynaning ma'lumotlarini yangilash (reload)
//    window.location.reload();



// // Saqlangan ma'lumotlarni olish
//     let storedData = window.localStorage.getItem('userData');
//     console.log(`Saqlangan ma'lumotlar: ${storedData}`);


// ======================================================================================

// // JavaScript tilida, DOM (Document Object Model) dagi elementlarga tushunish va ularga murojaat qilish uchun addEventListener funksiyasi ishlatiladi. Bu funksiya bir elementga boshqa amallarni qo'shishni, qulayroq muammo yaratishni va interaktiv sohada foydalanuvchiga javob berishni ta'minlaydi.
// // addEventListener funksiyasi DOM elementlari uchun amalga oshiriladi va boshqa bir funksiya yoki harakat tuzilganda uni chaqirishga xizmat qiladi. Bunda, elementga ma'lum bir hodisaga javob berish uchun funksiya, hodisani ko'rib chiqish yoki boshqa amallarni aniqlashimiz mumkin.Bu misollar brauzerdagi interaktivlikni yaxshi tuzish uchun juda foydali.

// // addEventListener funksiyasiga misollar:

// // Bir tugma bosilganda
//     let myButton1 = document.getElementById('myButton');
//     myButton1.addEventListener('click', function() {
//       console.log('Tugma bosildi!');
//     });



// // Input maydonining o'zgartirilganda
//     let myInput = document.getElementById('myInput');
//     myInput.addEventListener('input', function() {
//       console.log('Input maydoni o\'zgartirildi.');
//     });



// // Enter tugmasi bosilganda
//     document.addEventListener('keydown', function(event) {
//       if (event.key === 'Enter') {
//         console.log('Enter tugmasi bosildi.');
//       }
//     });



// // Sahifaning yuqori qismi o'zgarganda
//     window.addEventListener('scroll', function() {
//       console.log('Sahifaning yuqori qismi o\'zgardi.');
//     });


//     myElement.addEventListener('mouseout', function() {
//         console.log('Kursor elementdan chiqdi.');
//     });

// // Mundarij funksiya (callback) bilan boshqa funksiya chaqirish
//     function myFunction() {
//       console.log('Tugma bosildi!');
//     }
//     myButton.addEventListener('click', myFunction);



// // Ma'lum bir yaratilgan obyektga murojaat qilganda
//     let myObject = {
//       myFunction: function() {
//         console.log('Ma\'lum obyektga murojaat qilindi.');
//       }
//     };
//     myButton.addEventListener('click', myObject.myFunction);



// // Elementga focus olinganda
//     myInput.addEventListener('focus', function() {
//       console.log('Inputga focus olinadi.');
//     });



// // Elementdan focus olib chiqildiqda
//     myInput.addEventListener('blur', function() {
//       console.log('Inputdan focus olib chiqildi.');
//     });

// ==================================================================================================





// innerHTML JavaScript tilidagi DOM (Document Object Model) elementlarida ishlatiladigan bir xususiyatdir. Bu xususiyat orqali, bir HTML elementining ichki HTML matnini o'zgartirish, o'qish va olish mumkin.
// innerHTML xususiyati elementning ichki HTML matnini o'zgartirishda ishlatiladi. Ushbu xususiyat orqali HTML elementining ichidagi HTML-strukturaning barcha qismini o'zgartirish, qo'shish va o'qish mumkin.

// innerHTMLga Misollar

// // Elementning innerHTMLni olish
//     let myElements = document.getElementById('myElement');
//     let innerHTMLValue = myElement.innerHTML;
//     console.log(innerHTMLValue);


