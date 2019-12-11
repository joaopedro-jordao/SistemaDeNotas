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

  constructor(
    private _router: Router,
    private turmaService: TurmaService
    ) { }

  ngOnInit() {
  }
  turma: Turma = {nome: "", materia: "", matriculas: []};
  turmas: Turma[] = [];
  turmaduplicada: boolean = false;

  gravar(a: Turma): void{
    if(this.turmaService.gravar(a)){
    this.turmas.push(a);
    this.turma = {nome: "", materia: "", matriculas: []};
    } else {
      this.turmaduplicada = true;
    }
  }

  onMove(): void{
    this.turmaduplicada = false;
  }

  editar(turma: Turma){
    console.log(turma);
    
    this._router.navigate(['Turmas/Editar', {nome: turma.nome, materia: turma.materia}])
  }

  remover(a: Turma){
    this.turmaService.remover(a);
    let index = this.turmas.indexOf(a);
    this.turmas.splice(index, 1);
    alert("Turma removida");
  }    

}
