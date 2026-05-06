const prompt = require('prompt-sync')();
console.log("--- Conversão de Temperatura ---");
for (let Celsius = 10; Celsius <= 100; Celsius += 10) {
    let Fahrenheit = (Celsius * 9 / 5) + 32;
    console.log(`${Celsius}°C = ${Fahrenheit}°F`);
}