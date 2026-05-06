const prompt = require('prompt-sync')();
let celsius = Number (prompt("digite a temp em Celsius: "));
let fahrenheit = (celsius * 9 / 5) +32;
console.log(`${fahrenheit}`);
