import prompt from "prompt-sync";
let ler = prompt();

function calcularParadas(capacidade, consumo, distancia) {
    let autonomia = capacidade * consumo;
    return parseInt(distancia / autonomia);
}

console.log("Capacidade do tanque:");
let capacidade = Number(ler());

console.log("Consumo do veículo:");
let consumo = Number(ler());

console.log("Distância da viagem:");
let distancia = Number(ler());

let paradas = calcularParadas(capacidade, consumo, distancia);

console.log("Você precisará fazer " + paradas + " paradas para abastecer.");