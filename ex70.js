import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite uma frase")
let frase = ler()

let invertido = ""

for(let i = frase.length - 1; i >= 0; i--){
    invertido = invertido + frase[i]
}

console.log(invertido)