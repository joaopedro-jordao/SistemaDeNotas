import { Matricula } from './matricula';

export class Turma {
    nome: String;
    materia: String;
    matriculas: Map<String,String>;

    novaTurma(): Turma {
        var turma: Turma = new Turma();
        turma.nome = "";
        turma.materia = "";
        turma.matriculas = new Map<String, String>();
        return turma;
    }

    clone(): Turma {
        var turma: Turma = new Turma();
        turma.nome = this.nome;
        turma.materia = this.materia;
        turma.matriculas = this.cloneMatriculas();
        return turma;
      }

      cloneMatriculas(): Map<string,string> {
        var matriculas: Map<string,string> = new Map<string,string>();
        for (let key in this.matriculas) {
          matriculas[key] = this.matriculas[key];
        }
        return matriculas;
      }
}