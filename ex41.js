import prompt from "prompt-sync"
let ler = prompt()

function Triangulo(a, b, c){

    if(a == b && b == c){
        return "Esse é um triângulo Equilátero"
    }
    else if(a == b || a == c || b == c){
        return "Esse é um triângulo Isósceles"
    }
    else{
        return "Esse é um triângulo Escaleno"
    }
}

console.log("Digite o primeiro lado")
let a = Number(ler())

console.log("Digite o segundo lado")
let b = Number(ler())

console.log("Digite o terceiro lado")
let c = Number(ler())

let resultado = Triangulo(a, b, c)

console.log(resultado);