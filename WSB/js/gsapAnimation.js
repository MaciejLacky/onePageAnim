const glass = document.getElementById('section');

const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } })

tl.from('.logo', { y: '-100%', opacity: 0 })
    // .from('.notInUse', { opacity: 0, delay: .5, duration: 1 }, "-=1.5")
    // .from('.notInUse', { x: '-100%', backdropFilter: 'blur(0px)' })
    .from('.seq', { y: -30, opacity: 0, stagger: .2, duration: .5 }, "-=.5")
    .from('h1', { y: 20, clipPath: 'inset(0 0 100% 0)' }, "-=.8")