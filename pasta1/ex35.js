const prompt = require("prompt-sync")();
let n1 = Number(prompt("Insira um valor inteiro: "));
let n2 = Number(prompt("insira um segundo valor inteiro: "));
let n3 = Number(prompt("insira um terceiro valor inteiro: "));
let n4 = Number(prompt("insira um quarto valor inteiro: "));
let n5 = Number(prompt("insira um quinto valor inteiro: "));
let maior = n1;
let menor = n1;

if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}
if (n4 > maior) {
    maior = n4;
}
if (n5 > maior) {
    maior = n5;
}
if (n2 < menor) {
    menor = n2;
}
if (n3 < menor) {
    menor = n3;
}
if (n4 < menor) {
    menor = n4;
}
if (n5 < menor) {
    menor = n5;
}
console.log(`O maior valor é: ${maior}.`);
console.log(`O menor valor é: ${menor}.`);
