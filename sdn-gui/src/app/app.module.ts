import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaService } from './turmas/turmas.service';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { HttpModule } from '@angular/http';
//import { MatriculasComponent } from './matriculas.component';

const appRoutes : Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    MatriculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'turmas',
        component: TurmasComponent
      },
      {
        path: 'matriculas',
        component: MatriculasComponent
      }
    ])
  ],
  providers: [TurmaService],
  bootstrap: [AppComponent]
})
export class AppModule{ }
