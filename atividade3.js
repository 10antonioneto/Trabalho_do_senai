const prompt = require ('prompt-sync')();

let lado1 = prompt("Insira o primeiro lado: ");
let lado2 = prompt("Insira o segundo lado: ");
let lado3 = prompt("Insira o terceiro lado: ");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 === lado2 && lado2 === lado3){
    console.log("Triangulo Equilatero!");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Triangulo Isóceles!");
} else {
    console.log("Triangulo Escaleno!");
}