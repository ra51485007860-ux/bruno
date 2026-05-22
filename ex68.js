import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite uma mensagem")
let frase = ler()

let resultado = ""

for(let i = 0; i < frase.length; i++){

    resultado = resultado + frase[i]

    if(i < frase.length - 1){
        resultado = resultado + "-"
    }
}

console.log(resultado)