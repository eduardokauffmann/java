const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira o primeiro valor: "));
let n2 = Number(prompt("Insira o segundo valor: "));
let n3 = Number(prompt("Insira o terceiro valor: "));
let n4 = Number(prompt("Insira o quarto valor inteiro: "));

let p1 = n1 * n3 ;
let p2 = n2 + n4 ;

console.log(`O produto é ${p1} e a soma é: ${p2}`);