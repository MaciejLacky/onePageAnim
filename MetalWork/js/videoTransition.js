const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
var width = window.outerWidth;

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 0.2 }, { opacity: 1 });

//Scenes
let scene = new ScrollMagic.Scene({
  duration: width,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});


setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

