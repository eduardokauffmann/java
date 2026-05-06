const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor inteiro: "));
let sucessor = n1 + 1;
let antecessor = n1 - 1; 
console.log(`O sucessor é: ${sucessor}`);
console.log(`O antecessor é: ${antecessor}`);