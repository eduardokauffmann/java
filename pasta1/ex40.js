const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor: "));
let n2 = Number(prompt("insira um segundo valor: "));
let n3 = Number(prompt("insira um terceiro valor: "));
let soma = n1 + n2 + n3;
if (soma > 100) {
    console.log(`A soma dos 3 valores ${soma} é maior que 100.`);
}
