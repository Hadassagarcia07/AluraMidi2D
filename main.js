function tocaSom (seletorAudio){
    const elemento= document. querySelector (seletorAudio);
    if (elemento&&elemento.locaName === 'audio'){
        elemento.play( );
    }
    else{
        //alert('Elemento não encontrado');
        console.log ('Elemento não encontrado ou seletor inválio');
    }
}
const listaDeTeclas= document.querySelectorAll ('.tecla');
//para
for(let contador=0; contador<listaDeTeclas, length;contador++){
    const tecla= listaDeTeclas [contador];
    const instumento= tecla.classList [1]
    const idAudio= '#som-${instrumento}'; //tamplate string
    tecla.Onclick= function( ){
        tocaSom (idAudio);
    }
}
