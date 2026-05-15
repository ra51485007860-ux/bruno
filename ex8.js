import prompt from "prompt-sync";
let ler = prompt();

function calcularPerimetro(lado) {
    return lado * 8;
}

console.log("Informe o lado do octógono:");
let lado = Number(ler());

let perimetro = calcularPerimetro(lado);

console.log("O perímetro do octógono é " + perimetro);