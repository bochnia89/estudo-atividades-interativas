//Seleciona o local onde será renderizado (Cena)
//determina as medidas de altura e largura deste local.
// # = 0x
const options = {
    targetSelector: '#scene',
    width: 800, height:600,
    backgroundColor: 0x222222
}

// Criação do Renderizador /Renderer
const renderer = new THREE.WebGLRenderer(
    {antialias: true} //tira o serrilhado (melhora a qualidade)
);

// Resolução de acordo com o dispositivo do usuário
renderer.setPixelRatio(window.devicePixelRatio);

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

//adiciona uma luz (cor + intensidade)
//AmbientLight -> ilumina o OBJETO em todos os lados com uma única intensidade [0x404040, 2]
//HemisphereLight -> recebe dois atributos (cor do céu / cor do chão)[emcima, embaixo]
const light = new THREE.HemisphereLight(
    0xFFFFBB, 0x080820, 1
);

//adiciona a LUZ na CENA 
scene.add(light);

//para controlar
const x3 = new THREEx3 (
    {
        THREE, 
        OrbitControls: THREE.OrbitControls, 
        camera, 
        renderer, 
        scene
    }
);

//parâmetros de controle da camera (para ajuste fino)
x3.add(camera, { label: 'Camera', open: false });
//parâmetros de controle da lampada (para ajuste fino)
x3.add(light, {label: 'Luz', helper: { visible: false }});

