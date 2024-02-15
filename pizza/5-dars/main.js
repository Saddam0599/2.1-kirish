// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open the modal after 3 seconds
setTimeout(function () {
  modal.style.display = "block";
}, 3000);

// Close the modal when x button is clicked
span.onclick = function () {
  modal.style.display = "none";
};

let video = document.querySelector(".video");
let learn = document.querySelector(".learn");
let AD = document.querySelector(".AD");
let box = document.querySelector(".modalContent");
video.addEventListener("ended", function () {
  learn.style.display = "block";
  AD.style.display = "block";
});

AD.onclick = function () {
  modal.style.display = "none";
};

learn.addEventListener("click", function () {
  window.open("https://sherin.uz/", "_blank");
});
