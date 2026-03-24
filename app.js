let frases=["F1",
"F2",
"F3"];

function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}