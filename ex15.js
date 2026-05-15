import prompt from "prompt-sync";
let ler = prompt();

function calcularParcela(valorTotal, parcelas) {
    return valorTotal / parcelas;
}

console.log("Valor total da compra:");
let valorTotal = Number(ler());

console.log("Quantidade de parcelas:");
let parcelas = Number(ler());

let valorParcela = calcularParcela(valorTotal, parcelas);

console.log("Sua compra de R$ " + valorTotal.toFixed(2) +
" em " + parcelas + "x de R$ " + valorParcela);