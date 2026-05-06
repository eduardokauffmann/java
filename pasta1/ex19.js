const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor númerico: "));
let n2 = Number(prompt("insira outro valor númerico: "));
let soma = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;

console.log(`a soma dos valores é: ${soma}`);
console.log(`a subtração dos valores é: ${sub}`);
console.log(`a multiplicação dos valores é: ${mult}`);
console.log(`a divisão dos valores é: ${div}`);
