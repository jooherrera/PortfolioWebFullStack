import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About, ExpEducation, ProfileInfo } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://192.168.1.108:5001';
  url2 = 'http://192.168.1.108:8080';
  apiV1 = '/api/v1';
  constructor(private http: HttpClient) {}

  getAboutSection(): Observable<About> {
    return this.http.get<About>(`${this.url2}/`);
  }

  updateAbout(info: Partial<About>, jwt: string): Observable<About> {
    console.log(info);
    console.log('token: ' + jwt);
    return this.http.patch<About>(`${this.url}/about`, info);
  }

  updateProfile(
    info: Partial<ProfileInfo>,
    jwt: string
  ): Observable<ProfileInfo> {
    console.log(info);
    console.log('token: ' + jwt);
    return this.http.patch<ProfileInfo>(`${this.url}/profile-info`, info);
  }

  updateExp(
    info: Partial<ExpEducation>,
    jwt: string
  ): Observable<ExpEducation> {
    console.log(info);
    return this.http.patch<ExpEducation>(`${this.url}/experience`, info);
  }

  addExpItem(jwt: string) {
    console.log(jwt);
  }
}
