import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesRoutingModule } from './templates/templates-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    UserRoutingModule,
    TemplatesRoutingModule
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
