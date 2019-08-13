import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';
import { ArticleModule } from './article.module';


const routes: Routes = [
  {
    path: 'author/article/creator',
    component: ArticleCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
