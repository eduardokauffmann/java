const prompt = require("prompt-sync")();
let n1 = Number(prompt("Insira um valor inteiro: "));

if (n1 % 2 === 0) {
    console.log(`${n1} é um número par.`);
} else {
    console.log(`${n1} é um número ímpar.`);
}