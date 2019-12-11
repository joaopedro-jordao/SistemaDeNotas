import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
//import { EditarComponent } from './turmas/editar/editar.component';


const routes: Routes = [
  { path: 'Turmas', component: TurmasComponent},
  //{ path: 'Turmas/Editar', component: EditarComponent},
  { path: '', component: TurmasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
