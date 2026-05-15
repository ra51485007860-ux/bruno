import prompt from "prompt-sync";
let ler = prompt();

function converterGramas(kg) {
    return kg * 1000;
}

console.log("Informe o peso em quilos:");
let kg = Number(ler());

let gramas = converterGramas(kg);

console.log(kg + " kg equivalem a " + gramas + " gramas");