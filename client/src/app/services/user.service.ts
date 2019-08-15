import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { isNullOrUndefined } from 'util';

const base_url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  tokenId: string = '';

  getToken() {
    return localStorage.getItem("userTk");
  }

  getUserInformation() {
    let userInfo = localStorage.getItem("userInfo");
    if (isNullOrUndefined(userInfo)) {
      return null
    }
    return (JSON.parse(userInfo));
  }

  loginUser(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}Users/login?include=user`,
      {
        email,
        password
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      });
  }

  logoutUser() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userTk");
    localStorage.removeItem("password");
    localStorage.removeItem("id");
  }

  registerUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}Users`, user, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  saveId(id) {
    localStorage.setItem("id", id);
  }

  savePassword(password) {
    localStorage.setItem("password", password);
  }

  saveToken(token) {
    localStorage.setItem("userTk", token);
  }

  saveUserInformation(user: UserModel) {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }

  updateUser(user: UserModel): Observable<UserModel> {
    let id = user.id;
    let token = this.getToken();
    user.password = localStorage.getItem("password");
    console.log(user.articles);
    return this.http.put<UserModel>(`${base_url}Users/${id}?access_token=${token}`, user, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

}
