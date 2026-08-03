// =================================
// AKSH INTRO PAGE
// INTRO.JS
// PART 3
// =================================


// VIDEO PLAY BUTTON

const video = document.getElementById("akshVideo");
const playBtn = document.getElementById("playBtn");


playBtn.addEventListener("click", function(){

    if(video.paused){

        video.play();

        playBtn.style.opacity="0";

    }

});



// SHOW PLAY BUTTON AGAIN WHEN VIDEO ENDS

video.addEventListener("ended", function(){

    playBtn.style.opacity="1";

});





// EMOTION CARD CLICK ANIMATION

const cards = document.querySelectorAll(".emotion-card");


cards.forEach(card => {


    card.addEventListener("click", function(){


        card.style.transform="scale(1.08)";


        setTimeout(()=>{

            card.style.transform="";

        },300);


    });


});




// BEGIN JOURNEY BUTTON

const beginBtn = document.querySelector(".begin-btn");

beginBtn.addEventListener("click",function(){

    sessionStorage.setItem("akshIntroSeen","true");

    window.location.href="index.html";

});
