let peso = 75
let altura = 1.83
let imc = calcularIMC(peso, altura)
let classificação = classificarIMC(imc)

function calcularIMC(peso, altura) {
    return peso / altura ** 2
}

function classificarIMC(imc) {
    if (imc <= 18.5) {
        return "Abaixo do peso"
    } else if (imc <= 24, 9) {
        return "Peso normal"
    } else if (imc <= 29.9) {
        return "Sobrepeso"
    } else if (imc <= 34.9) {
        return "Obesidade I"
    } else if (imc <= 39.9) {
        return "Obesidade II"
    } else if (imc <= 45) {
        return "Obesidade III"
    }
}

console.log(`O seu imc é ${imc} e a sua classificação é ${classificação}`)

let primeiroNumero = 1
let segundoNumero = 2

let resultado1 = somar(primeiroNumero, segundoNumero)

function somar(n1, n2) {
    return n1 + n2
}

console.log(resultado1)

let terceiroNumero = 5
let quartoNumero = 3

let resultado2 = subtrair(terceiroNumero, quartoNumero)

function subtrair(n3, n4) {
    return n3 - n4
}

console.log(resultado2)

let quintoNumero = 6
let sextoNumero = 7

let resultado3 = multiplicar(quintoNumero, sextoNumero)

function multiplicar(n5, n6) {
    return n5 * n6
}

console.log(resultado3)

let setimoNumero = 9
let oitavoNumero = 2

let resultado4 = dividir(setimoNumero, oitavoNumero)

function dividir(n7, n8) {
    return n7 / n8

}

console.log(resultado4)

let nonoNumero = 6
let decimoNumero = 7

let resultado5 = elevar(nonoNumero, decimoNumero)

function elevar(n9, n10) {
    return n9 ** n10
}

console.log(resultado5)