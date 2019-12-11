import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Turma } from '../../../../common/turma';
import { TurmaService } from '../turmas/turmas.service';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MatriculasComponent implements OnInit {
   constructor(private turmaService: TurmaService) {}

   turmas: Turma[];

   atualizarAluno(turma: Turma): void {
      this.turmaService.atualizar(turma);
   }

   ngOnInit(): void {
     this.turmas = this.turmaService.getTurmas();
  }

}