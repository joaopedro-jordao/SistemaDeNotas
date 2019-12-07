import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../../common/turma';
import { Router } from '@angular/router';

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
  turmas: Turma[] = [];

  gravar(a: Turma): void{
    this.turmas.push(a)
    this.turma = {nome: "", materia: "", matriculas: [], metas: []}
  }

  editar(turma: Turma){
    console.log(turma);
    
    this._router.navigate(['Turmas/Editar', {nome: turma.nome, materia: turma.materia}])
  }
}
