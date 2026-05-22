import prompt from "prompt-sync"
let ler = prompt()

function verificarVencedor(jogadaUsuario, escolha, jogadaMaquina){

    let soma = jogadaUsuario + jogadaMaquina

    if(soma % 2 == 0 && escolha == "Par"){
        return "Você venceu!"
    }
    else if(soma % 2 != 0 && escolha == "Ímpar"){
        return "Você venceu!"
    }
    else{
        return "A máquina venceu!"
    }
}

console.log("Digite um número de 1 a 5")
let jogadaUsuario = Number(ler())

console.log("Escolha Par ou Ímpar")
let escolha = ler()

let jogadaMaquina = parseInt(Math.random() * 5) + 1

let resultado = verificarVencedor(jogadaUsuario, escolha, jogadaMaquina)

console.log("Sua jogada: " + jogadaUsuario)
console.log("Jogada da máquina: " + jogadaMaquina)
console.log(resultado)