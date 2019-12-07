import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  nome: string;
  materia: string;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.nome = params['nome'];
      this.materia = params['materia'];
    });
  }

}
