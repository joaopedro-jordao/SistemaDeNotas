import { Turma } from '../common/turma';
import { Matricula } from '../common/matricula';
import { CadastroDeMatricula } from './cadastroDeMatricula';

export class CadastroDeTurmas{
    turmas: Turma[] = [];

    criar(turma: Turma): Turma {
        var result = null;
        if (this.nomeNaoCadastrado(turma.nome)){
            result = new Turma();
            this.turmas.push(result);
        }
        return result;
    }

    nomeNaoCadastrado(nome: String): boolean {
        return !this.turmas.find(a => a.nome == nome);
    }

    getTurmas(): Turma[]{
        return this.turmas;
    }
}