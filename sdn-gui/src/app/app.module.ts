import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasMainComponent } from './turmas-main/turmas-main.component';
import { TurmasCadastroComponent } from './turmas-cadastro/turmas-cadastro.component';

const appRoutes : Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    TurmasMainComponent,
    TurmasCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
