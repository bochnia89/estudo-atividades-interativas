console.log('scene')

//Será trabalhado a CENA e o OBJETO

//Criar um Cubo (Objeto) / Forma - Material - Combinação
//define a forma
const geometry = new THREE.BoxBufferGeometry();

//define o material (MeshBasicMaterial -> Material tipo básico)
//MeshLambertMaterial considera a Luz utilizada ( sem luz = preto )
const material = new THREE.MeshLambertMaterial(
    {color: 0xFFFFFF } // mudando a cor do objeto 0xeb3468 
);

//criação da combinação = forma + material
const cube = new THREE.Mesh(
    geometry, material
)

//adiciona o Objeto na Cena
scene.add(cube);

//para acompanhar a malha do cubo
x3.add(cube, { label: 'Cubo'});

//Podemos manipular o objeto
//cube.position.x =
//cube.scale.x =
//cube.rotation.x = 

//Rotaciona o Objeto (Cubo) nos eixos X e Y
//cube.rotation.x = 90;
//cube.rotation.y = 90;

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    x3.tick();

    //acompanhar a performance (FPS baixo é o ideal)
    x3.fps(() => {
        //tira infinitas fotos (frame)
        renderer.render(scene, camera); 
    });

   
});

//Pede para desenhar (tira uma foto do objeto)
//renderer.render(scene, camera);