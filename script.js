// =====================================
// AKSH INTRO PAGE
// =====================================

const video=document.getElementById("introVideo");

const soundButton=document.getElementById("soundButton");

const skipButton=document.getElementById("skipButton");

const enterButton=document.getElementById("enterButton");

// Start muted

video.muted=true;

// Sound Button

soundButton.addEventListener("click",()=>{

video.muted=!video.muted;

if(video.muted){

soundButton.innerHTML="🔇 Sound Off";

}else{

soundButton.innerHTML="🔊 Sound On";

}

});

// Skip Intro

skipButton.addEventListener("click",()=>{

window.location.href="home.html";

});

// Video Finished

video.addEventListener("ended",()=>{

window.location.href="home.html";

});

// Enter Button

enterButton.addEventListener("click",(e)=>{

e.preventDefault();

window.location.href="home.html";

});
