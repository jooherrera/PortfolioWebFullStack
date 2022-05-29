import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Credenciales, LoginResponse } from 'src/types';
import { UiService } from './ui.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.url;

  private jwt = '';
  private jwtState = new Subject<any>();

  private isLoginError: boolean = false;
  private loginErrorState = new Subject<any>();

  constructor(private http: HttpClient, private uiService: UiService) {}

  JwtState(): Observable<any> {
    return this.jwtState.asObservable();
  }

  login(credenciales: Credenciales) {
    this.http
      .post<LoginResponse>(`${this.url}/auth/login`, credenciales)
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
  }

  clearLoginError(): void {
    this.isLoginError = false;
    this.loginErrorState.next(this.isLoginError);
  }

  LoginErrorState(): Observable<any> {
    return this.loginErrorState.asObservable();
  }
}
