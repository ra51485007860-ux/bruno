import prompt from "prompt-sync"
let ler = prompt()

function calcular(n1, n2, op){

    if(op == "Soma"){
        return n1 + n2
    }
    else if(op == "Subtração"){
        return n1 - n2
    }
    else if(op == "Multiplicação"){
        return n1 * n2
    }
    else if(op == "Divisão"){
        return n1 / n2
    }
    else if(op == "Resto"){
        return n1 % n2
    }
    else{
        return "Operação não suportada"
    }
}

console.log("Digite o primeiro número")
let n1 = Number(ler())

console.log("Digite o segundo número")
let n2 = Number(ler())

console.log("Digite a operação")
let op = ler()

let resultado = calcular(n1, n2, op)

console.log("Resultado: " + resultado)