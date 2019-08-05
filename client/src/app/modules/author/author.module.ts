import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorEditArticleComponent } from './author-edit-article/author-edit-article.component';
import { AuthorArticleResultComponent } from './author-article-result/author-article-result.component';


@NgModule({
  declarations: [AuthorHomeComponent, AuthorEditArticleComponent, AuthorArticleResultComponent],
  imports: [
    CommonModule
  ], exports: [
    AuthorHomeComponent,
    AuthorEditArticleComponent,
    AuthorArticleResultComponent
  ]
})
export class AuthorModule { }
