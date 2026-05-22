import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite um número")
let numero = Number(ler())

for(let i = numero; i >= 1; i--){
    console.log(i)
}