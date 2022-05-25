import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Credenciales, LoginResponse, Profile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://192.168.1.108:5000';
  url2 = 'http://192.168.1.108:8080';
  private jwt = '';
  private jwtState = new Subject<any>();
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/profile`);
  }

  JwtState(): Observable<any> {
    return this.jwtState.asObservable();
  }

  login(credenciales: Credenciales) {
    this.http
      .post<LoginResponse>(`${this.url2}/auth/login`, credenciales)
      .subscribe((resp) => {
        if (resp.success) {
          this.jwt = resp.token;
          this.jwtState.next(this.jwt);
          return true;
        }
        return false;
      });

    //this.jwt = 'Bearer jksadjasjlkasdjlkasdjlkdasjlkadsjlkadsjlkljksdaljk';
    //this.jwtState.next(this.jwt);
    //return true;
  }
}
