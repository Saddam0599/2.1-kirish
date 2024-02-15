// let rasm = document.getElementById('rasm');
// let btn = document.getElementById('btn');
// let dogUrl = 'https://dog.ceo/api/breeds/image/random';

// btn.addEventListener('click', function () {
//     fetch(dogUrl)
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(data);
//         let msg = data.message;
//         console.log(msg);
//         rasm.src = msg;
//     })
// })



let url = 'https://dog.ceo/api/breeds/list/all';

let select =document.getElementById('select');
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    let keysOfArr = object.keys(data.massage);
    keysOfArr.map((item) => {
    opt.innerText = item;
    opt.value = item;
    select.appendChild(opt);
    })
})