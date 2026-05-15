import prompt from "prompt-sync";
let ler = prompt();

function verificarFebre(temp) {
    return temp >= 37.3;
}

console.log("Digite a temperatura corporal:");
let temperatura = Number(ler());

console.log("Você está com febre? " + verificarFebre(temperatura));