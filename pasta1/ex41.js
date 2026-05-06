const prompt = require("prompt-sync")();
let n1 = Number(prompt("Insira um valor inteiro: "));
let x = n1 * 2;
if (x >= 30) {
    console.log(`R:${x}`);
}
