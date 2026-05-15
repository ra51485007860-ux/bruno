import prompt from "prompt-sync"
let ler = prompt();

function nomeDia(dia){
    if(dia == 0){
        return "Domingo";
    }
    else if(dia == 1){
        return "Segunda";
    }
    else if(dia == 2){
        return "Terça";
    }
    else if(dia == 3){
        return "Quarta";
    }
    else if(dia == 4){
        return "Quinta";
    }
    else if(dia == 5){
        return "Sexta";
    }
    else if(dia == 6){
        return "Sábado";
    }
    else{
        return "Dia inválido";
    }
}

console.log("Digite o número do dia");
let dia = Number(ler());

console.log(nomeDia(dia));