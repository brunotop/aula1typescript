"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, Rg, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.Rg = Rg;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome));
    };
    Pessoa.prototype.valor1 = function () {
        console.log("Meu CPF \u00E9 ".concat(this.cpf));
    };
    Pessoa.prototype.valor2 = function () {
        console.log("Meu RG \u00E9 ".concat(this.Rg));
    };
    Pessoa.prototype.cores = function () {
        console.log("Minha cor \u00E9 ".concat(this.cor));
    };
    Pessoa.prototype.idade1 = function () {
        console.log("eu tenho ".concat(this.idade));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome: ");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCPF = function () {
        var cpfDois = leitor.questionInt("Insira o novo CPF: ");
        this.cpf = cpfDois;
    };
    Pessoa.prototype.setRg = function () {
        var RgDois = leitor.question("Insira o novo Rg: ");
        this.Rg = RgDois;
    };
    Pessoa.prototype.setcor = function () {
        var corDois = leitor.question("Insira a cor: ");
        this.cor = corDois;
    };
    Pessoa.prototype.setidade = function () {
        var idadeDois = leitor.question("Insira a idade: ");
        this.idade = idadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
