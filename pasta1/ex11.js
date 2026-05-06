const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor em dólar: "));
reais = n1 * 4.98 ;
console.log(`valor convertido em reais: ${reais} $`);
