import prompt from "prompt-sync"
let ler = prompt()

let n1 = -1
let n2 = -1
let n3 = -1

while(n1 < 0 || n1 > 10){

    console.log("Digite a primeira nota")
    n1 = Number(ler())

    if(n1 < 0 || n1 > 10){
        console.log("Digite uma nota entre 0 e 10")
    }
}

while(n2 < 0 || n2 > 10){

    console.log("Digite a segunda nota")
    n2 = Number(ler())

    if(n2 < 0 || n2 > 10){
        console.log("Digite uma nota entre 0 e 10")
    }
}

while(n3 < 0 || n3 > 10){

    console.log("Digite a terceira nota")
    n3 = Number(ler())

    if(n3 < 0 || n3 > 10){
        console.log("Digite uma nota entre 0 e 10")
    }
}

let media = (n1 + n2 + n3) / 3

console.log("Média: " + media)