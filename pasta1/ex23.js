const prompt = require('prompt-sync')();
let pés = Number(prompt("Insira uma medida em pés: "));
let metros = pés * 0.3048;
console.log(`A medida em metros é: ${metros.toFixed(2)} m`);