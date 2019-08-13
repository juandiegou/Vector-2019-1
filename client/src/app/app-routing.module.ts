import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesRoutingModule } from './templates/templates-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { AuthorRoutingModule } from './modules/author/author-routing.module';
import { EditorModule } from './modules/editor/editor.module';
import { EvaluadorRoutingModule } from './modules/evaluador/evaluador-routing.module';
import { ArticleModule } from './modules/article/article.module';
import { ArticleRoutingModule } from './modules/article/article-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    UserRoutingModule,
    AuthorRoutingModule,
    EditorModule,
    EvaluadorRoutingModule,
    ArticleModule,
    TemplatesRoutingModule
   
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
