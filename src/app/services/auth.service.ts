import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Credenciales, LoginResponse, Profile } from 'src/types';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://192.168.1.108:5000';
  url2 = 'http://192.168.1.108:8080';

  private jwt = '';
  private jwtState = new Subject<any>();

  private isLoginError: boolean = false;
  private loginErrorState = new Subject<any>();

  constructor(private http: HttpClient, private uiService: UiService) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/profile`);
  }

  JwtState(): Observable<any> {
    return this.jwtState.asObservable();
  }

  login(credenciales: Credenciales) {
    this.http
      .post<LoginResponse>(`${this.url2}/auth/login`, credenciales)
      .subscribe({
        next: (resp) => {
          this.jwt = resp.token;
          this.jwtState.next(this.jwt);
          this.uiService.closeLoginModal();
          this.uiService.logIn();
        },
        error: () => {
          this.isLoginError = true;
          this.loginErrorState.next(this.isLoginError);
          setTimeout(() => {
            this.isLoginError = false;
            this.loginErrorState.next(this.isLoginError);
          }, 1500);
        },
      });
  }

  setLoginError(): void {
    this.isLoginError = true;
    this.loginErrorState.next(this.isLoginError);
    console.log(this.isLoginError);
  }

  clearLoginError(): void {
    this.isLoginError = false;
    this.loginErrorState.next(this.isLoginError);
  }

  LoginErrorState(): Observable<any> {
    return this.loginErrorState.asObservable();
  }
}
