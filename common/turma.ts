import { Matricula } from './matricula';

export class Turma {
    nome: String;
    materia: String;
    matriculas: Matricula[];

    pushMatricula(matricula: Matricula){
        this.matriculas.push(matricula);
    }
}