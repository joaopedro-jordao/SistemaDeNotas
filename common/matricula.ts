import  { Aluno } from './aluno'; 
import { Avaliacao } from './avaliacao';

export class Matricula {
    aluno: Aluno;
    avaliacoes: Array<Avaliacao>;
    autoAvaliacoes: Array<Avaliacao>;

    constructor(){
        this.avaliacoes = [];
        this.autoAvaliacoes = [];
        this.aluno = new Aluno();
    }

    setAluno(aluno: Aluno){
        this.aluno.copyFrom(aluno);
    }

    adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }
    adicionarAutoavaliacao(autoAvaliacao: Avaliacao): void {
        this.autoAvaliacoes.push(autoAvaliacao);
    }

    copyFrom(matricula: Matricula){
        this.aluno.copyFrom(matricula.aluno);
        this.avaliacoes = this.copyAvaliacoes(matricula.avaliacoes);
        this.autoAvaliacoes = this.copyAvaliacoes(matricula.autoAvaliacoes);
    }

    copyAvaliacoes(from: Array<Avaliacao>) : Array<Avaliacao>{
        var result: Array<Avaliacao> = [];
        for (var index in from){
            result.push(new Avaliacao(from[index].meta, from[index].conceito));
        }
        return result;
    }
}