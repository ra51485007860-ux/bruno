import prompt from "prompt-sync";
let ler = prompt();

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

console.log("Informe a base do retângulo:");
let base = Number(ler());

console.log("Informe a altura do retângulo:");
let altura = Number(ler());

let area = calcularAreaRetangulo(base, altura);

console.log("A área do retângulo é " + area);