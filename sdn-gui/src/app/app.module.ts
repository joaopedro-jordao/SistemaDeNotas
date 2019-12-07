import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasComponent } from './turmas/turmas.component';
import { EditarComponent } from './turmas/editar/editar.component';

const appRoutes : Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    EditarComponent
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
