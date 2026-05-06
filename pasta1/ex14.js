const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira o primeiro valor: "));
let n2 = Number(prompt("Insira o segundo valor: "));
let n3 = Number(prompt("Insira o terceiro valor: "));
let soma = n1 + n2 + n3;
let q = soma * soma; 
console.log(`A soma é ${soma} e o quadrado da soma é: ${q}`);