const prompt = require("prompt-sync")();
let n1 = Number(prompt("Insira um valor inteiro: "));
let n2 = Number(prompt("insira um segundo valor inteiro: "));
let n3 = Number(prompt("insira um terceiro valor inteiro: "));
let n4 = Number(prompt("insira um quarto valor inteiro: "));

if (n1 % 2=== 0 && n1 % 3 === 0) {
    console.log(`${n1} é divisível por 2 e por 3.`);
}
if (n2 % 2=== 0 && n2 % 3 === 0) {
    console.log(`${n2} é divisível por 2 e por 3.`);
}
if (n3 % 2=== 0 && n3 % 3 === 0) {
    console.log(`${n3} é divisível por 2 e por 3.`);
}
if (n4 % 2=== 0 && n4 % 3 === 0) {
    console.log(`${n4} é divisível por 2 e por 3.`);
}