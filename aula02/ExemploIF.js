const leia = require('readline-sync')

let idade

console.log("Digite a sua idade: ")
idade = leia.questionInt()

if (idade < 18) {
    console.log("Você não pode dirigir")
} else {
    console.log("Voce pode dirigir")
}