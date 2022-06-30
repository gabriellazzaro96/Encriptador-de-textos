var textoLimpio = document.querySelector("#textoLimpio");
var muestraResultado = document.querySelector("#muestraResultado");
var card1 = document.querySelector(".card1");
var encriResuelto = document.querySelector(".encriResuelto");
var  botonDesencriptar = document.querySelector("#botonDes");

botonDesencriptar.addEventListener("click",btnDesencriptar);

encriResuelto.style.display = "none";

//Función de desencriptado
function desencriptar(muestraResultado){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (muestraResultado.includes(matrizCodigo[i][1])) {
            muestraResultado = muestraResultado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
        return muestraResultado;
}

//Botón Desencriptar
function btnDesencriptar(){
    muestraResultado.value = desencriptar(textoLimpio.value);
    encriResuelto.style.display = "block";
    card1.style.display = "none";
}