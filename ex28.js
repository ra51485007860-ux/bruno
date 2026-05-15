import prompt from "prompt-sync";
let ler = prompt();

function calcularTempo(paginas, tempo) {
    return (paginas * tempo) / 3600;
}

console.log("Digite o nome do livro:");
let nome = ler();

console.log("Digite o total de páginas:");
let paginas = Number(ler());

console.log("Digite o tempo por página:");
let tempo = Number(ler());

console.log("Você lerá " + nome + " em " + calcularTempo(paginas, tempo) + " horas.");