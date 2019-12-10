import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../../common/turma';
import { Router } from '@angular/router';
import { TurmaService } from './turmas.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  turma: Turma = {nome: "", materia: "", matriculas: [], metas: []};
  turmaService = new TurmaService;
  turmas: Turma[] = [];

  gravar(a: Turma): void{
    if(this.turmaService.gravar(a)){
    this.turmas.push(a);
    this.turma = {nome: "", materia: "", matriculas: [], metas: []};
    } else {
      this.turma.nome = "";
    }
  }

  editar(turma: Turma){
    console.log(turma);
    
    this._router.navigate(['Turmas/Editar', {nome: turma.nome, materia: turma.materia}])
  }
}