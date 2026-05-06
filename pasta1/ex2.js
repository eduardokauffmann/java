const prompt = require('prompt-sync')();
let fahrenheit = Number (prompt("digite a temp em fahrenheit: "));
let  celsius = (fahrenheit - 32 ) *(5/9); 
console.log(`${celsius}`);
