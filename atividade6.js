const prompt = require ('prompt-sync')();

let valor = Number(prompt("Digite o valor do jantar: "));
let taxa = 0.1;
let total = valor + (valor * taxa);

console.log("O valor do jantar com 10% de taxa é: " + total.toFixed(2));