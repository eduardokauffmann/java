const prompt = require('prompt-sync')();
let comprimento = Number(prompt("insira o valor do comprimento da caixa retangular: "));
let largura = Number(prompt("Insira o valor da largura da caixa retangular: "));
let altura = Number(prompt("Insira o valor da altura da caixa retangular: "));
volume = comprimento * largura * altura;
console.log(`${volume}`);
