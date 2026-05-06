const prompt = require('prompt-sync')();
let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));
let potencia = 1;

for (let i = 1; i <= expoente; i++) {
    potencia = potencia * base;
}
console.log(`${base} elevado a ${expoente} é ${potencia}.`);