const prompt = require('prompt-sync')();
let original = Number (prompt("insira o valor original da prestação: "));
let meses = Number (prompt("insira o número de meses em atraso: "));
let taxa = Number (prompt("insira a taxa de juros mensal: "));
 valor = original * (1 + (taxa / 100) * meses);
console.log(`${valor}`);
