import prompt from "prompt-sync";
let ler = prompt();

function podeAtravessar(cor) {
    return cor == "Verde";
}

console.log("Digite a cor do semáforo:");
let cor = ler();

console.log("Pode atravessar? " + podeAtravessar(cor));