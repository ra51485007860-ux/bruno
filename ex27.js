import prompt from "prompt-sync";
let ler = prompt();

function acimaPeso(imc) {
    return imc >= 25;
}

console.log("Digite a altura:");
let altura = Number(ler());

console.log("Digite o peso:");
let peso = Number(ler());

let imc = peso / (altura * altura);

console.log("Seu IMC é " + imc);
console.log("Está acima do peso ideal? " + acimaPeso(imc));