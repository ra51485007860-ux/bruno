import prompt from "prompt-sync"
let ler = prompt();

function calcularIngresso(tipo, qtd){
    if(tipo == "Meia"){
        return qtd * 14.25;
    }
    else if(tipo == "Inteira"){
        return qtd * 28.50;
    }
    else{
        return "Tipo inválido";
    }
}

console.log("Digite o tipo de ingresso");
let tipo = ler();

console.log("Digite a quantidade");
let qtd = Number(ler());

console.log("Total: " + calcularIngresso(tipo, qtd));