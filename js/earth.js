/* ==========================================================
   EARTH ENGINE V4 - PART 1
========================================================== */

const earthSection = document.getElementById("earth");
const destinationSection = document.getElementById("destination");
const birthdaySection = document.getElementById("birthday");

earthSection.style.display = "none";
destinationSection.style.display = "none";

const info = document.createElement("div");
info.id = "jarvisInfo";
document.body.appendChild(info);

const journey = [
    "Searching Earth...",
    "Earth Found ✓",

    "Searching India...",
    "India Found ✓",

    "Searching Uttar Pradesh...",
    "Uttar Pradesh Found ✓",

    "Searching Bareilly...",
    "Bareilly Found ✓",

    "Searching Faridpur...",
    "Faridpur Found ✓",

    "Scanning GPS Coordinates...",
    "GPS Coordinates Locked ✓",

    "TARGET LOCKED"
];

function playJourney(){

    let step = 0;

    earthSection.style.display = "flex";
    destinationSection.style.display = "none";

    info.style.display = "block";
    info.style.fontSize = "46px";
    info.style.color = "#00eaff";

    const timer = setInterval(()=>{

        info.innerHTML = journey[step];

        step++;

        if(step >= journey.length){

            clearInterval(timer);

            setTimeout(()=>{

                earthSection.style.display = "none";
                destinationSection.style.display = "flex";

                gpsSequence();

            },1500);

        }

    },1700);

}

/* ==========================================================
   EARTH ENGINE V4 - PART 2
========================================================== */

const gpsSteps = [

    "Latitude : 28.209° N",
    "Longitude : 79.541° E",

    "Location Verified ✓",

    "Faridpur • Bareilly",

    "Destination Confirmed",

    "❤️ SANIYA ❤️"

];

function gpsSequence(){

    let i = 0;

    info.style.display = "block";

    info.style.fontSize = "50px";
    info.style.color = "#00ff99";

    const gpsTimer = setInterval(()=>{

        info.innerHTML = gpsSteps[i];

        i++;

        if(i >= gpsSteps.length){

            clearInterval(gpsTimer);

            setTimeout(showTarget,2000);

        }

    },1800);

}

function showTarget(){

    info.innerHTML = `

        <div style="font-size:70px;">
            TARGET LOCKED
        </div>

        <br>

        <div style="font-size:55px;color:#ff4da6;">
            ❤️ SANIYA ❤️
        </div>

    `;

    setTimeout(()=>{

        if(typeof birthdayReveal==="function"){

            birthdayReveal();

        }else{

            birthdaySection.scrollIntoView({

                behavior:"smooth"

            });

        }

    },4000);

}
