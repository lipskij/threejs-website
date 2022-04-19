import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "lil-gui";

window.onload = () => {
  const canvas = document.querySelector("canvas.webgl");
  canvas.style.opacity = 1;
  canvas.style.transitionDuration = "1s";
};

///////////////////////////////////////////////////////////
// Nav bar mobile

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");

  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
    document.body.style.height = "100%";
  });

  lines.forEach((line) => {
    line.classList.toggle("open");
  });
});

navLinks.addEventListener("click", () => {
  const sepLink = navLinks;
  sepLink.classList.remove("open");

  document.body.style.overflow = "auto";

  lines.forEach((line) => {
    line.classList.toggle("open");
  });
});

// Intersection observer for images

const options = {
  root: null,
  threshold: 0.5,
};

function observerFn(entries) {
  entries.forEach((entry) => {
    entry.target.style.transform = "translateX(-100px)";
    entry.target.style.opacity = 0;

    if (entry.isIntersecting) {
      entry.target.style.transform = "translateX(0)";
      entry.target.style.opacity = 1;
    }
  });
}
const observer = new IntersectionObserver(observerFn, options);

const image = document.querySelectorAll(".image");

image.forEach((img) => {
  observer.observe(img);
});

// FORM VALIDATION

const email = document.querySelector(".email");
const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactFormButton = document.querySelector(".contact-button");

function emailCheckup() {
  const errorElement = document.querySelector(".error");

  if (!emailCheck.test(email.value)) {
    contactFormButton.disabled = true;
    errorElement.innerHTML = "Please enter a valid email address";
  } else {
    contactFormButton.disabled = false;
    errorElement.innerHTML = "";
  }
}
email.addEventListener("keyup", emailCheckup);

// Footers year

const footer = document.querySelector("footer");
footer.appendChild(document.createTextNode(new Date().getFullYear()));

///////////////////////////////////////////////////////////////////////////////

// const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const triangleBottom = document.querySelector(".triangle-bottom-right");
  if (event.target === triangleBottom) {
    window.scrollTo(0, 0);
  }
}

// Base
// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Light
const ambientLight = new THREE.AmbientLight(0xff0f0f, 1);
scene.add(ambientLight);

// Textures
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/grey.jpeg");

// Mobile sizes
const mobilesSize = window.innerWidth < 700;

const fontsLoader = new THREE.FontLoader();
fontsLoader.load("/fonts/font.json", (font) => {
  const textOneGeometry = new THREE.TextBufferGeometry("Emil Lipskij", {
    font: font,
    size: mobilesSize ? 0.55 : 0.8,
    height: 0.15,
    bevelEnabled: true,
    curvedSegment: 5,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  });
  const textTwoGeometry = new THREE.TextBufferGeometry(
    "Front   End   Developer",
    {
      font: font,
      size: mobilesSize ? 0.65 : 0.8,
      height: 0.2,
      bevelEnabled: true,
      curvedSegment: 5,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4,
    }
  );

  textOneGeometry.center();
  textTwoGeometry.center();

  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

  const text = new THREE.Mesh(textOneGeometry, material);
  const textTwo = new THREE.Mesh(textTwoGeometry, material);

  text.castShadow = true;
  textTwo.castShadow = true;

  text.receiveShadow = true;
  textTwo.receiveShadow = true;

  text.position.y = 1.5;
  text.position.z = 0.3;
  text.rotation.x = -0.1;

  textTwo.position.z = 0.4;
  textTwo.position.y = 0.1;
  textTwo.scale.x = 0.48;
  textTwo.scale.y = 0.48;
  textTwo.scale.z = 0.48;
  textTwo.rotation.x = -0.1;

  scene.add(text, textTwo);
});

// Sizes
const sizes = {
  width: mobilesSize ? window.innerWidth : window.innerWidth / 1.5,
  height: mobilesSize ? window.innerHeight / 1.5 : window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Base camera
const camera = new THREE.PerspectiveCamera(
  100,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0.2;
camera.position.z = 3.5;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
// const clock = new THREE.Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.addEventListener("click", onMouseClick, false);

  window.requestAnimationFrame(tick);
};

tick();
