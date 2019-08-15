import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  constructor(private artService: ArticleService, private userService: UserService) { }

  //The new article.
  article: ArticleModel = {
    title: null,
    abstract: null,
    keywords: null,
    authors: null,
    author: null,
    file: null,
    evaluators: null,
    state: false,
    score: 0,
    date: null
  };

  //The user which's going to contain the new article.
  user: UserModel = {
    id: null,
    realm: null,
    username: null,
    email: null,
    password: null,
    rol: null,
    fname: null,
    sname: null,
    flname: null,
    sclname: null,
    country: null,
    phone: null,
    education: null,
    especialization: null,
    articles: null,
    user: null
  }

  ngOnInit() {
  }

  /**
   * Create a new article and save it in the database and update the user who created it.
   */
  createArticle(): void {
    let author = localStorage.getItem("id");
    this.article.author = author;
    let date = this.getCurrentDate();
    this.article.date = date;
    this.artService.createNewArticle(this.article).subscribe(item => {
      console.log(item);
      //this.updateUser();
    });
  }

  getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = mm + '/' + dd + '/' + yyyy;
    return date;
  }

  /**
   * Update an user whenever they create an article.
   */
  updateUser(): void {
    this.user = this.userService.getUserInformation();
    this.userService.updateUser(this.user).subscribe(item => {
      console.log(item);
    });
  }

}
