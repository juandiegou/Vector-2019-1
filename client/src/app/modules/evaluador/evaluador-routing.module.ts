import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserModule } from '../user/user.module';
import { ListadoComponent } from './listado/listado.component';
import { CalificarComponent } from './calificar/calificar.component';



const routes: Routes = [
  {
    path:'evaluador/main',
    component: MainComponent
  },
  {
    path : 'evaluador/listado',
    component: ListadoComponent
  },
  {
    path : 'evaluador/calificar',
    component : CalificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule, UserModule],
  exports: [RouterModule]
})
export class EvaluadorRoutingModule { }


