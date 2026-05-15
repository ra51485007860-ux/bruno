// 7. Temperatura
import prompt from "prompt-sync"
let ler = prompt();

function situacaoTemperatura(temp){
    if(temp > 41){
        return "Hipertermia";
    }
    else if(temp >= 39.6){
        return "Febre Alta";
    }
    else if(temp >= 37.6){
        return "Febre";
    }
    else if(temp >= 36){
        return "Normal";
    }
    else{
        return "Hipotermia";
    }
}

console.log("Digite a temperatura");
let temp = Number(ler());

console.log(situacaoTemperatura(temp));