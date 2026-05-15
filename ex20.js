import prompt from "prompt-sync";
let ler = prompt();

function calcularSalario(salarioBase, bonusPercentual, descontos) {

    let bonus = salarioBase * (bonusPercentual / 100);

    return salarioBase + bonus - descontos;
}

console.log("Salário base:");
let salarioBase = Number(ler());

console.log("Bônus mensal:");
let bonusPercentual = Number(ler());

console.log("Total de descontos:");
let descontos = Number(ler());

let salarioLiquido = calcularSalario(salarioBase, bonusPercentual, descontos);

console.log("Seu salário líquido é de R$ " + salarioLiquido);