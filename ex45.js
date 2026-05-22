import prompt from "prompt-sync"
let ler = prompt()

function verificarCandidato(nota, corte, minima){

    if(nota < corte){
        return "Candidato não passou"
    }
    else if(nota >= minima){
        return "Candidato aprovado"
    }
    else{
        return "Candidato em lista de espera"
    }
}

console.log("Digite a nota do candidato")
let nota = Number(ler())

console.log("Digite a nota de corte")
let corte = Number(ler())

console.log("Digite a nota mínima para aprovação")
let minima = Number(ler())

let resultado = verificarCandidato(nota, corte, minima)

console.log(resultado)