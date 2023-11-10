function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

int contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas [contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocasom (idAudio)
    }
    contdor = contador +1;
    console.log(contador);
}
