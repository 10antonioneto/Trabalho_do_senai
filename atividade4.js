const prompt = require ('prompt-sync')();

let numero = prompt ("Insira um numero: ")
numero = Number(numero)

console.log("O dobro de " + numero + " é: " + numero*2)