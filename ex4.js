import prompt from "prompt-sync";
let ler = prompt();

function calcularMetade(numero) {
    return numero / 2;
}

console.log("Informe um número:");
let numero = Number(ler());

let metade = calcularMetade(numero);

console.log("A metade de " + numero + " é " + metade);