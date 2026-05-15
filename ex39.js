import prompt from "prompt-sync"
let ler = prompt();

function classificar(imc){
    if(imc >= 40){
        return "Obesidade Grau III";
    }
    else if(imc >= 35){
        return "Obesidade Grau II";
    }
    else if(imc >= 30){
        return "Obesidade Grau I";
    }
    else if(imc >= 25){
        return "Sobrepeso";
    }
    else if(imc >= 18.5){
        return "Peso Normal";
    }
    else{
        return "Abaixo do Peso";
    }
}

console.log("Digite a altura");
let altura = Number(ler());

console.log("Digite o peso");
let peso = Number(ler());

let imc = peso / (altura * altura);

console.log("IMC: " + imc);
console.log(classificar(imc));