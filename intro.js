/*==========================================
AKSH INTRO JAVASCRIPT V1
==========================================*/

const video = document.getElementById("introVideo");
const soundButton = document.getElementById("soundButton");
const skipButton = document.getElementById("skipButton");

/*==========================================
Sound Toggle
==========================================*/

soundButton.addEventListener("click", () => {

video.muted = !video.muted;

if(video.muted){

soundButton.innerHTML = "🔇 Sound Off";

}else{

soundButton.innerHTML = "🔊 Sound On";

}

});

/*==========================================
Skip Intro
==========================================*/

skipButton.addEventListener("click", () => {

window.location.href = "home.html";

});

/*==========================================
Video Finished
==========================================*/

video.addEventListener("ended", () => {

window.location.href = "home.html";

});

/*==========================================
Auto Play
==========================================*/

window.addEventListener("load", () => {

video.play().catch(() => {

console.log("Autoplay blocked until user interaction.");

});

});
