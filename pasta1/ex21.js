const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira a base da potência: "));
let n2 = Number(prompt("insira o expoente: "));
let potência = n1 ** n2;
console.log(`O valor da potência é: ${potência}`);