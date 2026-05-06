const prompt = require('prompt-sync')();
let n1 = Number(prompt('Insira um número para ver sua tabuada:'));
let multiplicador = 1;

while (multiplicador <= 10) {
    let produto = n1 * multiplicador;
    console.log(`${n1} * ${multiplicador} = ${produto}`);
    multiplicador++;
}