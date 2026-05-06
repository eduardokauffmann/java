const prompt = require('prompt-sync')();
let soma = 0;
let contador =1;
while (contador <= 100) {
    soma = soma + contador;
    contador = contador + 1;

}
console.log(`A soma dos respectivos números de 1 a 100 é: ${soma}`);