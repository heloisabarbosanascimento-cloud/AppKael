let frases = ["A alegria do Senhor é a nossa força",
    "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele.",
    "Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Que o Senhor guie seus passos hoje!","Levante-se com alegria e viva a plenitude de Deus.",
    "Cada manhã é uma nova chance que Deus te dá"];

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