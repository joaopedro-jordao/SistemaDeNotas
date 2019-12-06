import { Turma } from '../../../common/turma';

export class TurmaService {
    turmas: Turma[] = [];
    gravar(turma: Turma): void {
        this.turmas.push(turma);
    }
}