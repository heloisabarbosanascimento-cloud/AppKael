let frases = ["Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele. Bom dia com muita fé e gratidão!",
     "Que o Senhor seja sua força e refúgio neste novo amanhecer. Confie no Senhor e Ele guiará seus passos. Bom dia!", 
     "O Senhor é meu pastor, nada me faltará. Que essa promessa te acompanhe ao longo do dia. Bom dia abençoado!",
      "Confia no Senhor de todo o teu coração e não te apoies em teu próprio entendimento. Que seu dia seja repleto de sabedoria divina!",
       "Porque sou eu que conheço os planos que tenho para vocês, planos de fazê-los prosperar e não de lhes causar dano. Bom dia, que Deus guie seus planos hoje!", 
       "Aqueles que esperam no Senhor renovam as suas forças. Que seu dia seja de vitórias e renovação!"];

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