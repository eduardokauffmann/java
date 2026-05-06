const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira um valor inteiro: "));
if (n1 > 0){
    console.log(`O número ${n1} é positivo.`);
}else if (n1 < 0){
    console.log(`O número ${n1} é negativo.`);
}else {
    console.log(`O número ${n1} é zero (neutro).`);
};