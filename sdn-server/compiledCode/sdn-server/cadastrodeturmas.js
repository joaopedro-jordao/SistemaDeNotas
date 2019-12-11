"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turma_1 = require("../common/turma");
class CadastroDeTurmas {
    constructor() {
        this.turmas = [];
    }
    criar(turma) {
        var result = null;
        if (this.nomeNaoCadastrado(turma.nome)) {
            result = new turma_1.Turma();
            this.turmas.push(result);
        }
        return result;
    }
    nomeNaoCadastrado(nome) {
        return !this.turmas.find(a => a.nome == nome);
    }
    getTurmas() {
        return this.turmas;
    }
    remover(turma) {
        let index = this.turmas.indexOf(turma);
        this.turmas.splice(index, 1);
        alert("Turma removida");
    }
}
exports.CadastroDeTurmas = CadastroDeTurmas;
//# sourceMappingURL=cadastrodeturmas.js.map