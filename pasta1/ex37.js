const prompt = require("prompt-sync")();
let  n1 = Number(prompt("Insira um valor inteiro: "));

if (n1  > 0 && n1 <9) {
    console.log(`${n1} número permitido.`);
} else {
    console.log(`${n1} número não permitido.`);
}