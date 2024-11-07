// Set up the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add a basic light
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Create a function to load and render PLY files
function loadPLY(fileURL) {
    const loader = new THREE.PLYLoader();
    loader.load(fileURL, function (geometry) {
        const material = new THREE.PointsMaterial({ size: 0.05, color: 0x00ff00 });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
    });
}

// Set up camera position
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Event listeners for buttons to load different PLY files
document.getElementById('loadInput').addEventListener('click', function() {
    loadPLY('path/to/your/input.ply');
});

document.getElementById('loadLabel').addEventListener('click', function() {
    loadPLY('path/to/your/label.ply');
});

document.getElementById('loadOutput').addEventListener('click', function() {
    loadPLY('path/to/your/output.ply');
});
