const prompt = require('prompt-sync')();
let c1 = Number(prompt("Insira a quantidade de votos válidos para o candidato 1: "))
let c2 = Number(prompt("Insira a quantidade de votos válidos para o candidato 2: "))
let c3 = Number(prompt("Insira a quantidade de votos válidos para o candidato 3: "))
let vn = Number(prompt("Insira a quantidade de votos nulos: "))
let vb= Number(prompt("Insira a quantidade de votos em branco: "))
let total = c1 + c2 + c3 + vn + vb; 

let percentual_candidato1 = (c1 / total) * 100
let percentual_candidato2 = (c2 / total) * 100                  
let percentual_candidato3 = (c3 / total) * 100      
let percentual_nulos = (vn / total) * 100         
let percentual_branco = (vb / total) * 100        

    console.log(`O percentual de votos para o candidato 1 é: ${percentual_candidato1.toFixed(2)}%`);
    console.log(`O percentual de votos para o candidato 2 é: ${percentual_candidato2.toFixed(2)}%`);
    console.log(`O percentual de votos para o candidato 3 é: ${percentual_candidato3.toFixed(2)}%`);
    console.log(`O percentual de votos nulos é: ${percentual_nulos.toFixed(2)}%`);
    console.log(`O percentual de votos em branco é: ${percentual_branco.toFixed(2)}%`);