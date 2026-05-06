const prompt = require ('prompt-sync')();
let a = Number(prompt("insira um valor inteiro para a: "));
let b = Number(prompt("insira um valor para b: "));
let c = Number(prompt("insira um valor para c: "));
let delta = (b**2) - 4*a*c;
if (delta >= 0){
    let x = (-b + Math.sqrt(delta)) / (2*a);
    let y = (-b - Math.sqrt(delta)) / (2*a);
    console.log(`Delta : ${delta}`);
    console.log(`x1 : ${x.toFixed(2)}`);
    console.log(`x2 : ${y.toFixed(2)}`);
} else {
    console.log(`Delta : ${delta}`);
    console.log("A equação não possui raízes reais.");
}