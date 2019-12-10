import { Turma } from '../../../../common/turma';
import { Injectable } from '@angular/core';

@Injectable()
export class TurmaService {
    turmas: Turma[] = [];
    gravar(turma: Turma): Turma {
      var result = null;
      if (!this.turmas.find(a => a.nome == turma.nome)) {
        this.turmas.push(turma);
        result = turma;
      }
      return result;
    }
}