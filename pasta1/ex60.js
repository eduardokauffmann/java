const prompt = require('prompt-sync')();
console.log("Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3");
let numero = 15;
while (numero <= 200) {
    let quadrado = numero * numero;
    console.log(`O quadrado de ${numero} é: ${quadrado}`);
    numero = numero + 3;
}