// '"setTimeout" JavaScriptda belgilangan vaqt davomida biror amalni bajarish uchun ishlatiladi. Bu funksiya quyidagi sintaksisga ega:'

// `setTimeout(function, delay, param1, param2, ...);`

// `function: Bajariladigan funksiya.

// delay: Amal boshlanishidan oldin kutilayotgan vaqt (milisaniya daqiqa sifatida).

// param1, param2, ...: Funksiya uchun kerakli argumentlar (o'zgaruvchilar). `


// setTimeout funksiyasi, berilgan vaqt o'tgach bo'lganida function ni bajaradi. Uchuncha, yuqorida keltirilgan kodingizda, birinchi setTimeout o'zgaruvchilarga ega bo'lgan funksiyani va 2 sekundlik kechikishni (2000 milisaniya) belgilaydi. Keyin, ikkinchi setTimeout 30 sekundlik kechikishni belgilaydi va demo elementini yopadi.

// Bu funksiya asinxron amallarni o'zgartirish uchun juda mos keladi, masalan, animatsiyalarni boshlash yoki sahifaning o'zgarishlari bilan bog'liq boshqa amallarni bajarish uchun.

setTimeout(() => {
    // Elementni tanlash
    let messageElement = document.getElementById('message');
    
    // Elementni o'zgartirish
    messageElement.style.display = 'block';
}, 2000);


// clearTimeout JavaScriptda setTimeout funksiyasi orqali belgilangan vaqtda amal bajariladigan ishni bekor qilish uchun ishlatiladi. setTimeout orqali yaratilgan vaqt o'tgach bo'lganida bajarilishi kerak bo'lgan har qanday amalni bekor qilish uchun clearTimeout funksiyasi ishlatiladi.

clearTimeout(timeoutID);

// timeoutID parametri setTimeout funksiyasi orqali olinadigan qiymatni anglatadi. Ushbu qiymatni olish uchun setTimeout funksiyasi chaqirilganda qaytib keluvchi qiymatni saqlab qo'yish kerak.

let timeoutID = setTimeout(() => {
    console.log("Bu matn bajariladi");
}, 2000);

// Vaqt o'tib qoldi, va bajarilgan ishni bekor qilish uchun clearTimeout ishlatiladi
clearTimeout(timeoutID);

// Bu misolda, "Bu matn bajariladi" logi 2 sekund o'tgach bajariladi, lekin keyin clearTimeout orqali bekor qilinadi, shuning uchun log aniqlanmaydi. clearTimeout ishlatilgandan so'ng setTimeout chaqirilgan ishni bekor qilad


// setInterval JavaScriptda belgilangan vaqt oralig'ida amal bajariladigan funksiyani doimiy ravishda chaqirish uchun ishlatiladi. Bu funksiya quyidagi sintaksisga ega:

// setInterval(function, delay, param1, param2, ...);

// function: Doimiy ravishda bajariladigan funksiya.
// delay: Amal bajarilishi kerak bo'lgan har bir bosqichning (millisekundlar) oralig'ini belgilovchi parameter.
// param1, param2, ...: Funksiya uchun kerakli argumentlar (o'zgaruvchilar). (Ishonchsiz qo'llanilmasa, ko'p ko'rsatilgan funksiyalar esa argumentlarni kullaniyor).

// setInterval funksiyasi orqali belgilangan vaqt davomida funksiya chaqirilib, shuning uchun bu funksiya doimiy ravishda ishlaydi. Agar siz amalni bekor qilmoqchi bo'lsangiz, clearInterval funksiyasidan foydalanishingiz kerak. Bu funksiya setInterval orqali olingan identifikator (intervalID) orqali bekor qiladi.

// let count = 0;

// // setInterval orqali doimiy ravishda bajariladigan funksiya
// let intervalID = setInterval(() => {
//     console.log("Salom, dunyo!", count);
//     count++;

//     // Agar count 5 ga yetgandirsa, setInterval ni bekor qilish
//     if (count === 5) {
//         clearInterval(intervalID);
//         console.log("Interval bekor qilindi!");
//     }
// }, 1000);

// 


// Ushbu misolda, "Salom, dunyo!" logi 1 sekundda bir setInterval orqali 5 marta chiqadi. count o'zgaruvchisi 5 ga yetganda, clearInterval orqali interval bekor qilinadi.




// 