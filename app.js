let frases=["Tudo é possível ao que crê ✨",
"O amor é paciente, o amor é bondoso. 💕",
"Seja feita a tua vontade, assim na terra como no céu. 🙏"];

function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}