document.addEventListener("DOMContentLoaded", () => {

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

const scroll = window.scrollY;

hero.style.transform = `translateY(${scroll * 0.18}px)`;

hero.style.opacity = 1 - (scroll / 700);

});

const cards = document.querySelectorAll(".emotion-grid a");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px) scale(1)";

});

});

const button = document.querySelector(".hero-button");

button.addEventListener("mouseenter", () => {

button.style.boxShadow = "0 0 60px rgba(212,175,55,.7)";

});

button.addEventListener("mouseleave", () => {

button.style.boxShadow = "0 20px 50px rgba(212,175,55,.35)";

});

});
