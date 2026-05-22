import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite uma mensagem")
let frase = ler().toUpperCase()

let resultado = ""

for(let i = 0; i < frase.length; i++){

    if(frase[i] != " "){

        resultado = resultado + frase[i]

        if(i < frase.length - 1){
            resultado = resultado + "-"
        }
    }
}

if(resultado[resultado.length - 1] == "-"){
    resultado = resultado.slice(0, resultado.length - 1)
}

console.log(resultado)