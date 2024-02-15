// String `text matin`, 'matin', "text"
// console.log(-16.54); // Natija: -5
// let oz=5;
// let oz1=5;
// if(oz===oz1){
//     console.log('hello');
// } else {
//     console.log('bye');
// }


// // witch case
// let number;
// switch (number) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   case 6:
//     console.log("six");
//     break;
//   case 7:
//     console.log("seven");
//     break;
//   case 8:
//     console.log("eight");
//     break;
//   case 9:
//     console.log("nine");
//     break;
//   case 10:
//     console.log("ten");
//     break;
//   default:
//     console.log("unknown - noma`lum or - yoki fruitless attempt - samaraasiz urinish");
//     break;
// };




// function foo(x) {
//   switch (x) {
//     case 1:
//       console.log("X 1 ga teng");
//       return "bir";
//     case 2:
//       console.log("X 2 ga teng");
//       return "ikki";
//     default:
//       console.log("X hech qaysi holatga teng emas");
//       return "boshqa";
//   }
// }
// console.log(foo(1)); // "bir" ni chiqaradi
// console.log(foo(2)); // "ikki" ni chiqaradi
// console.log(foo(3)); // "boshqa" ni chiqaradi



// let name = prompt("Iltimos, ismingizni kiriting:");
// switch (name) {
//   case "Ali":
//     console.log("Otasining ismi: Vali");
//     break;
//   case "Vali":
//     console.log("Otasining ismi: G'ani");
//     break;
//   case "G'ani":
//     console.log("Otasining ismi: Farxi");
//     break;
//   default:
//     console.log("Noma'lum yoki samaraasiz urinish");
//     break;
// }




// let number = parseInt(prompt("Iltimos, raqam kiriting:"));
// switch (number) {
//   case 1:
//     console.log("bir");
//     break;
//   case 2:
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   case 4:
//     console.log("to'rt");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   case 6:
//     console.log("olti");
//     break;
//   case 7:
//     console.log("yetti");
//     break;
//   case 8:
//     console.log("sakkiz");
//     break;
//   case 9:
//     console.log("to'qqiz");
//     break;
//   case 10:
//     console.log("o'n");
//     break;
//   default:
//     console.log("noma'lum or samaraasiz urinish");
//     break;
// }
// Bu qatorda, foydalanuvchidan raqam kiritishi uchun bir oyna ochiladi. `prompt` funksiyasi yordamida foydalanuvchidan raqam kiritilishi so'raladi. Kiritilgan qiymat esa `parseInt` funksiyasi orqali butun sona aylanadi va `number` deb nomlangan o'zgaruvchiga o'rnatiladi.
// Bu qatorda foydalanuvchi kiritishi talab etilgan raqamni kiritib chiqqanida, kiritilgan qiymat o'zgaruvchiga tayinlanadi va keyinroq kodni tekshirish uchun ishlatiladi.



// // Sodda yo'l
// const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
// const today = new Date().getDay();
// const todayName = days[today - 1];
// console.log('Bugun', todayName);



// Agar foydalanuvchi haftaning belgili bir kunini kiritib turgan bo'lsa, siz kiritilgan raqamni indeks sifatida ishlatib, `days` massividan mos keluvchi kun nomini chiqarishingiz mumkin. Kod quyidagicha bo'ladi:
// const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
// const dayNumber = parseInt(prompt("Iltimos, haftaning belgili bir kunini kiriting (1-7):"));
// if (dayNumber >= 1 && dayNumber <= 7) {
//   const dayName = days[dayNumber - 1];
//   console.log('Siz kiritgan haftaning belgili kunining nomi:', dayName);
// } else {
//   console.log('Noto`g`ri raqam kiritildi. Haftaning belgili kunlarini 1 dan 7 gacha raqamlar bilan kiriting.');
// }
// Bu kod foydalanuvchidan haftaning belgili bir kunini kiritishni so'raydi. Keyinroq kiritilgan raqamni tekshirib, `days` massividan mos keluvchi kun nomini aniqlab, konsolga chiqaradi. Agar kiritilgan raqam 1 va 7 oralig'ida bo'lmasa, xabar chiqariladi va foydalanuvchiga to'g'ri raqam kiritish uchun xabar beriladi.



// // Qiyin yo'l
// const daysMap = new Map([
//   [0, 'Dushanba'],
//   [1, 'Seshanba'],
//   [2, 'Chorshanba'],
//   [3, 'Payshanba'],
//   [4, 'Juma'],
//   [5, 'Shanba'],
//   [6, 'Yakshanba']
// ]);
// const today = new Date().getDay();
// // console.log(new Date());
// const todayName = daysMap.get(today);
// console.log('Bugun', todayName);
// // Bu kod qiyin yo'l orqali bugungi kuni nomini chiqaradi. Map obyekti ishlatiladi va kunlar qiymatlar va ularning nomlarini o'z ichiga oladi. Shu kunni aniqlash uchun getDay va get metodlari ishlatiladi.



// // Sodda turdagi turli ko'rinish
// const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
// const today = new Date().getDay(); // 0 dan 6 gacha bo'lgan qiymat
// const todayName = days[today];
// console.log('Bugun:', todayName);



// // Map obyekt orqali ko'rish
// const daysMap = new Map([
//   [0, 'Dushanba'],
//   [1, 'Seshanba'],
//   [2, 'Chorshanba'],
//   [3, 'Payshanba'],
//   [4, 'Juma'],
//   [5, 'Shanba'],
//   [6, 'Yakshanba']
// ]);
// const today = new Date().getDay();
// const todayName = daysMap.get(today);
// console.log('Bugun:', todayName);



// // switch-case yordamida
// const today = new Date().getDay();
// let todayName;

// switch (today) {
//   case 0:
//     todayName = 'Dushanba';
//     break;
//   case 1:
//     todayName = 'Seshanba';
//     break;
//   case 2:
//     todayName = 'Chorshanba';
//     break;
//   case 3:
//     todayName = 'Payshanba';
//     break;
//   case 4:
//     todayName = 'Juma';
//     break;
//   case 5:
//     todayName = 'Shanba';
//     break;
//   case 6:
//     todayName = 'Yakshanba';
//     break;
//   default:
//     todayName = 'Xato kun';
// }
// console.log('Bugun:', todayName);



// let number = parseInt(alert("Iltimos, 1 dan 10 gacha raqam kiriting:"));
// switch (number) {
//   case 1:
//     console.log("bir");
//     break;
//   case 2:
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   case 4:
//     console.log("to'rt");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   case 6:
//     console.log("olti");
//     break;
//   case 7:
//     console.log("yetti");
//     break;
//   case 8:
//     console.log("sakkiz");
//     break;
//   case 9:
//     console.log("to'qqiz");
//     break;
//   case 10:
//     console.log("o'n");
//     break;
//   default:
//     console.log("noma'lum or samaraasiz urinish");
//     break;
// }
// // `alert` va `prompt` JavaScript dasturlash tilida foydalanuvchiga ma'lumot ko'rsatish uchun ishlatiladigan ikkala metod bo'lib, ularning farqlari quyidagicha:

// // 1. **alert**: Bu metod brauzer oynasida foydalanuvchiga xabar ko'rsatish uchun ishlatiladi. Bu oyna foydalanuvchi uchun yopilmaydi va uni yopish uchun foydalanuvchining uni bekor qilish kerak bo'lgan tugmasini bosing. Masalan:

// alert("Salom, dunyo!");
// // Bu qator kod foydalanuvchiga "Salom, dunyo!" degan xabarni chiqaradi.

// // 2. **prompt**: Bu metod foydalanuvchiga brauzer oynasida biror mavzuga ma'lumot kiritingizni so'raydi. Foydalanuvchi ma'lumot kiritgach, "OK" yoki "Bekor qilish" tugmalaridan birini bosish orqali ma'lumotni tasdiqlaydi yoki bekor qiladi. Masalan:

// let ism = prompt("Iltimos, ismingizni kiriting:");
// // Bu qator kod foydalanuvchiga "Iltimos, ismingizni kiriting:" degan xabarni chiqaradi va foydalanuvchi oyna ustiga ismini kiritishga imkon beradi. Keyinroq, foydalanuvchi kiritgan ism `ism` deb nomlangan o'zgaruvchiga olinadi.







