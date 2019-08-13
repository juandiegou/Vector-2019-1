import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorModule } from './author.module';
import { AuthorEditArticleComponent } from './author-edit-article/author-edit-article.component';
import { AuthorArticleResultComponent } from './author-article-result/author-article-result.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';


const routes: Routes = [
  {
    path: "author/home",
    component: AuthorHomeComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: "author/article",
    component: AuthorEditArticleComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: "author/article/result",
    component: AuthorArticleResultComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule, AuthorModule],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
