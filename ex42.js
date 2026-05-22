import prompt from "prompt-sync"
let ler = prompt()

function Cores(cor1, cor2){

    if((cor1 == "Vermelho" && cor2 == "Azul") || 
       (cor1 == "Azul" && cor2 == "Vermelho")){
        return "A combinação das cores é: Roxo"
    }
    else if((cor1 == "Vermelho" && cor2 == "Amarelo") || 
            (cor1 == "Amarelo" && cor2 == "Vermelho")){
        return "A combinação das cores é: Laranja"
    }
    else if((cor1 == "Azul" && cor2 == "Amarelo") || 
            (cor1 == "Amarelo" && cor2 == "Azul")){
        return "A combinação das cores é: Verde"
    }
    else if(cor1 == cor2){
        return "A combinação das cores é: " + cor1
    }
    else{
        return "Apenas cores primárias são aceitas"
    }
}

console.log("Digite a primeira cor")
let cor1 = ler()

console.log("Digite a segunda cor")
let cor2 = ler()

let resultado = Cores(cor1, cor2)

console.log(resultado)