import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesRoutingModule } from './templates/templates-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { AuthorRoutingModule } from './modules/author/author-routing.module';
import { EditorModule } from './modules/editor/editor.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    UserRoutingModule,
    AuthorRoutingModule,
    EditorModule,
    TemplatesRoutingModule
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
