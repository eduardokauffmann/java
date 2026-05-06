const prompt = require('prompt-sync')();
console.log("Somatório da Fatorial de Quinze Valores");
let somatorio = 0;
let contador = 0;
while (contador < 10) {
    let valor = parseFloat(prompt(`Digite o ${contador + 1}º valor real: `));
    if (!isNaN(valor)) {
        somatorio += valor;
        contador++;
    } else {
        console.log("Entrada inválida! Por favor, digite um número.");
    }
}
let media = somatorio / 10;
console.log("--- Resultados ---");
console.log("Somatório: " + somatorio);
console.log("Média: " + media);