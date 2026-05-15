import prompt from 'prompt-sync'
let ler = prompt();

console.log('Informe o lado:');
let n1 = Number(ler());

function mult(a) {
    return n1 * n1;
}

console.log("A area é " + n1 * n1);