const prompt = require ('prompt-sync')();
let n1 = Number(prompt("Insira um valor inteiro: "));
let n2 = Number(prompt("insira um segundo valor inteiro: "));
let n3 = Number(prompt("insira um terceiro valor inteiro: "));
let temp;
if (n1 > n2 ) {
    temp = n1;
    n1 =n2;
    n2 = temp;
}
if (n1 > n3) {
    temp = n1;
    n1 = n3;
    n3 = temp;
}
if (n2 > n3) {
    temp = n2;
    n2 = n3;
    n3 = temp;
}
console.log(`em ordem crescente ficam: ${n1}, ${n2}, ${n3}.`);