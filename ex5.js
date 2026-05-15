import prompt from "prompt-sync";
let ler = prompt();

function calcularAreaQuadrado(lado) {
    return lado * lado;
}

console.log("Informe o lado do quadrado:");
let lado = Number(ler());

let area = calcularAreaQuadrado(lado);

console.log("A área do quadrado é " + area);