"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turma {
    novaTurma() {
        var turma = new Turma();
        turma.nome = "";
        turma.materia = "";
        turma.matriculas = new Map();
        return turma;
    }
    clone() {
        var turma = new Turma();
        turma.nome = this.nome;
        turma.materia = this.materia;
        turma.matriculas = this.cloneMatriculas();
        return turma;
    }
    cloneMatriculas() {
        var matriculas = new Map();
        for (let key in this.matriculas) {
            matriculas[key] = this.matriculas[key];
        }
        return matriculas;
    }
}
exports.Turma = Turma;
//# sourceMappingURL=turma.js.map