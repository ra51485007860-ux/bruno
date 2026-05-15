import prompt from "prompt-sync";
let ler = prompt();

function calcularDobro(numero) {
    return numero * 2;
}

console.log("Informe um número:");
let numero = Number(ler());

let dobro = calcularDobro(numero);

console.log("O dobro de " + numero + " é " + dobro);