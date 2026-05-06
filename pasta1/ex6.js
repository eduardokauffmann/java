const prompt = require('prompt-sync')();
let A = Number (prompt("insira o valor para a variável A: "));
let B = Number (prompt("insira o valor para a variável B: "));
let temp = A;
A = B;
B = temp;
console.log(` A = ${A},B = ${B}`);
