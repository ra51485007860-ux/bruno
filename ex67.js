import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite a base")
let base = Number(ler())

console.log("Digite o expoente")
let expoente = Number(ler())

if(base < 0 || expoente < 0){
    console.log("Cálculo Inválido")
}
else{

    let resultado = 1

    for(let i = 1; i <= expoente; i++){
        resultado = resultado * base
    }

    console.log("Resultado: " + resultado)
}