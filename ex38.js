import prompt from "prompt-sync"
let ler = prompt();

function situacao(media){
    if(media >= 8){
        return "Aprovado com Sucesso";
    }
    else if(media >= 6){
        return "Aprovado";
    }
    else if(media >= 3){
        return "Recuperação";
    }
    else if(media > 0){
        return "Reprovado";
    }
    else{
        return "Desistente";
    }
}

console.log("Digite a primeira nota");
let n1 = Number(ler());

console.log("Digite a segunda nota");
let n2 = Number(ler());

console.log("Digite a terceira nota");
let n3 = Number(ler());

let media = (n1 + n2 + n3) / 3;

console.log("Média: " + media);
console.log("Situação: " + situacao(media));