import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite um número")
let numero = Number(ler())

let soma = 0

for(let i = 1; i <= numero; i++){

    if(i % 2 == 0){
        soma = soma + i
    }
}

console.log("Resultado: " + soma)