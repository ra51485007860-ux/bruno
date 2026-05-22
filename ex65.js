import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite o início")
let inicio = Number(ler())

console.log("Digite o fim")
let fim = Number(ler())

let soma = 0

for(let i = inicio; i <= fim; i++){

    if(i % 2 == 0){
        soma = soma + i
    }
}

console.log("Resultado: " + soma)