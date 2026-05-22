import prompt from "prompt-sync"
let ler = prompt()

function Ingresso(qtd, tipo, dia, nacional){

    let valor = 28.50

    if(tipo == "Meia"){
        valor = 14.25
    }

    if(nacional == "true"){
        valor = 5
    }

    if(dia == "quarta-feira"){
        valor = valor / 2
    }

    return valor * qtd
}

console.log("Quantidade de ingressos")
let qtd = Number(ler())

console.log("Tipo (Inteira ou Meia)")
let tipo = ler()

console.log("Dia da semana")
let dia = ler()

console.log("Filme nacional? (true ou false)")
let nacional = ler()

let total = Ingresso(qtd, tipo, dia, nacional)

console.log("Total a pagar: R$ " + total)