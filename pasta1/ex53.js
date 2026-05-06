const prompt = require('prompt-sync')();
console.log("Somatório da Fatorial de Quinze Valores");
let somatorio = 0;
for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º valor inteiro: `));
    let fatorial = 1;
    for (let numero = 1; numero <= valor; numero++) {
        fatorial = fatorial * numero;
    }
    somatorio = somatorio + fatorial;
}
console.log("Somatório da fatorial de cada valor lido: " + somatorio);