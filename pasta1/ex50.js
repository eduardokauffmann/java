const prompt = require('prompt-sync')();
console.log("--- Sequência de Fibonacci ---");
let termo1 = 0;
let termo2 = 1;
console.log("Sequência de Fibonacci até o 15º termo:");
console.log(termo1);
console.log(termo2);
let i = 3; 
while (i <= 15) {
    let proximoTermo = termo1 + termo2;
    console.log(proximoTermo);
    termo1 = termo2;
    termo2 = proximoTermo;
    i++;
}