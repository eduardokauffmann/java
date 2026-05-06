const prompt = require('prompt-sync')();
console.log("Somatório, Média e Total de Valores Lidos");
let somatorio = 0;
let totalValores = 0;
let media = 0;
while (true) {
    let valor = parseFloat(prompt("Digite um valor positivo (ou um número <= 0 para sair): "));
    if (valor <= 0) {
        break;
    }
    somatorio += valor;
    totalValores++;
    media = somatorio / totalValores;
}
if (totalValores > 0) {
    console.log("--- Resultados Finais ---");
    console.log("Somatório: " + somatorio);
    console.log("Média: " + media.toFixed(2));
    console.log("Total de valores lidos: " + totalValores);
} else {
    console.log("Nenhum valor positivo foi lido.");
}