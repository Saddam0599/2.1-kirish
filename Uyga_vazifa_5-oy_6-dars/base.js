// Mahalliy o'zgaruvchilar
let tanlanganMahsulotlar = []; // Tanlangan mahsulotlar ro'yxati
let yulduzlar = 0; // Tanlangan mahsulotlar sonini sanash uchun
let umumiyNarx = 0; // Tanlangan mahsulotlar narxi

// Tanlov funktsiyasi
function xaridQilish(mahsulotNomi, narx) {
  tanlanganMahsulotlar.push(mahsulotNomi); // Tanlangan mahsulotlarni ro'yxatga qo'shish
  umumiyNarx += narx; // Umumiy narxni hisoblash
  yulduzlar += 5; // Yulduzlar sonini oshirish

  // Yurakchalar sonini hisoblash
  let yurakchalar = tanlanganMahsulotlar.length;

  // Narxlarni hisoblash
  let narxlar = document.querySelector(".catalog");

  // Mahsulotlar ro'yxatini chiqarish
  let mahsulotListi = document.createElement("li");
  mahsulotListi.textContent = mahsulotNomi;
  narxlar.appendChild(mahsulotListi);

  // Yulduzlar sonini va umumiy narxni chiqarish
  console.log("Yulduzlar soni: " + yulduzlar);
  console.log("Umumiy narx: " + umumiyNarx);
}

// Google Maps joylashuvi
function initMap() {
  let options = {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  };
  let map = new google.maps.Map(document.getElementById("map"), options);
}
