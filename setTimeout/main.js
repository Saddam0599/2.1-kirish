

let demo = document.getElementById('demo');
let videos = document.getElementsByClassName('video');

setTimeout(() => {
    demo.style.display = "block";

    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "block";
    }
}, 2000);

setTimeout(() => {
    demo.style.display = "none";
}, 32000);


// Sizning kodingizda, "demo" nomli element va "video" nomli elementlar sahifaga "block" stilida ko'rsatiladi, keyin "demo" yana "none" stilida o'chiriladi. Bu koda binoan, "demo" va "video" elementlarini "block" stilida ko'rsatish 2 sekund davom etadi (setTimeout(() => {...}, 2000)), so'ngra "demo" o'chiriladi (setTimeout(() => {...}, 30000)).

