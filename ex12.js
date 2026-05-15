import prompt from "prompt-sync";
let ler = prompt();

function calcularDesconto(valorCompra, porcentagem) {
    let desconto = valorCompra * (porcentagem / 100);
    return valorCompra - desconto;
}

console.log("Valor da compra:");
let valorCompra = Number(ler());

console.log("Porcentagem do desconto:");
let porcentagem = Number(ler());

let total = calcularDesconto(valorCompra, porcentagem);

console.log("Compra finalizada! O total é de R$ " + total);