const prompt = require('prompt-sync')();
let distância = Number (prompt("insira a distância percorrida em km: "));
let consumo = Number (prompt("insira o consumo do veículo em km por litros: "));
let  litros = distância / consumo ;
console.log(`${litros}`);
