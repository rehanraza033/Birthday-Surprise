/* ==========================================================
   GALAXY ENGINE V2
========================================================== */

const canvas = document.getElementById("space");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 1500;

/* ==========================================================
   STARS
========================================================== */

const starGeometry = new THREE.BufferGeometry();

const starVertices = [];

for (let i = 0; i < 25000; i++) {

    starVertices.push(

        (Math.random() - 0.5) * 8000,
        (Math.random() - 0.5) * 8000,
        (Math.random() - 0.5) * 8000

    );

}

starGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        starVertices,
        3
    )

);

const starMaterial = new THREE.PointsMaterial({

    color: 0xffffff,

    size: 2,

    transparent: true,

    opacity: 0.9

});

const stars = new THREE.Points(

    starGeometry,

    starMaterial

);

scene.add(stars);

/* ==========================================================
   NEBULA
========================================================== */

const nebulaGeometry = new THREE.BufferGeometry();

const nebulaVertices = [];

for (let i = 0; i < 5000; i++) {

    nebulaVertices.push(

        (Math.random() - 0.5) * 5000,
        (Math.random() - 0.5) * 5000,
        (Math.random() - 0.5) * 5000

    );

}

nebulaGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        nebulaVertices,
        3
    )

);

const nebulaMaterial = new THREE.PointsMaterial({

    color: 0x00ffff,

    size: 4,

    transparent: true,

    opacity: 0.12

});

const nebula = new THREE.Points(

    nebulaGeometry,

    nebulaMaterial

);

scene.add(nebula);/* ==========================================================
   SHOOTING STARS
========================================================== */

const shootingGeometry = new THREE.SphereGeometry(6,16,16);

const shootingMaterial = new THREE.MeshBasicMaterial({

    color:0xffffff

});

const shootingStar = new THREE.Mesh(

    shootingGeometry,
    shootingMaterial

);

scene.add(shootingStar);

resetShootingStar();

function resetShootingStar(){

    shootingStar.position.set(

        (Math.random()-0.5)*4000,

        1200,

        (Math.random()-0.5)*3000

    );

}

/* ==========================================================
   CAMERA ANIMATION
========================================================== */

let fly = false;



/* ==========================================================
   ANIMATION LOOP
========================================================== */

function animate(){

    requestAnimationFrame(animate);

    stars.rotation.y += 0.00015;
    stars.rotation.x += 0.00005;

    nebula.rotation.y += 0.00025;

    shootingStar.position.x += 18;
    shootingStar.position.y -= 10;

    if(shootingStar.position.x>2200){

        resetShootingStar();

    }

    if(fly){

        camera.position.z -= 5;

        stars.rotation.y += 0.0015;

        if(camera.position.z<250){

            fly=false;

            if(typeof playJourney==="function"){

                playJourney();

            }

        }

    }

    renderer.render(scene,camera);

}

animate();

/* ==========================================================
   RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});