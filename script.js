// ==============================
// AKSH MENU SCRIPT
// ==============================

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

// Open Menu
menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
});

// Close Menu
closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
});

// Close menu when a link is clicked
const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });
});
