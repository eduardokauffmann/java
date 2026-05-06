const prompt = require('prompt-sync')();
let n1 = Number(prompt("Insira o valor da sua primeira nota bimestral: "));
let n2 = Number(prompt("Insira o valor da sua segunda nota bimestral: "));
let n3 = Number(prompt("Insira o valor da sua terceira nota bimestral: "));
let n4 = Number(prompt("Insira o valor da sua quarta nota bimestral: "));
let media = (n1 + n2 + n3 + n4) / 4;
if (media >= 5){
    console.log(`O aluno foi aprovado com ${media.toFixed(2)}.`);
} else {
    console.log(`O aluno foi reprovado com ${media.toFixed(2)}.`);
}  