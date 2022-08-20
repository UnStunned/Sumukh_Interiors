const scroller = document.getElementById("Images");
setInterval(() => {
    oldHeight = scroller.scrollLeft;
    scroller.scrollBy(3, 0);
    newHeight = scroller.scrollLeft;
    if (newHeight == oldHeight) {
        scroller.scrollLeft = 0;
    }
}, 10);

// Animations
floating_circle_1 = document.getElementById("Floating_Circle_1")
floating_circle_2 = document.getElementById("Floating_Circle_2")
Hero = document.getElementById("Hero")


tl =  gsap.timeline();

const floating = ()=> {
    tl.fromTo(floating_circle_1, {x:-1000, duration:2, opacity:0},{x:0, duration:2, opacity:1})
    tl.fromTo(floating_circle_2, {x:1000, duration:2, opacity:0},{x:0, duration:2, opacity:1}, "<")
    tl.fromTo(Hero, {y:1000, duration:2, opacity:0}, {y:0, duration:2, opacity:1},"<")
    flag = 0;
}

Section_1 = document.getElementById("Section_1")
Section_1.addEventListener("mouseenter", floating)

Section_1.addEventListener("mouseout", ()=>{
    Section_1.removeEventListener("mouseenter", floating);
    flag = 0;
})




