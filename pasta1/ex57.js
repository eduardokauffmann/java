const prompt = require('prompt-sync')();
console.log("Cálculo da Área Total de uma Residência");
let areaTotal = 0;
let continuar = "SIM";
console.log("Calculadora de Área Residencial");
do {
    let nomeDoComodo = prompt("Nome do cômodo: ");
    let largura = parseFloat(prompt("Largura (m): "));
    let comprimento = parseFloat(prompt("Comprimento (m): "));
    let areaDoComodo = largura * comprimento;
    areaTotal += areaDoComodo;
    console.log(`Área de ${nomeDoComodo}: ${areaDoComodo.toFixed(2)} m²`);
    continuar = prompt("Deseja adicionar outro cômodo? (SIM/NÃO): ").toUpperCase();
} while (continuar === "SIM");
console.log(`Área total da residência: ${areaTotal.toFixed(2)} metros quadrados.`);