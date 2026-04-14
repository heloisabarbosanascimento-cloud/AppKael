let frases = ["Tudo é possível ao que crê ✨",
    "O amor é paciente, o amor é bondoso. 💕",
    "Seja feita a tua vontade, assim na terra como no céu. 🙏"];

let frasesCopiada = [...frase];
function geradorMensagem() {
    if (frases.length == 0) {
        frases = [...frasesCopiada];
    }
    let indiceGerado = Math.floor(Math.random() * (frases.length));
    let fraseGerada = frases[indiceGerado];
    console.log(fraseGerada)
    document.querySelector("#msg").textContent = fraseGerada;
}
geradorMensagem()