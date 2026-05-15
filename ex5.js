import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe a base:');
let n1 = Number(ler());

console.log('Informe a altura:');
let n2 = Number(ler());

function mult( n1, n2) {
    return n1 * n2;
}

console.log("A area é " + n1 * n2 / 2 );