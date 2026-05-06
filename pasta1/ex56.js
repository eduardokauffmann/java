const prompt = require('prompt-sync')();
console.log("Fatorial dos Valores Ímpares entre 1 e 100");

let resultado = 1n; 
for (let numeroImpar = 1; numeroImpar <= 100; numeroImpar += 2) {
    let fatorialAtual = 1n;
    for (let valor = 1n; valor <= BigInt(numeroImpar); valor++) {
        fatorialAtual *= valor;
    }
    resultado *= fatorialAtual;
}
console.log("Resultado do fatorial dos valores ímpares entre 1 e 100:");
console.log(resultado.toString());