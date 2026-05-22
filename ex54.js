import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite o início")
let inicio = Number(ler())

console.log("Digite o fim")
let fim = Number(ler())

for(let i = inicio; i <= fim; i++){

    if(i % 2 == 0){
        console.log(i)
    }
}