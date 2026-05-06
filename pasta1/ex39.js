const prompt = require("prompt-sync")();
let n1 = Number(prompt("Insira um valor inteiro:"));
if (n1 % 3 === 0 && n1 % 5 === 0) {
    console.log(`${n1} é multiplo de 3 e 5.`);
} 
