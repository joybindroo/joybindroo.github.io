// Tab switching logic
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display the first tab by default
document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('tablinks')[0].click();
});

// Three.js 3D background logic
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background').appendChild(renderer.domElement);

// Add random shapes
var shapes = [];
for (var i = 0; i < 100; i++) {
  var geometry = Math.random() > 0.5 ? new THREE.TorusGeometry(0.5, 0.2, 16, 100) : new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
  var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
  var shape = new THREE.Mesh(geometry, material);
  shape.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
  scene.add(shape);
  shapes.push(shape);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  shapes.forEach(shape => {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
}

animate();

// Resize canvas
window.addEventListener('resize', () => {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide .service');
const totalSlides = slides.length;

function moveSlide(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
}
