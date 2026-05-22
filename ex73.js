import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite um número")
let numero = Number(ler())

let divisores = 0

for(let i = 1; i <= numero; i++){

    if(numero % i == 0){
        divisores++
    }
}

if(numero <= 1){
    console.log("Não é primo")
}
else if(divisores == 2){
    console.log("É primo")
}
else{
    console.log("Não é primo")
}