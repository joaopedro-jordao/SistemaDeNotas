import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})

export class AppComponent {
  turma: Turma = {nome: "", materia: "", matriculas: [], metas: []}
}

export class Turma{
  nome: string;
  materia: string;
  matriculas: Matricula[];
  metas: string[];
}

export class Matricula{
  
}