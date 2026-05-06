const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor inteiro: "));
let n2 = Number(prompt("Insira outro valor inteiro: "));
if (n1 > n2){
    let dif = n1 - n2;
    console.log(`A diferença entre os valores é: ${dif}`);
}else {
    let dif = n2 - n1;
    console.log(`A diferença entre os valores é: ${dif}`);
} 