import prompt from "prompt-sync"
let ler = prompt()

function verificarJokenpo(usuario, maquina){

    if(usuario == maquina){
        return "Empate!"
    }
    else if(usuario == "Pedra" && maquina == "Tesoura"){
        return "Você venceu!"
    }
    else if(usuario == "Papel" && maquina == "Pedra"){
        return "Você venceu!"
    }
    else if(usuario == "Tesoura" && maquina == "Papel"){
        return "Você venceu!"
    }
    else{
        return "A máquina venceu!"
    }
}

console.log("Escolha: Pedra, Papel ou Tesoura")
let usuario = ler()

let numero = parseInt(Math.random() * 3) + 1

let maquina = ""

if(numero == 1){
    maquina = "Pedra"
}
else if(numero == 2){
    maquina = "Papel"
}
else{
    maquina = "Tesoura"
}

let resultado = verificarJokenpo(usuario, maquina)

console.log("Sua jogada: " + usuario)
console.log("Jogada da máquina: " + maquina)
console.log(resultado)