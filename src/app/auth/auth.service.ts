import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/users/register';
  private loginUrl = 'http://localhost:3000/users/login';

  constructor(private http: HttpClient) {}

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }
  

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }
}
