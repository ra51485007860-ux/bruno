import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite um número")
let numero = Number(ler())

let fatorial = 1

for(let i = numero; i >= 1; i--){
    fatorial = fatorial * i
}

console.log("Resultado: " + fatorial)