const prompt = require('prompt-sync')();
console.log("Divisão Inteira Sem Usar o Operador de Divisão");
let dividendo = parseInt(prompt("Digite o dividendo: "));
let divisor = parseInt(prompt("Digite o divisor: "));
if (divisor === 0) {
    console.log("Erro: Não é possível dividir por zero.");
} else if (dividendo < 0 || divisor < 0) {
    console.log("Por favor, insira apenas números inteiros não negativos.");
} else {

    let resultado = 0;
    let dividendoOriginal = dividendo;
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        resultado = resultado + 1;
    }
    console.log(`Resultado da divisão de ${dividendoOriginal} por ${divisor} é: ${resultado}`);
    console.log(`O resto da divisão é: ${dividendo}`);
}