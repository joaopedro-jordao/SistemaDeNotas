"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matricula_1 = require("../common/matricula");
class CadastroDeMatricula {
    constructor() {
        this.matriculas = [];
    }
    cadastrar(matricula) {
        var result = null;
        if (this.matriculaNaoCadastrada(matricula.aluno.cpf)) {
            result = new matricula_1.Matricula();
            result.copyFrom(matricula);
            this.matriculas.push(result);
        }
        return result;
    }
    matriculaNaoCadastrada(cpf) {
        return !this.matriculas.find(elem => elem.aluno.cpf == cpf);
    }
    atualizar(matricula) {
        var result = this.matriculas.find(m => m.aluno.cpf == matricula.aluno.cpf);
        if (result) {
            result.copyFrom(matricula);
        }
        return result;
    }
    deletar() {
    }
    getMatriculas() {
        return this.matriculas;
    }
}
exports.CadastroDeMatricula = CadastroDeMatricula;
//# sourceMappingURL=cadastroDeMatricula.js.map