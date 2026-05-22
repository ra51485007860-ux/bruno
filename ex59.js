import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite uma frase")
let frase = ler()

for(let i = 0; i < frase.length; i++){
    console.log(frase[i])
}