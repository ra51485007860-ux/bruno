// 9. Reabastecimento
import prompt from "prompt-sync";
let ler = prompt();

function precisaReabastecer(capacidade, atual) {
    return atual <= capacidade / 4;
}

console.log("Digite a capacidade do tanque:");
let capacidade = Number(ler());

console.log("Digite a quantidade atual:");
let atual = Number(ler());

console.log("Carro precisa ser reabastecido? " + precisaReabastecer(capacidade, atual));