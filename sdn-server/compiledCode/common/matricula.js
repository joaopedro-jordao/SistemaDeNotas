"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("./aluno");
const avaliacao_1 = require("./avaliacao");
class Matricula {
    constructor() {
        this.avaliacoes = [];
        this.autoAvaliacoes = [];
        this.aluno = new aluno_1.Aluno();
    }
    setAluno(aluno) {
        this.aluno.copyFrom(aluno);
    }
    adicionarAvaliacao(avaliacao) {
        this.avaliacoes.push(avaliacao);
    }
    adicionarAutoavaliacao(autoAvaliacao) {
        this.autoAvaliacoes.push(autoAvaliacao);
    }
    copyFrom(matricula) {
        this.aluno.copyFrom(matricula.aluno);
        this.avaliacoes = this.copyAvaliacoes(matricula.avaliacoes);
        this.autoAvaliacoes = this.copyAvaliacoes(matricula.autoAvaliacoes);
    }
    copyAvaliacoes(from) {
        var result = [];
        for (var index in from) {
            result.push(new avaliacao_1.Avaliacao(from[index].meta, from[index].conceito));
        }
        return result;
    }
}
exports.Matricula = Matricula;
//# sourceMappingURL=matricula.js.map