// let list = document.querySelector('.list');

// let API = "https://jsonplaceholder.typicode.com/posts";
// fetch(API)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });

// let API = "https://jsonplaceholder.typicode.com/posts";
// fetch(API)
// .then((res) => res.json())
// .then((data) => {
//     ReadableStreamDefaultReader
//     console.log(data);
// });


// let a = "Hello";
// let b = "World";
// console.log(Number(a) !== Number(b)); //=== folse










// // Mahalliy o'zgaruvchilar
// let tanlanganMahsulotlar = []; // Tanlangan mahsulotlar ro'yxati
// let yulduzlar = 0; // Tanlangan mahsulotlar sonini sanash uchun

// // Tanlov funktsiyasi
// function mahsulotTanlash(mahsulot) {
//     tanlanganMahsulotlar.push(mahsulot); // Tanlangan mahsulotlarni ro'yxatga qo'shish
//     console.log(mahsulot + " tanlangan."); // Tanlangan mahsulotni konsolga chiqarish
//     yulduzlar += 5; // Yulduzlar sonini oshirish

//     // Tanlangan mahsulotlarni HTML-ga qo'shish
//     let mahsulotlarListi = document.getElementById("mahsulotlar-listi");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(mahsulot));
//     mahsulotlarListi.appendChild(li);

//     // Yulduzlar sonini yangilash
//     document.getElementById("yulduzlar-sani").textContent = yulduzlar;
// }

// // Xarid funktsiyasi
// function xaridQilish() {
//     let yurakcha = tanlanganMahsulotlar.length; // Tanlangan mahsulotlar soni

//     // Yurakcha qisqartirilgan
//     if (yurakcha > 0) {
//         console.log("Yurakcha yoqdi!");
//     } else {
//         console.log("Yurakcha yoqmaydi!");
//     }
// }

// // Mahsulotlar tanlash
// mahsulotTanlash("olma");
// mahsulotTanlash("banan");
// mahsulotTanlash("anor");

// // Xarid qilish
// xaridQilish();







// Mahalliy o'zgaruvchilar
let tanlanganMahsulotlar = []; // Tanlangan mahsulotlar ro'yxati
let yulduzlar = 0; // Tanlangan mahsulotlar sonini sanash uchun
let umumiyNarx = 0; // Tanlangan mahsulotlar narxi

// Tanlov funktsiyasi
function mahsulotTanlash(mahsulot, rasmi, narx) {
    tanlanganMahsulotlar.push(mahsulot); // Tanlangan mahsulotlarni ro'yxatga qo'shish
    console.log(mahsulot + " tanlangan."); // Tanlangan mahsulotni konsolga chiqarish
    umumiyNarx += narx; // Umumiy narxni hisoblash
    yulduzlar += 5; // Yulduzlar sonini oshirish

    // Tanlangan mahsulotlarni HTML-ga qo'shish
    let mahsulotlarListi = document.getElementById("mahsulotlar-listi");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(mahsulot));
    mahsulotlarListi.appendChild(li);

    // Yulduzlar sonini yangilash
    document.getElementById("yulduzlar-sani").textContent = yulduzlar;

    // Umumiy narxni yangilash
    document.getElementById("umumiy-narx-qiymati").textContent = umumiyNarx;
}

// Xarid funktsiyasi
function xaridQilish() {
    let yurakcha = tanlanganMahsulotlar.length; // Tanlangan mahsulotlar soni

    // Yurakcha qisqartirilgan
    if (yurakcha > 0) {
        console.log("Yurakcha yoqdi!");
    } else {
        console.log("Yurakcha yoqmaydi!");
    }
}

// Mahsulotlar tanlash
mahsulotTanlash("olma", "Olma rasmi", 5);
mahsulotTanlash("banan", "Banan rasmi", 7);
mahsulotTanlash("anor", "Anor rasmi", 10);

// Xarid qilish
xaridQilish();
