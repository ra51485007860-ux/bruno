import prompt from "prompt-sync"
let ler = prompt()

function Orcamento(ganhos, gastos){

    let porcentagem = (gastos / ganhos) * 100

    if(porcentagem > 100){
        return "Orçamento comprometido! Hora de rever seus gastos!"
    }
    else if(porcentagem >= 81){
        return "Cuidado, seu orçamento pode ficar comprometido"
    }
    else if(porcentagem >= 51){
        return "Atenção, melhor cortar os gastos"
    }
    else if(porcentagem >= 21){
        return "Muito bem, seus gastos não ultrapassam metade dos ganhos"
    }
    else{
        return "Parabéns, está gerenciando bem seu orçamento"
    }
}

console.log("Digite os ganhos")
let ganhos = Number(ler())

console.log("Digite os gastos")
let gastos = Number(ler())

let resultado = Orcamento(ganhos, gastos)

console.log(resultado)