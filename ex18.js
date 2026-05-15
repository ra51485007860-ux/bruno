import prompt from "prompt-sync";
let ler = prompt();

function calcularTotal(pequeno, medio, grande) {

    let precoPequeno = 13.50;
    let precoMedio = 15.00;
    let precoGrande = 17.50;

    return (pequeno * precoPequeno) +
           (medio * precoMedio) +
           (grande * precoGrande);
}

console.log("Quantidade de açaí pequeno:");
let pequeno = Number(ler());

console.log("Quantidade de açaí médio:");
let medio = Number(ler());

console.log("Quantidade de açaí grande:");
let grande = Number(ler());

let total = calcularTotal(pequeno, medio, grande);

console.log("Total a pagar é R$ " + total);