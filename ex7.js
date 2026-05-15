import prompt from "prompt-sync";
let ler = prompt();

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log("Informe a base do triângulo:");
let base = Number(ler());

console.log("Informe a altura do triângulo:");
let altura = Number(ler());

let area = calcularAreaTriangulo(base, altura);

console.log("A área do triângulo é " + area);