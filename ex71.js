import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite uma palavra")
let palavra = ler()

let invertido = ""

for(let i = palavra.length - 1; i >= 0; i--){
    invertido = invertido + palavra[i]
}

if(palavra == invertido){
    console.log("É um palíndromo")
}
else{
    console.log("Não é um palíndromo")
}