import prompt from "prompt-sync"
let ler = prompt()

console.log("Tamanho do lado")
let lado = Number(ler())

for(let i = 1; i <= lado; i++){

    let linha = ""

    for(let j = 1; j <= lado; j++){
        linha = linha + "* "
    }

    console.log(linha)
}