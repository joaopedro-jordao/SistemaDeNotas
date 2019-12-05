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

    adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }
    adicionarAutoavaliacao(autoAvaliacao: Avaliacao): void {
        this.autoAvaliacoes.push(autoAvaliacao);
    }
}