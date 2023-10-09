"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var perg1 = leitor.questionInt("Insira o primeiro valor: ");
    var perg2 = leitor.questionInt("Insira o segundo valor: ");
    var perg3 = leitor.questionInt("Insira o terceiro valor: ");
    console.log(soma(perg1, perg2, perg3));
    console.log(subtracao(perg1, perg2, perg3));
    console.log(multiplicacao(perg1, perg2, perg3));
    console.log(divisao(perg1, perg2, perg3));
}
function soma(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3;
}
function subtracao(valor1, valor2, valor3) {
    return valor1 - valor2 - valor3;
}
function multiplicacao(valor1, valor2, valor3) {
    return valor1 * valor2 * valor3;
}
function divisao(valor1, valor2, valor3) {
    return valor1 / valor2 / valor3;
}
main();
