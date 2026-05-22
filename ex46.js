import prompt from "prompt-sync"
let ler = prompt()

function Curso(curso, desconto){

    let valor = 0

    if(curso == "SI"){
        valor = 550
    }
    else if(curso == "ADS"){
        valor = 750
    }
    else if(curso == "CS"){
        valor = 1150
    }
    else if(curso == "EC"){
        valor = 1300
    }
    else if(curso == "ES"){
        valor = 950
    }

    if(desconto == "true"){
        valor = 0
    }

    return valor
}

console.log("Digite o curso")
let curso = ler()

console.log("Possui desconto? (true ou false)")
let desconto = ler()

let valor = Curso(curso, desconto)

console.log("Valor do curso: " + valor)