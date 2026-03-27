let frases=["A fé é a certeza das coisas que se esperam",
"O choro pode durar uma noite, mas a alegria vem pela manhã.",
"Aqueles que esperam no Senhor renovam as suas forças."];

function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}