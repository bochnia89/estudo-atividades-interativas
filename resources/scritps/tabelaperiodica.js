//  var grupo = document.getElementById('group_naometais') ;
//  var grupo2 = document.getElementById('group_metais') ;

// var mexer = false; // variavel de controle de clique no botao



// function funcaoA(){
//     // nega o valor conforme o clique no botao
//     mexer = !mexer;  
//     if (mexer) grupo.classList.toggle('ativo');
//     else grupo.classList.remove('ativo');
//     if (mexer) grupo2.classList.toggle('ativo');
//     else grupo2.classList.remove('ativo');
// }

// var quimico = document.querySelectorAll('.elementos');
// var mexer2 = false;


//     function funcaoB(){
//     // nega o valor conforme o clique no botao
//     mexer2 = !mexer2;  
    
//     if (mexer2) quimico[1].classList.toggle('desativado');
//     else quimico[1].classList.remove('desativado');
//     if (mexer2) quimico[3].classList.toggle('desativado');
//     else quimico[3].classList.remove('desativado');
//     if (mexer2) quimico[2].classList.toggle('desativado');
//     else quimico[2].classList.remove('desativado');
//     if (mexer2) quimico[5].classList.toggle('desativado');
//     else quimico[5].classList.remove('desativado');
    if (mexer2) quimico[6].classList.toggle('desativado');
    else quimico[6].classList.remove('desativado');
 }



// let barra = document.querySelectorAll(".elementos");

//  barra.forEach((item)=>{

    
//     item.addEventListener("click", function(e) {
//         e.preventDefault();
      
//         barra.forEach((i) => {
//             if(i != this){

//                 i.classList.remove("desativado");
//             }
//          });

//        this.classList.toggle("desativado");
      
//      })
//   });


function acao(){
    document.getElementById(tabela_periodica).style.width = "1500";
}

