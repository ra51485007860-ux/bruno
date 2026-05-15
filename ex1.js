import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe o primeiro numero:');
let n1 = Number(ler());

console.log('Informe o segundo numero:');
let n2 = Number(ler());

function soma(a, b) {
    return a + b;
}

let resultado = soma(n1, n2);

console.log("A soma de " + n1 + " + " + n2 + " é " + resultado);