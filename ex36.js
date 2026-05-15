import prompt from "prompt-sync"
let ler = prompt();

function calcularPreco(peso){
    if(peso <= 0){
        return "Peso inválido";
    }
    else if(peso >= 1000){
        return peso * 0.03;
    }
    else{
        return peso * 0.035;
    }
}

console.log("Digite o peso");
let peso = Number(ler());

console.log("Total: " + calcularPreco(peso));