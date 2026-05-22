import prompt from "prompt-sync"
let ler = prompt()

console.log("Base")
let base = Number(ler())

console.log("Altura")
let altura = Number(ler())

for(let i = 1; i <= altura; i++){

    let linha = ""

    for(let j = 1; j <= base; j++){
        linha = linha + "* "
    }

    console.log(linha)
}