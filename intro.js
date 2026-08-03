/* =================================
AKSH INTRO SYSTEM
INTRO.JS
================================= */


const video = document.getElementById("akshVideo");
const playBtn = document.getElementById("playBtn");

const soundBtn = document.getElementById("soundBtn");
const skipBtn = document.getElementById("skipBtn");
const beginBtn = document.getElementById("beginBtn");



/* ===============================
VIDEO PLAY
=============================== */


playBtn.addEventListener("click",()=>{


if(video.paused){

video.play();

playBtn.style.opacity="0";

}

});





/* ===============================
VIDEO END
=============================== */


video.addEventListener("ended",()=>{


playBtn.style.opacity="1";


});





/* ===============================
SOUND BUTTON
=============================== */


let soundOn=false;


soundBtn.addEventListener("click",()=>{


soundOn=!soundOn;


video.muted=!soundOn;


if(soundOn){

soundBtn.innerHTML="🔊";

}
else{

soundBtn.innerHTML="🔇";

}


});






/* ===============================
SKIP INTRO
=============================== */


skipBtn.addEventListener("click",()=>{


sessionStorage.setItem(
"akshIntroSeen",
"true"
);


window.location.href="index.html";


});






/* ===============================
BEGIN JOURNEY
=============================== */


beginBtn.addEventListener("click",()=>{


sessionStorage.setItem(
"akshIntroSeen",
"true"
);


window.location.href="index.html";


});
