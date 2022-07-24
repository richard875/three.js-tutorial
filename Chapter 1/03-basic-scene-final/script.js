// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 900,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const cubeGeometry = new THREE.BoxGeometry(1.2, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// Camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
