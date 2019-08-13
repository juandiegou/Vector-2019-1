import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  constructor(private artService: ArticleService, private userService: UserService) { }

  article: ArticleModel = {
    title: null,
    abstract: null,
    keywords: null,
    authors: null,
    file: null,
    state: false,
  };

  ngOnInit() {
  }

  createArticle(): void {
    this.artService.createNewArticle(this.article).subscribe(item => {
      console.log(item);
    });
  }

}
