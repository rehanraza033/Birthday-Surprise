/* ==========================================================
   EARTH ENGINE V2
========================================================== */

const earthContainer = document.getElementById("earthContainer");

const earthScene = new THREE.Scene();

const earthCamera = new THREE.PerspectiveCamera(
    45,
    earthContainer.clientWidth / earthContainer.clientHeight,
    0.1,
    1000
);

const earthRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

earthRenderer.setSize(
    earthContainer.clientWidth,
    earthContainer.clientHeight
);

earthContainer.appendChild(earthRenderer.domElement);

earthCamera.position.z = 3;


/* ==========================================================
   LIGHTS
========================================================== */

const ambient = new THREE.AmbientLight(
    0xffffff,
    1.2
);

earthScene.add(ambient);

const light = new THREE.DirectionalLight(
    0xffffff,
    2
);

light.position.set(5,3,5);

earthScene.add(light);


/* ==========================================================
   EARTH
========================================================== */

const textureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(
    1,
    64,
    64
);

const earthMaterial = new THREE.MeshStandardMaterial({

    color:0x2266ff,

    roughness:1,

    metalness:0

});

const earthMesh = new THREE.Mesh(

    earthGeometry,

    earthMaterial

);

earthScene.add(earthMesh);/* ==========================================================
   EARTH ENGINE V2
   PART 2 / 5
========================================================== */

/* ==========================================================
   CLOUDS
========================================================== */

const cloudGeometry = new THREE.SphereGeometry(
    1.03,
    64,
    64
);

const cloudMaterial = new THREE.MeshStandardMaterial({

    color:0xffffff,

    transparent:true,

    opacity:0.18

});

const clouds = new THREE.Mesh(

    cloudGeometry,
    cloudMaterial

);

earthScene.add(clouds);


/* ==========================================================
   GLOW
========================================================== */

const glowGeometry = new THREE.SphereGeometry(
    1.15,
    64,
    64
);

const glowMaterial = new THREE.MeshBasicMaterial({

    color:0x00ccff,

    transparent:true,

    opacity:0.18,

    side:THREE.BackSide

});

const glow = new THREE.Mesh(

    glowGeometry,
    glowMaterial

);

earthScene.add(glow);


/* ==========================================================
   STARS
========================================================== */

const starGeo = new THREE.BufferGeometry();

const starArray = [];

for(let i=0;i<2500;i++){

    starArray.push(

        (Math.random()-0.5)*120,

        (Math.random()-0.5)*120,

        (Math.random()-0.5)*120

    );

}

starGeo.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(

        starArray,

        3

    )

);

const starMat = new THREE.PointsMaterial({

    color:0xffffff,

    size:0.05

});

const earthStars = new THREE.Points(

    starGeo,

    starMat

);

earthScene.add(earthStars);/* ==========================================================
   EARTH ENGINE V2
   PART 3 / 5
========================================================== */

/* ==========================================================
   ROTATION
========================================================== */

let earthSpeed = 0.003;

function rotateEarth(){

    earthMesh.rotation.y += earthSpeed;

    clouds.rotation.y += earthSpeed * 1.15;

    glow.rotation.y += earthSpeed * 0.5;

    earthStars.rotation.y += 0.0003;

}

/* ==========================================================
   FLOATING EFFECT
========================================================== */

let clock = new THREE.Clock();

function floatingEffect(){

    const t = clock.getElapsedTime();

    earthMesh.position.y = Math.sin(t) * 0.05;

    clouds.position.y = earthMesh.position.y;

    glow.position.y = earthMesh.position.y;

}

/* ==========================================================
   CAMERA MOTION
========================================================== */

function animateCamera(){

    earthCamera.position.x = Math.sin(clock.getElapsedTime()*0.3)*0.15;

    earthCamera.lookAt(0,0,0);

}/* ==========================================================
   EARTH ENGINE V2
   PART 4 / 5
========================================================== */

/* ==========================================================
   ANIMATION LOOP
========================================================== */

function earthAnimate(){

    requestAnimationFrame(earthAnimate);

    rotateEarth();

    floatingEffect();

    animateCamera();

    earthRenderer.render(

        earthScene,

        earthCamera

    );

}

earthAnimate();

/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    earthCamera.aspect =

        earthContainer.clientWidth /

        earthContainer.clientHeight;

    earthCamera.updateProjectionMatrix();

    earthRenderer.setSize(

        earthContainer.clientWidth,

        earthContainer.clientHeight

    );

});


/* ==========================================================
   SHOW / HIDE
========================================================== */

function showEarth(){

    earth.style.display="flex";

}

function hideEarth(){

    earth.style.display="none";

}/* ==========================================================
   EARTH ENGINE V2
   PART 5 / 5
========================================================== */

/* ==========================================================
   CAMERA ZOOM
========================================================== */

function earthZoomIn(){

    if(earthCamera.position.z > 2.2){

        earthCamera.position.z -= 0.003;

    }

}

function earthZoomOut(){

    if(earthCamera.position.z < 3){

        earthCamera.position.z += 0.003;

    }

}


/* ==========================================================
   EARTH PULSE
========================================================== */

let pulse = 0;

function earthPulse(){

    pulse += 0.02;

    const scale = 1 + Math.sin(pulse) * 0.01;

    earthMesh.scale.set(scale,scale,scale);

    clouds.scale.set(

        scale+0.01,

        scale+0.01,

        scale+0.01

    );

}


/* ==========================================================
   UPDATE LOOP
========================================================== */

const oldEarthAnimate = earthAnimate;

earthAnimate = function(){

    requestAnimationFrame(earthAnimate);

    rotateEarth();

    floatingEffect();

    animateCamera();

    earthZoomIn();

    earthPulse();

    earthRenderer.render(

        earthScene,

        earthCamera

    );

};

earthAnimate();


/* ==========================================================
   END OF EARTH.JS
========================================================== */