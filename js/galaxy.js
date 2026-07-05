/* ==========================================================
   GALAXY ENGINE V1
========================================================== */

const canvas = document.getElementById("space");

/* ---------- Scene ---------- */

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000010);

/* ---------- Camera ---------- */

const camera = new THREE.PerspectiveCamera(

60,
window.innerWidth / window.innerHeight,
0.1,
5000

);

camera.position.set(0,0,1200);

/* ---------- Renderer ---------- */

const renderer = new THREE.WebGLRenderer({

canvas:canvas,
antialias:true,
alpha:true

});

renderer.setSize(

window.innerWidth,
window.innerHeight

);

renderer.setPixelRatio(

Math.min(window.devicePixelRatio,2)

);

/* ---------- Lights ---------- */

const ambientLight = new THREE.AmbientLight(

0xffffff,
0.8

);

scene.add(ambientLight);

/* ---------- Group ---------- */

const galaxyGroup = new THREE.Group();

scene.add(galaxyGroup);

/* ---------- Galaxy Parameters ---------- */

const STAR_COUNT = 30000;

const positions = [];

const colors = [];

const colorInside = new THREE.Color("#ffffff");
const colorOutside = new THREE.Color("#4488ff");

const radius = 1500;
const branches = 5;
const spin = 4;
const randomness = 0.45;

/* ---------- Geometry ---------- */

const geometry = new THREE.BufferGeometry();

for(let i=0;i<STAR_COUNT;i++){

const r=Math.random()*radius;

const branchAngle=(i%branches)/branches*Math.PI*2;

const spinAngle=r*spin*0.003;

const randomX=(Math.random()-0.5)*randomness*r;
const randomY=(Math.random()-0.5)*randomness*r*0.25;
const randomZ=(Math.random()-0.5)*randomness*r;

const x=Math.cos(branchAngle+spinAngle)*r+randomX;
const y=randomY;
const z=Math.sin(branchAngle+spinAngle)*r+randomZ;

positions.push(x,y,z);

const mixed=colorInside.clone();

mixed.lerp(

colorOutside,
r/radius

);

colors.push(

mixed.r,
mixed.g,
mixed.b

);

}

geometry.setAttribute(

"position",
new THREE.Float32BufferAttribute(positions,3)

);

geometry.setAttribute(

"color",
new THREE.Float32BufferAttribute(colors,3)

);

/* ---------- Material ---------- */

const material=new THREE.PointsMaterial({

size:2,
vertexColors:true,
transparent:true,
depthWrite:false,
blending:THREE.AdditiveBlending

});

/* ---------- Stars ---------- */

const stars=new THREE.Points(

geometry,
material

);

galaxyGroup.add(stars);/* ==========================================================
   GALAXY ENGINE PART 2
========================================================== */

/* ---------- Background Stars ---------- */

const backgroundGeometry = new THREE.BufferGeometry();

const backgroundPositions = [];

for(let i=0;i<8000;i++){

backgroundPositions.push(

(Math.random()-0.5)*8000,
(Math.random()-0.5)*8000,
(Math.random()-0.5)*8000

);

}

backgroundGeometry.setAttribute(

"position",
new THREE.Float32BufferAttribute(backgroundPositions,3)

);

const backgroundMaterial = new THREE.PointsMaterial({

color:0xffffff,
size:1,
transparent:true,
opacity:0.7

});

const backgroundStars = new THREE.Points(

backgroundGeometry,
backgroundMaterial

);

scene.add(backgroundStars);

/* ---------- Clock ---------- */

const clock = new THREE.Clock();

/* ---------- Animation ---------- */

function animate(){

requestAnimationFrame(animate);

const t = clock.getElapsedTime();

/* Galaxy Rotation */

galaxyGroup.rotation.y += 0.0008;
galaxyGroup.rotation.z += 0.0001;

/* Background Rotation */

backgroundStars.rotation.y -= 0.00015;

/* Camera Movement */

camera.position.z =

1200 - Math.sin(t*0.2)*120;

camera.position.x =

Math.sin(t*0.1)*40;

camera.lookAt(0,0,0);

/* Star Twinkle */

material.size =

2 + Math.sin(t*3)*0.25;

/* Render */

renderer.render(scene,camera);

}

animate();

/* ---------- Resize ---------- */

window.addEventListener("resize",()=>{

camera.aspect=

window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,
window.innerHeight

);

});/* ==========================================================
   CINEMATIC CAMERA
========================================================== */

let flySpeed = 0;
let targetZ = 650;
let introFinished = false;

function cinematicCamera(){

    if(!introFinished){

        flySpeed += 0.08;

        camera.position.z -= flySpeed;

        galaxyGroup.rotation.y += 0.0007;
        galaxyGroup.rotation.x += 0.0001;

        if(camera.position.z <= targetZ){

            introFinished = true;

        }

    }else{

        camera.position.z += (700-camera.position.z)*0.02;

        galaxyGroup.rotation.y += 0.00025;

    }

}

/* ==========================================================
   SHOOTING STARS
========================================================== */

const shootingStars=[];

for(let i=0;i<8;i++){

    const star=new THREE.Mesh(

        new THREE.SphereGeometry(2,8,8),

        new THREE.MeshBasicMaterial({

            color:0xffffff

        })

    );

    resetStar(star);

    shootingStars.push(star);

    scene.add(star);

}

function resetStar(star){

    star.position.set(

        (Math.random()-0.5)*2500,

        Math.random()*1200,

        (Math.random()-0.5)*2500

    );

    star.userData.speed=18+Math.random()*12;

}

function updateShootingStars(){

    shootingStars.forEach(star=>{

        star.position.x-=star.userData.speed;
        star.position.y-=star.userData.speed*0.45;

        if(

            star.position.x<-1800 ||

            star.position.y<-1000

        ){

            resetStar(star);

        }

    });

}

/* ==========================================================
   MAIN LOOP EXTENSION
========================================================== */

const oldAnimate=animate;

animate=function(){

    requestAnimationFrame(animate);

    const t=clock.getElapsedTime();

    galaxyGroup.rotation.y+=0.0006;

    backgroundStars.rotation.y-=0.0001;

    cinematicCamera();

    updateShootingStars();

    material.size=2+Math.sin(t*2)*0.2;

    renderer.render(scene,camera);

}

animate();