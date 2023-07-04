var metais = document.querySelectorAll('div.metais');
var naometais = document.querySelectorAll('div.naoMetais');
var metaisTransicao = document.querySelectorAll('div.metaisTransicao');
var gases = document.querySelectorAll('div.gases');
var desconhecida = document.querySelectorAll('div.desconhecida');
var hidrogenio = document.querySelectorAll('div.clahidrogenio');

var cor = "#fff";
var corMetais = "#fbef82";
var cornaoMetais = "#f39ca2";
var cormetaisTransicao = "#fbba00";
var corgases = "#a4bde4";
var cordesconhecida = "#dadada";
var corhidro = "3px 3px 5px rgba(0, 0, 0, 0.5)";
var normal = "0px 0px 0px rgba(0, 0, 0, 0.5)";

var mexer = false; // variavel de controle de clique no botao

// Filtra apenas os Elementos METAIS
function catemetais() {
    mexer = !mexer;
    for (let i = 0; i < naometais.length; i++) {

        if (mexer) naometais[i].style.background = cor;
        else naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {

        if (mexer) metaisTransicao[i].style.background = cor;
        else metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < gases.length; i++) {

        if (mexer) gases[i].style.background = cor;
        else gases[i].style.background = corgases;
    }
    for (let i = 0; i < desconhecida.length; i++) {

        if (mexer) desconhecida[i].style.background = cor;
        else desconhecida[i].style.background = cordesconhecida;
    }

}

// Filtra apenas os Elementos NÃO METAIS
function cateNaometais() {
    mexer = !mexer;
    for (let i = 0; i < metais.length; i++) {
        if (mexer) metais[i].style.background = cor;
        else metais[i].style.background = corMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {

        if (mexer) metaisTransicao[i].style.background = cor;
        else metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < gases.length; i++) {

        if (mexer) gases[i].style.background = cor;
        else gases[i].style.background = corgases;
    }
    for (let i = 0; i < desconhecida.length; i++) {

        if (mexer) desconhecida[i].style.background = cor;
        else desconhecida[i].style.background = cordesconhecida;
    }

}

// Filtra apenas os Elementos METAIS DE TRANSIÇÃO INTERNA
function cateMetaistras() {
    mexer = !mexer;
    for (let i = 0; i < metais.length; i++) {
        if (mexer) metais[i].style.background = cor;
        else metais[i].style.background = corMetais;
    }
    for (let i = 0; i < naometais.length; i++) {

        if (mexer) naometais[i].style.background = cor;
        else naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < gases.length; i++) {

        if (mexer) gases[i].style.background = cor;
        else gases[i].style.background = corgases;
    }
    for (let i = 0; i < desconhecida.length; i++) {

        if (mexer) desconhecida[i].style.background = cor;
        else desconhecida[i].style.background = cordesconhecida;
    }

}

// Filtra apenas os Elementos: GASES NOBRES
function cateGases() {
    mexer = !mexer;
    for (let i = 0; i < metais.length; i++) {
        if (mexer) metais[i].style.background = cor;
        else metais[i].style.background = corMetais;
    }
    for (let i = 0; i < naometais.length; i++) {

        if (mexer) naometais[i].style.background = cor;
        else naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {

        if (mexer) metaisTransicao[i].style.background = cor;
        else metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < desconhecida.length; i++) {

        if (mexer) desconhecida[i].style.background = cor;
        else desconhecida[i].style.background = cordesconhecida;
    }

}

// Filtra apenas os Elementos: CLASSIFICAÇÃO DESCONHECIDA
function cateDesconhecida() {
    mexer = !mexer;
    for (let i = 0; i < metais.length; i++) {
        if (mexer) metais[i].style.background = cor;
        else metais[i].style.background = corMetais;
    }
    for (let i = 0; i < naometais.length; i++) {

        if (mexer) naometais[i].style.background = cor;
        else naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {

        if (mexer) metaisTransicao[i].style.background = cor;
        else metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < gases.length; i++) {

        if (mexer) gases[i].style.background = cor;
        else gases[i].style.background = corgases;
    }

}

// Filtra apenas os Elementos: HIDROGÊNIO
function cateHidro() {
    mexer = !mexer;
    for (let i = 0; i < hidrogenio.length; i++) {
        if (mexer) hidrogenio[i].style.boxShadow = corhidro;
        else hidrogenio[i].style.boxShadow = normal;
    }

    for (let i = 0; i < metais.length; i++) {
        if (mexer) metais[i].style.background = cor;
        else metais[i].style.background = corMetais;
    }
    for (let i = 0; i < naometais.length; i++) {

        if (mexer) naometais[i].style.background = cor;
        else naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {

        if (mexer) metaisTransicao[i].style.background = cor;
        else metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < gases.length; i++) {

        if (mexer) gases[i].style.background = cor;
        else gases[i].style.background = corgases;
    }
    for (let i = 0; i < desconhecida.length; i++) {

        if (mexer) desconhecida[i].style.background = cor;
        else desconhecida[i].style.background = cordesconhecida;
    }

}



// Limpa filtro
function cateTotal() {

    for (let i = 0; i < hidrogenio.length; i++) {

        hidrogenio[i].style.boxShadow = normal;
    }

    for (let i = 0; i < metais.length; i++) {

        metais[i].style.background = corMetais;
    }
    for (let i = 0; i < naometais.length; i++) {


        naometais[i].style.background = cornaoMetais;
    }
    for (let i = 0; i < metaisTransicao.length; i++) {


        metaisTransicao[i].style.background = cormetaisTransicao;
    }
    for (let i = 0; i < gases.length; i++) {


        gases[i].style.background = corgases;
    }
    for (let i = 0; i < desconhecida.length; i++) {


       desconhecida[i].style.background = cordesconhecida;
    }

}