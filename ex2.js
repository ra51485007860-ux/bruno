import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe o numero:');
let n1 = Number(ler());

function mult(a) {
    return a * 2;
}

console.log("O dobro é " + n1 * 2 );