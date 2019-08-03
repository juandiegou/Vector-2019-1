import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesModule } from './templates.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule, TemplatesModule],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
