"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var humano1 = metodos();
    var decisao = leitor.question("Voce gostaria de modificar o cadastro? (s/n)");
    if (decisao === "s") {
        editarCadastro(humano1);
    }
    else {
        console.log("Obrigado, saindo...");
    }
    function cadastros() {
        var nome = leitor.question("insira seu nome aqui: ");
        var CPF = leitor.questionInt("Insira seu CPF aqui: ");
        var Rg = leitor.questionInt("Insira seu RG aqui: ");
        var cor = leitor.question("insira sua cor aqui: ");
        var idade = leitor.questionInt("Insira sua idade aqui: ");
        var humano1 = new Pessoa_1.Pessoa("josé", 12345678, 13528528, "branco", 20);
        return humano1;
    }
    function metodos() {
        var humano1 = cadastros();
        humano1.valor1();
        humano1.valor2();
        humano1.cores();
        humano1.idade1();
        return humano1;
    }
    function editarCadastro(humano1) {
        humano1.setNome();
        humano1.setCPF();
        humano1.setRg();
        humano1.setcor();
        humano1.setidade();
        humano1.valor1();
        humano1.valor2();
        humano1.cores();
        humano1.idade1();
    }
}
main();
