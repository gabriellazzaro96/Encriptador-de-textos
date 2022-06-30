var botonCopiar = document.querySelector("#botonCopiar");
var muestraResultado = document.querySelector("#muestraResultado");

//Botón Copiar
botonCopiar.addEventListener("click",function copiar(){
    muestraResultado.select();    
    navigator.clipboard.writeText(muestraResultado.value);
});