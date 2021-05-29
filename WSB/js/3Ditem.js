//Movement Animation to happen
const card = document.querySelector(".card-img-CloudA");
const container = document.querySelector(".container-img-CloudA");
//Items
const title = document.querySelector(".title");
const imgCloudA = document.querySelector(".img-CloudA img");
const purchase = document.querySelector(".purchase");
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
card.style.transition = "none";
//Popout
title.style.transform = "translateZ(150px)";
imgCloudA.style.transform = "translateZ(100px) rotateZ(-15deg)";
purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
card.style.transition = "all 0.5s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback
title.style.transform = "translateZ(0px)";
imgCloudA.style.transform = "translateZ(0px) rotateZ(0deg)";
purchase.style.transform = "translateZ(0px)";
});