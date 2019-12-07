import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Turma } from '../../../common/turma';
import { Matricula } from '../../../common/matricula';
import { TurmaService } from './turma.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})

export class AppComponent {
  turma: Turma = {nome: "", materia: "", matriculas: [], metas: []};
  turmaService = new TurmaService();
  turmas: Turma[] = [];

  gravar(a: Turma): void{
    this.turmaService.gravar(a);
    this.turmas.push(a)
    this.turma = {nome: "", materia: "", matriculas: [], metas: []}
  }
}