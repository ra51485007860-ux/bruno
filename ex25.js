import prompt from "prompt-sync";
let ler = prompt();

function respostaCorreta(resposta) {
    return resposta == "Chandler";
}

console.log("Qual é o personagem de Friends que trabalha com IT?");
let resposta = ler();

console.log("Resposta correta: " + respostaCorreta(resposta));