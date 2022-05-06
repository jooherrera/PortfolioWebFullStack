import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Credenciales, Profile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://192.168.1.108:5000';
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
    this.jwt = 'Bearer jksadjasjlkasdjlkasdjlkdasjlkadsjlkadsjlkljksdaljk';
    this.jwtState.next(this.jwt);
    return true;
  }
}
