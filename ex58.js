import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite um número")
let numero = Number(ler())

for(let i = 1; i <= 10; i++){

    let resultado = numero * i

    console.log(numero + " x " + i + " = " + resultado)
}