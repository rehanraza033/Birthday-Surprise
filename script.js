/* ==========================================================
   script.js  |  PART 1 / 10
========================================================== */

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

const earth = document.getElementById("earth");
const destination = document.getElementById("destination");
const birthday = document.getElementById("birthday");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");

const startButton = document.getElementById("startButton");
const giftButton = document.getElementById("giftButton");

const typing = document.getElementById("typing");
const music = document.getElementById("bgMusic");

const messages = [

"Connecting To Universe...",
"Initializing Galaxy Engine...",
"Scanning Milky Way...",
"Searching Earth...",
"Searching India...",
"Searching Bareilly...",
"Searching Faridpur...",
"SANIYA FOUND ❤️"

];

let progress = 0;
let index = 0;

earth.style.display = "none";
destination.style.display = "none";
birthday.style.display = "none";
gallery.style.display = "none";
letter.style.display = "none";

const boot = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if (progress % 12 === 0 && index < messages.length) {

        loadingText.innerHTML = messages[index];
        index++;

    }

    if (progress >= 100) {

        clearInterval(boot);

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }

}, 50);

startButton.addEventListener("click", () => {

    if (typeof playJourney === "function") {

        playJourney();

    }

});/* ==========================================================
   script.js  |  PART 2 / 10
========================================================== */

const journey = [

    "Searching Earth...",
    "Earth Found 🌍",

    "Searching India...",
    "India Found 🇮🇳",

    "Searching Uttar Pradesh...",
    "Uttar Pradesh Found",

    "Searching Bareilly...",
    "Bareilly Found",

    "Searching Faridpur...",
    "Faridpur Found",

    "Scanning GPS Coordinates...",

    "TARGET LOCKED"

];

const jarvisInfo = document.createElement("div");

jarvisInfo.id = "jarvisInfo";

jarvisInfo.style.position = "fixed";
jarvisInfo.style.top = "50%";
jarvisInfo.style.left = "50%";
jarvisInfo.style.transform = "translate(-50%,-50%)";
jarvisInfo.style.fontSize = "42px";
jarvisInfo.style.fontWeight = "700";
jarvisInfo.style.color = "#00eaff";
jarvisInfo.style.fontFamily = "Poppins";
jarvisInfo.style.textAlign = "center";
jarvisInfo.style.textShadow = "0 0 25px cyan";
jarvisInfo.style.zIndex = "999999";

function playJourney(){

    document.body.appendChild(jarvisInfo);

    earth.style.display = "flex";

    let i = 0;

    const timer = setInterval(()=>{

        jarvisInfo.innerHTML = journey[i];

        i++;

        if(i >= journey.length){

            clearInterval(timer);

            setTimeout(()=>{

                earth.style.display = "none";

                gpsSequence();

            },1500);

        }

    },1700);

}/* ==========================================================
   script.js  |  PART 3 / 10
========================================================== */

const gps = [

    "Latitude : 28.209° N",

    "Longitude : 79.541° E",

    "Location Verified ✓",

    "Destination : Faridpur",

    "Owner : SANIYA ❤️"

];

function gpsSequence(){

    destination.style.display = "flex";

    let i = 0;

    const timer = setInterval(()=>{

        jarvisInfo.innerHTML = gps[i];

        i++;

        if(i >= gps.length){

            clearInterval(timer);

            setTimeout(showTarget,1500);

        }

    },1700);

}

function showTarget(){

    jarvisInfo.style.fontSize = "60px";

    jarvisInfo.style.color = "#00ff99";

    jarvisInfo.innerHTML = `

        TARGET LOCKED

        <br><br>

        ❤️ SANIYA ❤️

    `;

    setTimeout(()=>{

        jarvisInfo.remove();

        birthdayReveal();

    },3500);

}/* ==========================================================
   script.js | PART 4 / 10
========================================================== */

function birthdayReveal(){

    destination.style.display = "none";

    birthday.style.display = "flex";

    birthday.classList.add("fadeIn");

    if(music){

        music.play().catch(()=>{});

    }

}

giftButton.addEventListener("click",()=>{

    birthday.style.display="none";

    gallery.style.display="block";

    letter.style.display="block";

    gallery.classList.add("fadeIn");

    letter.classList.add("fadeIn");

    startTyping();

});/* ==========================================================
   script.js | PART 5 / 10
========================================================== */

const letterMessage = `

Dear Saniya ❤️

Happy Birthday 🎉

Aaj ka din sirf tumhare liye hai.

Allah tumhe hamesha khush rakhe.

Tumhari har dua qubool ho.

Hamesha haste rehna.

Stay Happy ❤️

Stay Blessed ❤️

Lots Of Love,

Rehan ❤️

`;

let typeIndex = 0;

function startTyping(){

    typing.innerHTML = "";

    typeIndex = 0;

    typeWriter();

}

function typeWriter(){

    if(typeIndex < letterMessage.length){

        typing.innerHTML += letterMessage.charAt(typeIndex);

        typeIndex++;

        setTimeout(typeWriter,35);

    }

}/* ==========================================================
   script.js | PART 6 / 10
========================================================== */

/* PHOTO ANIMATION */

const photos = document.querySelectorAll(".photoGrid img");

function showPhotos(){

    photos.forEach((photo,index)=>{

        photo.style.opacity="0";
        photo.style.transform="scale(.7)";

        setTimeout(()=>{

            photo.style.transition="1s";

            photo.style.opacity="1";

            photo.style.transform="scale(1)";

        },500*index);

    });

}

giftButton.addEventListener("click",()=>{

    showPhotos();

});


/* AUTO SCROLL */

function scrollToLetter(){

    letter.scrollIntoView({

        behavior:"smooth"

    });

}

setTimeout(()=>{

    if(letter.style.display==="block"){

        scrollToLetter();

    }

},3000);/* ==========================================================
   script.js | PART 7 / 10
========================================================== */

/* MUSIC */

document.body.addEventListener("click",()=>{

    if(music){

        music.play().catch(()=>{});

    }

},{once:true});


/* BUTTON EFFECTS */

startButton.addEventListener("mouseenter",()=>{

    startButton.style.transform="scale(1.08)";

});

startButton.addEventListener("mouseleave",()=>{

    startButton.style.transform="scale(1)";

});


giftButton.addEventListener("mouseenter",()=>{

    giftButton.style.transform="scale(1.08)";

});

giftButton.addEventListener("mouseleave",()=>{

    giftButton.style.transform="scale(1)";

});/* ==========================================================
   script.js | PART 8 / 10
========================================================== */

/* FLASH EFFECT */

function flashScreen(){

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "#ffffff";
    flash.style.opacity = "1";
    flash.style.transition = "1s";
    flash.style.zIndex = "999999";

    document.body.appendChild(flash);

    setTimeout(()=>{

        flash.style.opacity = "0";

        setTimeout(()=>{

            flash.remove();

        },1000);

    },200);

}

/* BIRTHDAY REVEAL UPDATE */

const oldBirthdayReveal = birthdayReveal;

birthdayReveal = function(){

    flashScreen();

    setTimeout(()=>{

        oldBirthdayReveal();

    },1000);

};/* ==========================================================
   script.js | PART 9 / 10
========================================================== */

/* RESTART PROTECTION */

let journeyStarted = false;

startButton.addEventListener("click", () => {

    if (journeyStarted) return;

    journeyStarted = true;

});


/* PAGE RESET */

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    earth.style.display = "none";
    destination.style.display = "none";
    birthday.style.display = "none";
    gallery.style.display = "none";
    letter.style.display = "none";

});


/* KEYBOARD SHORTCUTS */

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        if (!journeyStarted) {

            startButton.click();

        }

    }

});


/* SAFE MUSIC */

if (music) {

    music.volume = 0.6;

}/* ==========================================================
   script.js | PART 10 / 10
   FINAL
========================================================== */

/* END MESSAGE */

console.log("==================================");
console.log(" Birthday Surprise V2 Loaded ❤️ ");
console.log(" Developed For Saniya ❤️");
console.log("==================================");


/* MOBILE FIX */

window.addEventListener("resize",()=>{

    if(window.innerWidth<768){

        document.body.style.overflowX="hidden";

    }

});


/* PRELOAD IMAGES */

window.addEventListener("load",()=>{

    document.querySelectorAll(".photoGrid img").forEach(img=>{

        const preload=new Image();

        preload.src=img.src;

    });

});


/* FINAL INIT */

function initBirthdayProject(){

    earth.style.display="none";

    destination.style.display="none";

    birthday.style.display="none";

    gallery.style.display="none";

    letter.style.display="none";

    if(music){

        music.pause();

        music.currentTime=0;

    }

}

initBirthdayProject();

/* ===========================
   END OF SCRIPT.JS
=========================== */
