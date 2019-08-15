import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';

const base_url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }

  /**
   * Create a new article.
   * @param article the article model to be posted.
   */
  createNewArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(`${base_url}Articles`, article, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  /**
   * Get all articles of the database.
   */
  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${base_url}Articles`);
  }

  /**
   * Get all the articles filtering by the author id.
   * @param id The id of the author.
   */
  getAuthorArticles(id: string): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${base_url}Articles?filter=%7B%22where%22%3A%7B%22title%22%3A%22aaaa%22%7D%7D`);
  }

}
