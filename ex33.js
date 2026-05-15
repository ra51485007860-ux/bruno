import prompt from "prompt-sync"
let ler = prompt();

function verificarOrcamento(ganhos, gastos){
    if(ganhos >= gastos){
        return "Você está dentro do orçamento";
    }
    else{
        return "Você está fora do orçamento";
    }
}

console.log("Digite os ganhos");
let ganhos = Number(ler());

console.log("Digite os gastos");
let gastos = Number(ler());

console.log(verificarOrcamento(ganhos, gastos));