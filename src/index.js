const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//обозначаем размеры куба
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
const cube = new THREE.Mesh(geometry, material);
//высталвение углов поворота куба
cube.rotation.set(0.2, 0.7, 0); //должно обязательно стоять перед добавлением куба в сцену

scene.add(cube);

camera.position.z = 10;

//рендер объекта
renderer.render(scene, camera);
