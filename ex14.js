import prompt from "prompt-sync";
let ler = prompt();

function converterDolar(reais) {
    let cotacao = 5.16;
    return reais / cotacao;
}

console.log("Informe o valor em reais:");
let reais = Number(ler());

let dolares = converterDolar(reais);

console.log("Valor em dólar: $ " + dolares.toFixed(2));