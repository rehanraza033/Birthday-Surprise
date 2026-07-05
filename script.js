/* ==========================================================
   JARVIS BOOT SYSTEM
========================================================== */

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

const loadingMessages = [
    "Connecting To Universe...",
    "Initializing Galaxy Engine...",
    "Scanning Milky Way...",
    "Finding Earth...",
    "Searching India...",
    "Searching Bareilly...",
    "Target Locked...",
    "SANIYA FOUND ❤️"
];

let progress = 0;
let messageIndex = 0;

const bootAnimation = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if (progress % 12 === 0 && messageIndex < loadingMessages.length) {

        loadingText.innerHTML = loadingMessages[messageIndex];
        messageIndex++;

    }

    if (progress >= 100) {

        clearInterval(bootAnimation);

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }, 500);

    }

}, 50);

/* ==========================================================
   BEGIN BUTTON
========================================================== */

const startButton = document.getElementById("startButton");

startButton.addEventListener("mouseenter", () => {
    startButton.style.transform = "scale(1.08)";
});

startButton.addEventListener("mouseleave", () => {
    startButton.style.transform = "scale(1)";
});


/* ==========================================================
   LETTER
========================================================== */

const message = `

Dear Saniya ❤️

Happy Birthday...

Aaj ka din sirf tumhare liye hai.

May Allah tumhari har dua qubool kare.

Hamesha haste rehna.

Stay Happy.

Stay Blessed.

- Rehan ❤️

`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(!typing) return;

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

setTimeout(typeWriter,7000);

/* ==========================================================
   GIFT BUTTON
========================================================== */

const giftButton = document.getElementById("giftButton");

if(giftButton){

    giftButton.addEventListener("click",()=>{

        alert("🎁 Surprise Unlocking Soon ❤️");

    });

}/* ==========================================================
   MUSIC START
========================================================== */

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {

    if (music) {

        music.play().catch(() => {});

    }

}, { once: true });


/* ==========================================================
   PHOTO ANIMATION
========================================================== */

const photos = document.querySelectorAll(".photoGrid img");

photos.forEach((photo, index) => {

    photo.style.opacity = "0";
    photo.style.transform = "scale(.7)";

    setTimeout(() => {

        photo.style.transition = "1s";

        photo.style.opacity = "1";
        photo.style.transform = "scale(1)";

    }, 800 * index);

});/* ===========================================
   CINEMATIC FLASH
=========================================== */

const flash=document.getElementById("flash");

function birthdayReveal(){

flash.style.opacity="1";

setTimeout(()=>{

flash.style.opacity="0";

document.getElementById("birthday").scrollIntoView({

behavior:"smooth"

});

},1000);

}