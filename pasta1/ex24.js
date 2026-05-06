const prompt = require('prompt-sync')();
let base= Number(prompt("Insira insira a base: "));
let indice = Number(prompt("Insira o índice da raiz: "));
let raiz = base ** (1/indice);
console.log(`O valor da raiz é: ${raiz.toFixed(2)}`);