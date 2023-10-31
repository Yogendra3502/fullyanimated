//locomotive js ka use kiya - smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth:true
});

gsap.from("a",{
    stagger: .2,
    y:20,
    opacity:0,
    duration:0.4,
    ease: Power2,
    delay:0.1,
})
Shery.textAnimate(".heading h1" , {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: .2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
gsap.from("#anim2",{
    y:50,
    stagger: .3,
    opacity:0,
    ease: Expo,
    delay:1.2

})
Shery.imageEffect(".imgintext img",{
    style:3,
    config:{"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":5.79,"range":[0,100]},"uFrequencyZ":{"value":19.01,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect("#imgff img",{
    style:5,
    config:{"a":{"value":2.23,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6616345241858994},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

})
gsap.from(".imgintext img",{
    z:"3",
    opacity:0,
    ease:Expo,
    duration:2
})
Shery.imageEffect(".bimg",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.110381077529566},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":1.23,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":0.3,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.49,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.22,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.1,"range":[0,2]},"noise_scale":{"value":4.96,"range":[0,100]}},
    gooey: true,
})

document.querySelector(".ttext button")
.addEventListener("mouseover",function(){
    gsap.to(".fatore video",{
        opacity:1,
        duration:1.5,
        ease: Power2
    })
})
document.querySelector(".ttext button")
.addEventListener("mouseleave",function(){
    gsap.to(".fatore video",{
        opacity:0,
        duration:1,
        ease: Power2
    })
})