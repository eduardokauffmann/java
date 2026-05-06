const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor inteiro: "));
let n2 = Number(prompt("Insira outro valor inteiro: "));
let resultado = n1/n2 ;
let quadrado = resultado ** 2;
console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`);
console.log(`O quadrado da divisão é: ${quadrado.toFixed(2)}`);