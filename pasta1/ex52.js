const prompt = require('prompt-sync')();
console.log("Somatório de Grãos de Trigo no Tabuleiro de Xadrez");
let totalGraos = 0n; 
let quadro = 1;
while (quadro <= 64) {
    let graosNoQuadro = 2n ** BigInt(quadro - 1);
    totalGraos += graosNoQuadro;
    quadro++;
}

console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totalGraos.toString()}`);