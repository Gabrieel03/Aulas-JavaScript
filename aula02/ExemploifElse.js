const leia = require('readline-sync')

let nota1, nota2, media

nota1 = leia.questionFloat("Digite a sua primeira nota: ")

nota2 = leia.questionFloat("Digite a segunda nota ")

//Processamento
media = (nota1 + nota2) / 2

if (media >= 6) {
    console.log("Parabens voce passou")
} else if (media == 5) {
    console.log("Voce esta de exame")
} else {
    console.log("Voce reprovou")
}