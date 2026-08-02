document.addEventListener("DOMContentLoaded",()=>{

const hero=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

const y=window.scrollY;

hero.style.transform=`translateY(${y*0.2}px)`;

hero.style.opacity=1-(y/600);

});

const button=document.querySelector(".hero-button");

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 50px rgba(212,175,55,.7)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="0 15px 40px rgba(212,175,55,.35)";

});

});
