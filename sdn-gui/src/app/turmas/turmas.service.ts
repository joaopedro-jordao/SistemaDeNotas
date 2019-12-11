import { Turma } from '../../../../common/turma';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TurmaService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';

    constructor(private http: Http) { }
    
    criar(turma: Turma): Promise<Turma> {
        return this.http.post(this.taURL + "/turma",turma, {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return turma;} else {return null;}
           })
           .catch(this.tratarErro);
    }

    remover(turma: Turma): Promise<Turma> {
        return this.http.put(this.taURL + "/turma",JSON.stringify(turma), {headers: this.headers})
        .toPromise()
        .then(res => {
           if (res.json().success) {return turma;} else {return null;}
        })
        .catch(this.tratarErro);
        
    }



    atualizar(turma:Turma): Promise<Turma> {
        /*turma = turma.clone();
        for (let a of this.turmas) {
            if (a.nome == turma.nome) {
               a.matriculas = turma.matriculas;
            }
        }*/
        return this.http.put(this.taURL + "/turma",JSON.stringify(turma), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return turma;} else {return null;}
         })
         .catch(this.tratarErro);
      }

      getTurmas(): Promise<Turma[]> {
        return this.http.get(this.taURL + "/turmas")
                 .toPromise()
                 .then(res => res.json() as Turma[])
                 .catch(this.tratarErro);
      }

      private tratarErro(erro: any): Promise<any>{
        console.error('Acesso inesperado',erro);
        return Promise.reject(erro.message || erro);
      }
}