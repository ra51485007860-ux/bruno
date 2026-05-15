import prompt from "prompt-sync";
let ler = prompt();

function calcularTotal(quantidade) {
    let precoAcai = 13.50;
    return quantidade * precoAcai;
}

console.log("Quantidade de açaís:");
let quantidade = Number(ler());

let total = calcularTotal(quantidade);

console.log("Total a pagar é R$ " + total);