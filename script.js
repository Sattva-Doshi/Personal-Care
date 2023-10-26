var tl=gsap.timeline();

tl.from(".navbar .logo,.navbar ul,.nav-btn button",{
    y:-100,
    duration:0.7,
    opacity:0,
    stagger:0.3
});

tl.from("#head h1,#head h3,#head button",{
    y:150,
    duration:0.6,
    opacity:0,
    delay:0.3,
    stagger:0.5
})

tl.from(".service-card",{
    y:200,
    duration:0.7,
    opacity:0,
    delay:2,
    stagger:0.3,
    
})

tl.from(".left h1,.left li",{
    x:-300,
    opacity:0,
    duration:0.7,
    delay:2,
    stagger:0.3,
})

tl.from(".right-body",{
    x:200,
    opacity:0,
    duration:0.7,
})

// login page
gsap.from(".progress-card",{
    y:120,
    duration:0.7,
    opacity:0,
    delay:3
})

gsap.from(".task",{
    y:200,
    duration:0.7,
    opacity:0,
    delay:4,
    stagger:0.3
})

gsap.from(".left",{
    x:-100,
    duration:0.7,
    opacity:0,
    delay:7,
})

gsap.from("i",{
    x:-100,
    duration:0.7,
    opacity:0,
    delay:8,
})

gsap.from(".right a",{
    y:-120,
    duration:0.7,
    opacity:0,
    delay:9,
    stagger:0.4
})