const prompt = require('prompt-sync')();
let raio = Number(prompt("insira o raio da esfera: "));
let volume = (4/3) * 3.14 * (raio ** 3);
console.log(`O volume da esfera é: ${volume.toFixed(2)}`);


