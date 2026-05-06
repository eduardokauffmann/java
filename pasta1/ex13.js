const prompt = require('prompt-sync')();

let n1 = Number(prompt("Insira o primeiro valor inteiro: "));
let n2 = Number(prompt("Insira o segundo valor inteiro: "));
let n3 = Number(prompt("Insira o terceiro valor inteiro: "));
let q1 = n1 * n1;
let q2 = n2 * n2;
let q3 = n3 * n3;
    console.log(`${n1} ao quadrado é: ${q1}`);
    console.log(`${n2} ao quadrado é: ${q2}`);
    console.log(`${n3} ao quadrado é: ${q3}`);
let somaQuadrados = q1 + q2 + q3;
    console.log(`A soma dos quadrados é: ${somaQuadrados}`);