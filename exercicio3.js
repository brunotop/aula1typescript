"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var leitor = require("readline-sync");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.setValores = function () {
        this.n1 = leitor.questionFloat("Insira o n1: ");
        this.n2 = leitor.questionFloat("Insira o n2: ");
    };
    Calculadora.prototype.getSoma = function () { return this.n1 + this.n2; };
    Calculadora.prototype.getMenos = function () { return this.n1 - this.n2; };
    Calculadora.prototype.getVezes = function () { return this.n1 * this.n2; };
    Calculadora.prototype.getDividir = function () { return this.n1 / this.n2; };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
function main() {
    var calc = new Calculadora();
    calc.setValores();
    console.log("A soma: ", calc.getSoma());
    console.log("A multiplicacao: ", calc.getVezes());
    console.log("A subtracao: ", calc.getMenos());
    console.log("A divisao: ", calc.getDividir());
}
main();
