import prompt from "prompt-sync";
let ler = prompt();

function ehPar(numero) {
    return numero % 2 == 0;
}

console.log("Digite um número:");
let numero = Number(ler());

console.log("Número é par? " + ehPar(numero));