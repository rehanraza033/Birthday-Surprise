/* ==========================================================
   PARTICLE ENGINE
========================================================== */

const particleScene = document.getElementById("birthday");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="110vh";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.pointerEvents="none";
    heart.style.zIndex="99999";

    heart.style.transition="all 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-130vh) rotate(${720*Math.random()}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

function createSpark(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(10+Math.random()*25)+"px";

    star.style.opacity=Math.random();

    star.style.pointerEvents="none";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

function createFirework(){

    const boom=document.createElement("div");

    boom.innerHTML="🎆";

    boom.style.position="fixed";

    boom.style.left=Math.random()*100+"vw";
    boom.style.top=Math.random()*60+"vh";

    boom.style.fontSize="70px";

    boom.style.opacity="0";

    boom.style.transition=".4s";

    boom.style.pointerEvents="none";

    document.body.appendChild(boom);

    setTimeout(()=>{

        boom.style.opacity="1";
        boom.style.transform="scale(1.8)";

    },50);

    setTimeout(()=>{

        boom.remove();

    },1200);

}

/* ============================= */

setInterval(createHeart,700);

setInterval(createSpark,180);

setInterval(createFirework,1800);