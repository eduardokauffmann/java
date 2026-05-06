const prompt = require('prompt-sync')();
console.log("Maior e Menor Valores entre Valores Positivos");
let maior = -1;
let menor = -1;
console.log("Encontrar Maior e Menor Valor");
console.log("Digite números positivos (ou qualquer número negativo para encerrar).");
while (true) {
    let valor = parseInt(prompt("Informe um valor: "));
    if (valor < 0) {
        break;
    }
    if (maior === -1) {
        maior = valor;
        menor = valor;
    } else {
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }
}
if (maior !== -1) {
    console.log("Maior valor: " + maior);
    console.log("Menor valor: " + menor);
} else {
    console.log("Nenhum valor positivo foi informado.");
}