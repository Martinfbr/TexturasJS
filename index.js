import * as THREE from "three";
import floor from "../images/textures.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
 
var scene;
var camera;
var renderer;
var plane;
var controls;
 
function createCamera() {
 camera = new THREE.PerspectiveCamera(
 75,
 window.innerWidth / window.innerHeight,
 1,
 100
 );
 
 camera.position.set(0, 0, 20);
}
function createRenderer() {
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);
 controls = new OrbitControls(camera, renderer.domElement);
}
 
function createPlane() {
 let geometry = new THREE.PlaneBufferGeometry(100, 100);
 //let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
 
 const texture = new THREE.TextureLoader().load(
 "threejsfundamentals.org/threejs/resources/images/wall.jpg"
 );
 let material = new THREE.MeshBasicMaterial({ map: texture });
 plane = new THREE.Mesh(geometry, material);
 plane.rotation.x -= Math.PI / 2;
 scene.add(plane);
}
 
function animate(time) {
 controls.update();
 requestAnimationFrame(animate);
 
 renderer.render(scene, camera);
}
 
function init() {
 scene = new THREE.Scene();
 createCamera();
 createPlane();
 createRenderer();
}
 
init();
requestAnimationFrame(animate)