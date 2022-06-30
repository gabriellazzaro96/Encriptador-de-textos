var card1 = document.querySelector(".card1");
var encriResuelto = document.querySelector(".encriResuelto");

//Reseteo
const testo= document.querySelector("#textoLimpio");
testo.addEventListener("keydown", anexar);

function anexar(evt){
    var e = evt;        //Obtenemos el event
    var key = evt.keyCode; //Tecla presionada
    console.log("key pressed: " + key);  
    
    if (key == "8") {
        encriResuelto.setAttribute('style', 'display: none');
        encriResuelto.style.display = "none";
        card1.style.display = "block";
    }
}





