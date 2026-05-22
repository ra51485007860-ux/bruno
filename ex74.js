import prompt from "prompt-sync"
let ler = prompt()

console.log("Digite a posição")
let posicao = Number(ler())

let atual = 1
let anterior = 1

if(posicao == 1 || posicao == 2){
    console.log("Resultado: 1")
}
else{

    for(let i = 3; i <= posicao; i++){

        let proximo = atual + anterior

        anterior = atual
        atual = proximo
    }

    console.log("Resultado: " + atual)
}