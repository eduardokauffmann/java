const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira o valor do salário mensal: "))
let n2 = Number(prompt("Insira o valor do percentual de aumento (0-100): "))
let aumento = n1 * (n2 / 100);
let nv = n1 + aumento;
console.log(`O valor do aumento é: ${aumento} e o salário final é: ${nv}`);
