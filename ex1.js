import prompt from "prompt-sync";
let ler = prompt();

function somar(n1, n2) {
    return n1 + n2;
}

console.log("Primeiro número:");
let n1 = Number(ler());

console.log("Segundo número:");
let n2 = Number(ler());

let soma = somar(n1, n2);

console.log("A soma de " + n1 + " + " + n2 + " é " + soma);