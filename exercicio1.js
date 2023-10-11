"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(nome, Autor, anopublicacao) {
        this.nomedolivro = nome;
        this.autor = Autor;
        this.anopublicacao = anopublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("Nome do Livro \u00E9: ".concat(this.nomedolivro));
        console.log("O autor desse livro \u00E9: ".concat(this.autor));
        console.log("O ano de publicacao deste livro \u00E9: ".concat(this.anopublicacao));
    };
    return Livro;
}());
exports.Livro = Livro;
function main() {
    var nomedolivro = leitor.question("Qual o nome do livro? ");
    var autor = leitor.question("Quem é o autor do livro? ");
    var anopublicacao = leitor.questionInt("Qual o ano que esse livro foi publicado? ");
    var livro = new Livro(nomedolivro, autor, anopublicacao);
    livro.obterDetalhes();
}
main();
