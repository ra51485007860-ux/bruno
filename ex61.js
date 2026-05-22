import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite a altura")
let altura = Number(ler())

for(let i = altura; i >= 1; i--){

    let linha = ""

    for(let j = 1; j <= i; j++){
        linha = linha + "* "
    }

    console.log(linha)
}