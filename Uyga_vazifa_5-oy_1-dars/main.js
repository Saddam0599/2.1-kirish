
// let val = document.getElementById("value");
// let demo = document.getElementById("demo");

// function add() {
//   localStorage.setItem("todo", val.value);
//   demo.textContent = localStorage.getItem("todo");
// }

// // function rem() {
// //   localStorage.removeItem("todo");
// //   location.reload(true);
// // }

// // var age = 18;
// // var result = age >= 18 ? "O'zbekiston fuqarosi" : "O'zbekiston fuqarosi emas";
// // console.log(result);

// -------------------================================----------------------------------------------

// // DOM Document Object Modeli

//     // Documentga misollar

// // Barcha HTML dokumentini ko'rish
// console.log(document);

// // HTML body elementini ko'rish
// console.log(document.body);

// // HTML head elementini ko'rish
// console.log(document.head);

// // Document title'ni ko'rish
// console.log(document.title);

// // Document URL'ni ko'rish
// console.log(document.URL);

// // Document domain'ni ko'rish
// console.log(document.domain);

// // Document charset'ini ko'rish
// console.log(document.characterSet);

// // Document language'ini ko'rish
// console.log(document.documentElement.lang);

// // Documentda bor bo'lgan barcha skriptlarni ko'rish
// console.log(document.scripts);

// // Documentda bor bo'lgan barcha linklarni ko'rish
// console.log(document.links);

// // getElementsByTagName metodiga 10 ta misol

// // Misol 1: Barcha "p" teg nomli paragraflarni topish
// let paragraphs = document.getElementsByTagName("p");
// console.log("Misol 1:", paragraphs);

// // Misol 2: "ul" teg nomli unordered list elementini topish
// let ulElement = document.getElementsByTagName("ul")[0];
// console.log("Misol 2:", ulElement);

// // Misol 3: "li" teg nomli list item elementlarini topish
// let listItems = document.getElementsByTagName("li");
// console.log("Misol 3:", listItems);

// // Misol 4: "h2" teg nomli ikkinchi sarlavhani topish
// let h2Element = document.getElementsByTagName("h2");
// console.log("Misol 4:", h2Element);

// // Misol 5: Barcha "div" teg nomli elementlarni topish
// let divElements = document.getElementsByTagName("div");
// console.log("Misol 5:", divElements);

// // Misol 6: Barcha "a" teg nomli link elementlarini topish
// let links = document.getElementsByTagName("a");
// console.log("Misol 6:", links);

// // Misol 7: "h1" teg nomli sarlavhani topish (mavjud emas)
// let h1Element = document.getElementsByTagName("h1");
// console.log("Misol 7:", h1Element);

// // Misol 8: "span" teg nomli elementlarni topish (mavjud emas)
// let spans = document.getElementsByTagName("span");
// console.log("Misol 8:", spans);

// // Misol 9: Barcha "body" teg nomli elementni topish
// let bodyElement = document.getElementsByTagName("body")[0];
// console.log("Misol 9:", bodyElement);

// // Misol 10: "table" teg nomli elementni topish (mavjud emas)
// let tableElement = document.getElementsByTagName("table")[0];
// console.log("Misol 10:", tableElement);
// =======================================================================================================

// textContent methodiga misollar

//  // 1 - misol: Birinchi matnli div elementining textContent ni o'qiyapmiz
//     let content1 = document.getElementById("exampleDiv1").textContent;
//     console.log("Misol 1:", content1);

//     // 2 - misol: Birinchi paragraf elementining textContent ni o'qiyapmiz
//     let content2 = document.getElementById("examplePara1").textContent;
//     console.log("Misol 2:", content2);

//     // 3 - misol: Ikkinchi matnli div elementining textContent ni o'qiyapmiz
//     let content3 = document.getElementById("exampleDiv2").textContent;
//     console.log("Misol 3:", content3);

//     // 4 - misol: Ikkinchi paragraf elementining textContent ni o'qiyapmiz
//     let content4 = document.getElementById("examplePara2").textContent;
//     console.log("Misol 4:", content4);

//     // 5 - misol: Span elementining textContent ni o'qiyapmiz
//     let content5 = document.getElementById("exampleSpan").textContent;
//     console.log("Misol 5:", content5);

//     // 6 - misol: Sarlavha elementining textContent ni o'qiyapmiz
//     let content6 = document.getElementById("exampleHeader").textContent;
//     console.log("Misol 6:", content6);

//     // 7 - misol: Uchunchi matnli div elementining textContent ni o'qiyapmiz
//     let content7 = document.getElementById("exampleDiv3").textContent;
//     console.log("Misol 7:", content7);

//     // 8 - misol: Keyingi paragraf elementining textContent ni o'qiyapmiz
//     let content8 = document.getElementById("examplePara3").textContent;
//     console.log("Misol 8:", content8);

//     // 9 - misol: Ikkinchi sarlavha elementining textContent ni o'qiyapmiz
//     let content9 = document.getElementById("exampleHeader2").textContent;
//     console.log("Misol 9:", content9);

//     // 1 - misol0: To'rtinchi matnli div elementining textContent ni o'qiyapmiz
//     let content10 = document.getElementById("exampleDiv4").textContent;
//     console.log("Misol 10:", content10);

// ================================================================================================

// getElementById methodiga misollar

//   // Misol 1: Birinchi ID bilan identifikatsiya qilinadigan div elementini tanlab olamiz
//     let divElement1 = document.getElementById("exampleDiv1");
//     console.log("Misol 1:", divElement1);

//     // Misol 2: Birinchi paragraf elementini tanlab olamiz
//     let paraElement1 = document.getElementById("examplePara1");
//     console.log("Misol 2:", paraElement1);

//     // Misol 3: Ikkinchi ID bilan identifikatsiya qilinadigan div elementini tanlab olamiz
//     let divElement2 = document.getElementById("exampleDiv2");
//     console.log("Misol 3:", divElement2);

//     // Misol 4: Ikkinchi paragraf elementini tanlab olamiz
//     let paraElement2 = document.getElementById("examplePara2");
//     console.log("Misol 4:", paraElement2);

//     // Misol 5: Span elementini tanlab olamiz
//     let spanElement = document.getElementById("exampleSpan");
//     console.log("Misol 5:", spanElement);

//     // Misol 6: Sarlavha elementini tanlab olamiz
//     let headerElement = document.getElementById("exampleHeader");
//     console.log("Misol 6:", headerElement);

//     // Misol 7: Uchunchi ID bilan identifikatsiya qilinadigan div elementini tanlab olamiz
//     let divElement3 = document.getElementById("exampleDiv3");
//     console.log("Misol 7:", divElement3);

//     // Misol 8: Keyingi paragraf elementini tanlab olamiz
//     let paraElement3 = document.getElementById("examplePara3");
//     console.log("Misol 8:", paraElement3);

//     // Misol 9: Ikkinchi sarlavha elementini tanlab olamiz
//     let headerElement2 = document.getElementById("exampleHeader2");
//     console.log("Misol 9:", headerElement2);

//     // Misol 10: To'rtinchi ID bilan identifikatsiya qilinadigan div elementini tanlab olamiz
//     let divElement4 = document.getElementById("exampleDiv4");
//     console.log("Misol 10:", divElement4);

// ============================================================================================

//     // querySelector methodiga misollar

//    // Misol 1: Class bo'yicha birinchi topilgan element
//     let element1 = document.querySelector(".exampleClass");
//     console.log("Misol 1:", element1);

//     // Misol 2: ID bo'yicha birinchi topilgan element
//     let element2 = document.querySelector("#exampleID");
//     console.log("Misol 2:", element2);

//     // Misol 3: Class bo'yicha ikkinchi topilgan element
//     let element3 = document.querySelector(".exampleClass");
//     console.log("Misol 3:", element3);

//     // Misol 4: ID bo'yicha ikkinchi topilgan element (mavjud emas)
//     let element4 = document.querySelector("#exampleID2");
//     console.log("Misol 4:", element4);

//     // Misol 5: Class bo'yicha uchunchi topilgan element
//     let element5 = document.querySelector(".exampleClass");
//     console.log("Misol 5:", element5);

//     // Misol 6: ID bo'yicha uchunchi topilgan element (mavjud emas)
//     let element6 = document.querySelector("#exampleID3");
//     console.log("Misol 6:", element6);

//     // Misol 7: Class bo'yicha yettinchi topilgan element
//     let element7 = document.querySelector(".exampleClass");
//     console.log("Misol 7:", element7);

//     // Misol 8: Class bo'yicha sakkizinchi topilgan element
//     let element8 = document.querySelector(".exampleClass");
//     console.log("Misol 8:", element8);

//     // Misol 9: ID bo'yicha to'qqizinchi topilgan element (mavjud emas)
//     let element9 = document.querySelector("#exampleID4");
//     console.log("Misol 9:", element9);

//     // Misol 10: Class bo'yicha o'ninchi topilgan element
//     let element10 = document.querySelector(".exampleClass");
//     console.log("Misol 10:", element10);
