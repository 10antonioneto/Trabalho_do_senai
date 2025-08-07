const prompt = require ('prompt-sync')();
let numero = prompt ("Insira um numero: ")

if (numero % 2 == 0){
    console.log("O numero ") + numero + (" é par.")
} else {
    console.log ("O número " + numero + " é impar.")
}