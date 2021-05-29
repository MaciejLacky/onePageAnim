TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    const panel = document.querySelectorAll(".panel");
    tl.fromTo(panel, 0.5, { y: "150", opacity: 0 }, { y: "0", opacity: 1 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const img = document.querySelectorAll(".img-one");
      tl.fromTo(img, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 }) 
       
    }
    if (destination.index === 2) {
      const img = document.querySelectorAll(".img-two");
      tl.fromTo(img, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 })
       
    }
   
   
  }
});
