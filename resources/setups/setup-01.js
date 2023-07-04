//Seleciona o local onde será renderizado (Cena)
//determina as medidas de altura e largura deste local.
// # = 0x
const options = {
    targetSelector: '#scene',
    width: 800, height:600,
    backgroundColor: 0x222222
}

// Criação do Renderizador /Renderer
const renderer = new THREE.WebGLRenderer();

// Determinar o tamanha do Renderer
renderer.setSize(options.width, options.height);

//Pega o seletor (alvo), adiciona o elemento básico HTML pelo DOM
//Será criado um Canvas dinamicamente dentro do HTML 
document.querySelector(
    options.targetSelector
    ).appendChild(renderer.domElement);


// Cria uma Cena
const scene = new THREE.Scene();
// Muda a cor do fundo
scene.background = new THREE.Color(
    options.backgroundColor
);


// Cria a Câmera 
//(PerspectiveCamera é um tipo de camera que mais simular o olhar humano)
// parâmetro Proporção = options.width / options.height
const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

//altura da camera
camera.position.z = 5;