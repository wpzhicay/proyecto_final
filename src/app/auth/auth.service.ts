import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = `${environment.apiUrl}/users/register`;
  private loginUrl = `${environment.apiUrl}/users/login`;

  constructor(private http: HttpClient) {}

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }
}
