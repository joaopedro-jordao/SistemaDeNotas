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

  turma: Turma = new Turma();
  turmas: Turma[] = [];
  turmaduplicada: boolean = false;

  criar(a: Turma): void{
    this.turmaService.criar(a)
        .then(ab => {
           if (ab) {
              this.turmas.push(ab);
              this.turma = new Turma();
           } else {
              this.turmaduplicada = true;
           }
        })
        .catch(erro => alert(erro));

  }

  onMove(): void{
    this.turmaduplicada = false;
  }

  editar(turma: Turma){
    console.log(turma);
    
    this._router.navigate(['Turmas/Editar', {nome: turma.nome, materia: turma.materia}])
  }

  remover(a: Turma){
    this.turmaService.remover(a)
    .then(ac => {
    this.turmaService.remover(ac);
    let index = this.turmas.indexOf(ac);
    this.turmas.splice(index, 1);
    }
    )
    alert("Turma removida");
  }    

  ngOnInit(): void{
    this.turmaService.getTurmas()
         .then(as => this.turmas = as)
         .catch(erro => alert(erro));
   }
  }
