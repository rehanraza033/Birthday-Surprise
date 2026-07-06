/* ==========================================================
   PARTICLE ENGINE V2
========================================================== */

const particleCanvas = document.createElement("canvas");

particleCanvas.id = "particleCanvas";

particleCanvas.style.position = "fixed";
particleCanvas.style.top = "0";
particleCanvas.style.left = "0";
particleCanvas.style.width = "100%";
particleCanvas.style.height = "100%";
particleCanvas.style.pointerEvents = "none";
particleCanvas.style.zIndex = "5";

document.body.appendChild(particleCanvas);

const ctx = particleCanvas.getContext("2d");

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

const particles = [];

for(let i=0;i<180;i++){

    particles.push({

        x:Math.random()*particleCanvas.width,

        y:Math.random()*particleCanvas.height,

        r:Math.random()*3+1,

        dx:(Math.random()-0.5)*0.4,

        dy:(Math.random()-0.5)*0.4,

        alpha:Math.random()

    });

}

function drawParticles(){

    ctx.clearRect(

        0,

        0,

        particleCanvas.width,

        particleCanvas.height

    );

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(

            p.x,

            p.y,

            p.r,

            0,

            Math.PI*2

        );

        ctx.fillStyle=

        "rgba(255,255,255,"+p.alpha+")";

        ctx.fill();

    });

}/* ==========================================================
   PARTICLE ENGINE V2
   PART 2 / 2
========================================================== */

function updateParticles(){

    particles.forEach(p=>{

        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0) p.x = particleCanvas.width;
        if(p.x > particleCanvas.width) p.x = 0;

        if(p.y < 0) p.y = particleCanvas.height;
        if(p.y > particleCanvas.height) p.y = 0;

    });

}

function particleLoop(){

    drawParticles();

    updateParticles();

    requestAnimationFrame(particleLoop);

}

particleLoop();

/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    particleCanvas.width = window.innerWidth;

    particleCanvas.height = window.innerHeight;

});


/* ==========================================================
   MOUSE GLOW
========================================================== */

let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;

window.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function drawGlow(){

    ctx.beginPath();

    const gradient = ctx.createRadialGradient(

        mouseX,
        mouseY,
        0,

        mouseX,
        mouseY,
        120

    );

    gradient.addColorStop(0,"rgba(0,255,255,.18)");
    gradient.addColorStop(1,"rgba(0,255,255,0)");

    ctx.fillStyle = gradient;

    ctx.arc(mouseX,mouseY,120,0,Math.PI*2);

    ctx.fill();

}

const oldDraw = drawParticles;

drawParticles = function(){

    oldDraw();

    drawGlow();

};


/* ==========================================================
   END OF PARTICLES.JS
========================================================== */