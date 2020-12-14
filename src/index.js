//Пользователь вводит значения отображаемого куба
let boxLength = prompt(
  "Веедите длину прямоугольника. (предпочтительно значение от 1 до 10)",
  5
);

let boxWidth = prompt(
  "Веедите ширину прямоугольника. (предпочтительно значение от 1 до 10)",
  5
);
let boxHeight = prompt(
  "Веедите высоту прямоугольника. (предпочтительно значение от 1 до 10)",
  5
);

const scene = new THREE.Scene();
// Задается вид "камеры", смотрящий на созданный объект. Задаются ее параметры.
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Обозначаем размеры прямоугольника
const geometry = new THREE.BoxBufferGeometry(
  `${boxLength}`,
  `${boxHeight}`,
  `${boxWidth}`
);
// Задается цвет созданной модели, так же можно вставить изображения.
const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
const cube = new THREE.Mesh(geometry, material);
// Высталвение углов поворота отображаемой модели
cube.rotation.set(0.2, 0.7, 0); // Должно обязательно стоять перед добавлением модели в сцену

scene.add(cube);
// Перемещение позиции "камеры", в данном случае по оси Z.
// Так же можно задать угол ее наклона через параметры .rotation
camera.position.z = 30;

// Рендер объекта
renderer.render(scene, camera);
