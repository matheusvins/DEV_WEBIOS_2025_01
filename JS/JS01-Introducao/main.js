var idade
const ano = 2010
//JavaScript
console.log("Hello world") // apresentar uma mensagem
console.clear() // limpar

//Variaveis
var numero1 = 192 // inicializar uma variavel
console.log(numero1)

var num1 = 4 
var num2 = 4
var resultado = num1 + num2 
console.log(resultado)

idade = 89 // iniciar a variavel em outra parte do codigo
console.log(idade)

// ano = 1936
const PI = 3.14

// Textos - Strings - ' ' ou " " - pode usar let, const ou var que não quebra o código
var nome = "Matheus Araujo"
var nome2 = "Matheus Vinicius"
var nome3 = "123465.4789" // texto pois esta dentro de aspas duplas
console.log(nome, nome2, nome3) // concatenar 

console.log("Olá" + "papai") // concatenar
console.log("Aluno" + nome + "e Aluno" + nome2 + ' Tem um total de ' + nome3 + "dinheiros") // concatenar 2

// var flexivel e com menos regras (posso alterar o valor inicial de uma var e recriar a mesma em outras partes do codigo)

// let você não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial

// const você não pode recriar a mesma em outras partes do codigo e não pode alterar o valor inicial dela garantindo a confiança do dado que está sendo utilizado no decorrer do seu codigo

// Template String
console.log(`Aluno ${nome} e Aluno ${nome2} Tem um total de ${nome3} dinheiros`) // concatenar 3

// Operadores
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)

// Operadores relacionais
console.log(5 == 5) // 5 igual 5 true
console.log(5 > 5) // 5 maior que 5 false
console.log(22 < 8) // 22 menor que 8 false
console.log(22 >= 22) // 22 maior ou igual 22 true
console.log(22 != 23) // 22 diferente de 23 true
console.log("Ana" == "ana") // além de comparar números posso comparar palavras/ textos
console.log(true == false)
console.log(true === true)
console.log(true === 'true') // boolean e o outro e txt > string
console.log(true != 'false') // true

let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCracha)
console.log(temCamisa == true && temCracha == true) // false == true = false
console.log(temCamisa == true || temCracha == true) // false ou true = true
