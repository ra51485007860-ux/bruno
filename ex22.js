
import prompt from "prompt-sync";
let ler = prompt();

function passou(media) {
    return media >= 6;
}

console.log("Digite a primeira nota:");
let n1 = Number(ler());

console.log("Digite a segunda nota:");
let n2 = Number(ler());

console.log("Digite a terceira nota:");
let n3 = Number(ler());

let media = (n1 + n2 + n3) / 3;

console.log("A média do aluno é " + media);
console.log("O aluno passou? " + passou(media));