"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nomedoaluno) {
        this.notas = [];
        this.media = [];
        this.nomedoaluno = nomedoaluno;
    }
    Aluno.prototype.pesquisadosalunos = function () {
        console.log("O nome do aluno se chama: ".concat(this.nomedoaluno));
        console.log("A primeira nota do aluno \u00E9  ".concat(this.notas));
        console.log("A segunda nota do aluno \u00E9 ".concat(this.notas));
        console.log("A terceira nota do aluno \u00E9 ".concat(this.notas));
    };
    Aluno.prototype.setNotas = function (n1, n2, n3) {
        this.notas.push(n1);
        this.notas.push(n2);
        this.notas.push(n3);
    };
    Aluno.prototype.getMedia = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return media;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
main();
