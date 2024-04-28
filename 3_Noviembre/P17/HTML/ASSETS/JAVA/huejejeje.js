// Lo intente, no me sale ya casi nada de JS
// Creo que tendria que meterlo en un canvas o algo
document.getElementById("clicame")
$("#clicame").click(
    heujeje()
);

function heujeje(){
    const risa=new Audio("./risa.mp3")
    risa.play();
}