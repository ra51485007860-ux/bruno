import prompt from "prompt-sync";
let ler = prompt();

function calcularTotal(compra, cupom) {
    return compra - cupom;
}

console.log("Valor da compra:");
let compra = Number(ler());

console.log("Valor do cupom de desconto:");
let cupom = Number(ler());

let total = calcularTotal(compra, cupom);

console.log("Compra finalizada! O total é de R$ " + total);