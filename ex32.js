import prompt from "prompt-sync"
let ler = prompt();

function verificarSemaforo(cor){
    if(cor == "Vermelho"){
        return "Espere";
    }
    else if(cor == "Verde"){
        return "Atravesse";
    }
    else{
        return "Farol Inoperante";
    }
}

console.log("Digite a cor do semáforo");
let cor = ler();

console.log(verificarSemaforo(cor));