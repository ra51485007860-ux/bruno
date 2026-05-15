// 3. Áreas iguais
import prompt from "prompt-sync";
let ler = prompt();

function areasIguais(a1, a2) {
    return a1 == a2;
}

console.log("Base do primeiro retângulo:");
let b1 = Number(ler());

console.log("Altura do primeiro retângulo:");
let h1 = Number(ler());

console.log("Base do segundo retângulo:");
let b2 = Number(ler());

console.log("Altura do segundo retângulo:");
let h2 = Number(ler());

let area1 = b1 * h1;
let area2 = b2 * h2;

console.log("Eles são iguais? " + areasIguais(area1, area2));