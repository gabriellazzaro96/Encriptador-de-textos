var textoLimpio = document.querySelector("#textoLimpio");
var botonEncriptar = document.querySelector("#botonEnc");
var muestraResultado = document.querySelector("#muestraResultado");
var card1 = document.querySelector(".card1");
var encriResuelto = document.querySelector(".encriResuelto");

encriResuelto.style.display = "none";

botonEncriptar.addEventListener("click", btnEncriptar);

//Función de encriptado
function encriptar(textoLimpio){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoLimpio.includes(matrizCodigo[i][0])) {
            textoLimpio = textoLimpio.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
        return textoLimpio;
}

//Botón Encriptar
function btnEncriptar(){
        muestraResultado.value = encriptar(textoLimpio.value);
        encriResuelto.style.display = "block";
        card1.style.display = "none";
        // textoLimpio.value = ""; 
}