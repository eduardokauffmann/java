const prompt = require('prompt-sync')();

let n1 = Number(prompt("Insira o primeiro valor inteiro: "));
let n2 = Number(prompt("Insira o segundo valor inteiro: "));
let n3 = Number(prompt("Insira o terceiro valor inteiro: "));
let n4 = Number(prompt("Insira o quarto valor inteiro: "));

console.log("SOMAS");
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} + ${n3} = ${n1 + n3}`);
console.log(`${n1} + ${n4} = ${n1 + n4}`);
console.log(`${n2} + ${n3} = ${n2 + n3}`);
console.log(`${n2} + ${n4} = ${n2 + n4}`);
console.log(`${n3} + ${n4} = ${n3 + n4}`);

console.log("MULTIPLICAÇÕES");
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} * ${n3} = ${n1 * n3}`);
console.log(`${n1} * ${n4} = ${n1 * n4}`);
console.log(`${n2} * ${n3} = ${n2 * n3}`);
console.log(`${n2} * ${n4} = ${n2 * n4}`);
console.log(`${n3} * ${n4} = ${n3 * n4}`);