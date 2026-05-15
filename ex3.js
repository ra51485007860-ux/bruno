
import prompt from "prompt-sync";
let ler = prompt();

function calcularTriplo(numero) {
    return numero * 3;
}

console.log("Informe um número:");
let numero = Number(ler());

let triplo = calcularTriplo(numero);

console.log("O triplo de " + numero + " é " + triplo);