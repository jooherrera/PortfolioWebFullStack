import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credenciales, Profile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://192.168.1.108:5000';
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/profile`);
  }

  login(credenciales: Credenciales) {
    console.log(credenciales);
    console.log('Obtener JWT');
    return true;
  }
}
