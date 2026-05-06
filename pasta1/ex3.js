const prompt = require('prompt-sync')();
let raio = Number (prompt("digite o raio da base da lata de óleo em cm: "));
let altura = Number (prompt("digite a altura da lata de óleo em cm: "));
let  volume = Math.PI * (raio * raio) * altura;
console.log(`${volume}`);
