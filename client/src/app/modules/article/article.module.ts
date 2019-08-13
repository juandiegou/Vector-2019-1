import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';


@NgModule({
  declarations: [ArticleCreatorComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ], exports: [
    ArticleCreatorComponent
  ]
})
export class ArticleModule { }
