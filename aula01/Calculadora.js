//Importanção
const leia = require('readline-sync')

let celsius, fahrenhit

//Entrada de dados 
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

//Processamento
fahrenhit = celsius * 1.8 + 32

// Saida de dados
console.log("A temperatura em fahrenheit é: " + fahrenhit)
console.log("A temperatura em fahrenheit é: %f", fahrenhit )