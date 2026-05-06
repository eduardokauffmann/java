const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira o valor valor do raio da circunferência: "))
let area = 3.14 * (n1 ** 2);
console.log(`A área da circunferência é: ${area}`);