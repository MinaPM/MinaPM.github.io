var blur = 150 / window.devicePixelRatio;
var result = blur + "px";
//alert(result);
document.getElementById("background").style.setProperty("--blurVal", result);


///-------------------Animation----------------------
gsap.registerPlugin(ScrollTrigger);


var timeLine = gsap.timeline();


timeLine.from('.backgroundAnim', {
    scrollTrigger: {
        trigger: '.section2',
        toggleActions: "restart pause reverse pause",
        scrub: true,
        markers: 0,
        start: 'top 80%',
        end: '+=90%',
    },
    transformOrigin: "top center",
    opacity: 0,
    scale: 4,

});



timeLine.from('.a', {
    scrollTrigger: {
        trigger: '.section2',
        toggleActions: "restart pause reverse pause",
        scrub: true,
        markers: 0,
        start: 'top 80%',
        end: '+=90%',
    },
    stagger: {
        amount: 1,
        from: "random",


    },
    transformOrigin: "center",
    scale: .5,

});




timeLine.fromTo('.backgroundAnim', { opacity: 1 }, {
    scrollTrigger: {
        trigger: '.section2',
        toggleActions: "restart  pause reverse pause",
        markers: 0,
        scrub: true,
        start: 'top top',
        end: '+=30%',
    },
    opacity: .3,
    filter: 'blur(2px)'
});


timeLine.from('.title1', {
    scrollTrigger: {
        trigger: '.section2',
        toggleActions: "restart pause reverse pause",
        scrub: true,
        markers: 0,

        start: 'top top',
        end: '+=120%',
    },
    ease: "power4.out",
    stagger: 1,
    opacity: 0,
    y: -20,
    scale: .5
});



ScrollTrigger.create({

    trigger: ".section2",
    start: "top top",
    end: '+=120%',
    markers: 0,
    pin: '.section2',

})





/*********************LANGUAGE*************************/
var language = {
    en: {
        welcome: "Creating Competitive Advantage from Big Data in Retail"
    },
    ar: {
        welcome: "خلق ميزة تنافسية من البيانات الضخمة في البيع بالتجزئة"
    }
};

function setLanguageAR() {

    //begin changing strings
    bigTitle.textContent = language.ar.welcome;
}

function setLanguageEN() {


    //begin changing strings
    bigTitle.textContent = language.en.welcome;

}






////////////////////// sphere\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var sphereContHeight = document.getElementById('sphereCont').clientHeight;


var scene = new THREE.Scene();
document.addEventListener('mousemove', onMouseMove, false);
var camera = new THREE.PerspectiveCamera(75, sphereContHeight / sphereContHeight, 0.1, 1000);
var mouseX;
var mouseY;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(sphereContHeight, sphereContHeight);
document.getElementById('sphereCont').appendChild(renderer.domElement);

renderer.setClearColor(0x000000, 0);

window.addEventListener("resize", function () {
    camera.aspect = sphereContHeight / sphereContHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sphereContHeight, sphereContHeight);
});

var distance = Math.min(200, sphereContHeight / 4);
var geometry = new THREE.Geometry();

for (var i = 0; i < 1600; i++) {

    var vertex = new THREE.Vector3();

    var theta = THREE.Math.randFloatSpread(360);
    var phi = THREE.Math.randFloatSpread(360);

    vertex.x = distance * Math.sin(theta) * Math.cos(phi);
    vertex.y = distance * Math.sin(theta) * Math.sin(phi);
    vertex.z = distance * Math.cos(theta);

    geometry.vertices.push(vertex);
}
var particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x516BFC, size: 2 }));
particles.boundingSphere = 50;


var renderingParent = new THREE.Group();
renderingParent.add(particles);

var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);

camera.position.z = sphereContHeight / 2.3;

var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
var myTween;
function onMouseMove(event) {
    if (myTween)
        myTween.kill();

    mouseX = (event.clientX / sphereContHeight) * 2 - 1;
    mouseY = - (event.clientY / sphereContHeight) * 2 + 1;
    myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY * -1, y: mouseX });
    //particles.rotation.x = mouseY*-1;
    //particles.rotation.y = mouseX;
}
animate();

// rotation animation
var animProps = { scale: 1, xRot: 0, yRot: 0 };


gsap.to(animProps, {
    duration: 120, xRot: Math.PI * 2, yRot: Math.PI * 4, repeat: -1, yoyo: true, ease: "none", onUpdate: function () {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
    }
});











