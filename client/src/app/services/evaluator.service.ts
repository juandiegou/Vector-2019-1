import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const base_url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  constructor(private http: HttpClient) { }



  getAllEvaluators() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${base_url}Users/?filter={"where":{"rol":2}}`);
  }
}
