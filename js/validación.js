//Validación de caracteres
const texto= document.querySelector("#textoLimpio");
texto.addEventListener("keypress", function(e){

    if (!checkChar(e)){
        e.preventDefault();
        alert("solo minúsculas sin acentos ni saltos de línea")
    }
})

function checkChar(e){
    const char= String.fromCharCode(e.keyCode);

    if (char.match("[a-z ]")) {
        return(true);
    }
}