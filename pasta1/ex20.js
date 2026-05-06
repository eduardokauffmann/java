const prompt = require('prompt-sync')();
let distância = Number(prompt("insira a distância percorrida em km: "));
let tempo = Number(prompt("insira o tempo em horas: "));
let velocidade = (distância / tempo) / 3.6;
console.log(` o valor da velocidade em metros por segundo é: ${velocidade.toFixed(2)} m/s`);