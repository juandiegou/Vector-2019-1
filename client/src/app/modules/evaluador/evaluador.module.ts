import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluadorRoutingModule } from './evaluador-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { CalificarComponent } from './calificar/calificar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [ListadoComponent, CalificarComponent, MainComponent],
  imports: [
    CommonModule,
    EvaluadorRoutingModule

  ],
  exports: [
    MainComponent,
    CalificarComponent,
    ListadoComponent
  ]
})
export class EvaluadorModule { }
