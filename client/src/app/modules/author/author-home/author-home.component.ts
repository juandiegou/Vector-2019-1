import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.css']
})
export class AuthorHomeComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  articles: ArticleModel[] = [];

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    let id = localStorage.getItem("id");
    this.artService.getAllArticles().subscribe(items => {
      //this.articles = items;
      for (let index = 0; index < items.length; index++) {
        if(items[index].author === id) {
          this.articles.push(items[index])
        }
      }
    });
  }

}
