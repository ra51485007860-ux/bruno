import prompt from "prompt-sync";
let ler = prompt();

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log("Informe a primeira nota:");
let n1 = Number(ler());

console.log("Informe a segunda nota:");
let n2 = Number(ler());

console.log("Informe a terceira nota:");
let n3 = Number(ler());

let media = calcularMedia(n1, n2, n3);

console.log("A média é " + media);