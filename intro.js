/* ===================================
AKSH INTRO VIDEO CONTROL
=================================== */


const video = document.getElementById("akshVideo");

const playBtn = document.getElementById("playBtn");



playBtn.addEventListener("click", function(){


if(video.paused){


video.play();


playBtn.style.opacity="0";


}


});





video.addEventListener("ended",function(){


playBtn.style.opacity="1";


});
