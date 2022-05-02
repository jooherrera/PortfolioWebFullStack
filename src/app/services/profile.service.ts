import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://localhost:5000/profile';
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.url);
  }
}
