// =====================================
// AKSH INTRO V2
// =====================================

const video = document.getElementById("akshVideo");
const playBtn = document.getElementById("playBtn");
const soundBtn = document.getElementById("soundBtn");
const skipBtn = document.getElementById("skipBtn");
const beginBtn = document.getElementById("beginBtn");

// --------------------------
// PLAY VIDEO
// --------------------------

playBtn.addEventListener("click", () => {

    video.play();

    playBtn.style.display = "none";

});

// --------------------------
// SOUND
// --------------------------

video.muted = true;

soundBtn.addEventListener("click", () => {

    video.muted = !video.muted;

    soundBtn.textContent = video.muted ? "🔇" : "🔊";

});

// --------------------------
// VIDEO FINISHED
// --------------------------

video.addEventListener("ended", () => {

    sessionStorage.setItem("akshIntroSeen","true");

    window.location.href="index.html";

});

// --------------------------
// SKIP INTRO
// --------------------------

skipBtn.addEventListener("click", () => {

    sessionStorage.setItem("akshIntroSeen","true");

    window.location.href="index.html";

});

// --------------------------
// BEGIN JOURNEY
// --------------------------

beginBtn.addEventListener("click", () => {

    sessionStorage.setItem("akshIntroSeen","true");

    window.location.href="index.html";

});

// --------------------------
// HIDE PLAY BUTTON
// --------------------------

video.addEventListener("playing", () => {

    playBtn.style.display = "none";

});

video.addEventListener("pause", () => {

    if(!video.ended){

        playBtn.style.display = "flex";

    }

});
