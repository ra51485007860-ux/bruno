import prompt from "prompt-sync"
let ler = prompt()

console.log("Quantidade de pontos")
let qtd = Number(ler())

let linha = ""

for(let i = 1; i <= qtd; i++){
    linha = linha + "*"
}

console.log(linha)