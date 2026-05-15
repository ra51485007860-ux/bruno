import prompt from "prompt-sync";
let ler = prompt();

function podeTransferir(v1, v2) {
    return v1 <= v2;
}

console.log("Digite o diâmetro do primeiro cilindro:");
let d1 = Number(ler());

console.log("Digite a altura do primeiro cilindro:");
let h1 = Number(ler());

console.log("Digite o diâmetro do segundo cilindro:");
let d2 = Number(ler());

console.log("Digite a altura do segundo cilindro:");
let h2 = Number(ler());

let r1 = d1 / 2;
let r2 = d2 / 2;

let v1 = 3.14 * r1 * r1 * h1;
let v2 = 3.14 * r2 * r2 * h2;

console.log("É possível transferir? " + podeTransferir(v1, v2));