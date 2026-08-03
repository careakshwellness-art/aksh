// ======================================
// AKSH PREMIUM WEBSITE V4
// ======================================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

document.querySelectorAll(

"section,.service-card,.emotion-card,.founder-image"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

// Header Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="rgba(255,255,255,.92)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.06)";

}else{

header.style.background="rgba(255,255,255,.72)";

header.style.boxShadow="none";

}

});

// Emotion Cards Hover

document.querySelectorAll(".emotion-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
