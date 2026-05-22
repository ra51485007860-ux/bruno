import prompt from "prompt-sync"
let ler = prompt()

function Situacao(n1, n2, n3, faltas){

    let media = (n1 + n2 + n3) / 3

    if(faltas > 30){
        return "Situação do Aluno: Reprovado"
    }
    else if(media >= 8){
        return "Situação do Aluno: Aprovado com Sucesso"
    }
    else if(media >= 6){
        return "Situação do Aluno: Aprovado"
    }
    else if(media >= 3){
        return "Situação do Aluno: Recuperação"
    }
    else{
        return "Situação do Aluno: Reprovado"
    }
}

console.log("Digite a primeira nota")
let n1 = Number(ler())

console.log("Digite a segunda nota")
let n2 = Number(ler())

console.log("Digite a terceira nota")
let n3 = Number(ler())

console.log("Digite a quantidade de faltas")
let faltas = Number(ler())

let resultado = Situacao(n1, n2, n3, faltas)

console.log(resultado)