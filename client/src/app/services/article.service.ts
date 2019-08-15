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

  createNewArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(`${base_url}Articles`, article, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }


  getAllArticles() : Observable<ArticleModel[]>{
    return this.http.get<ArticleModel[]>(`${base_url}Articles`);
  }

}
