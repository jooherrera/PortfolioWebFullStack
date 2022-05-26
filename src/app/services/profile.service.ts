import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AboutContent,
  ContactContent,
  ExpEducation,
  PersonInfo,
  Profile,
  ProfileInfo,
  Section,
} from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://192.168.1.108:8080';
  apiV1 = '/api/v1';
  constructor(private http: HttpClient) {}

  /* ------------------------------ PERSONAL INFO ----------------------------- */

  getPersonInfo(): Observable<PersonInfo> {
    return this.http.get<any>(`${this.url}${this.apiV1}/person/`);
  }

  updatePersonInfo(
    info: Partial<PersonInfo>,
    jwt: string
  ): Observable<PersonInfo> {
    return this.http.patch<any>(`${this.url}${this.apiV1}/person/`, info, {
      headers: { Authorization: jwt },
    });
  }

  /* ------------------------------ CONTACT INFOx ----------------------------- */
  getContactInfo(): Observable<ContactContent> {
    return this.http.get<any>(`${this.url}${this.apiV1}/contact/`);
  }

  updateContactInfo(
    info: Partial<ContactContent>,
    jwt: string,
    id: number
  ): Observable<ContactContent> {
    return this.http.patch<any>(
      `${this.url}${this.apiV1}/contact/${id}`,
      info,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  /* ------------------------------ SECTION TITLE ----------------------------- */

  getSection(path: string): Observable<Section> {
    return this.http.get<Section>(`${this.url}${this.apiV1}/section/${path}`);
  }

  updateSectionTitle(
    info: Partial<Section>,
    jwt: string,
    path: string
  ): Observable<Section> {
    return this.http.patch<Section>(
      `${this.url}${this.apiV1}/section/${path}`,
      info,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    ABOUT                                   */
  /* -------------------------------------------------------------------------- */

  getInfo(path: string): Observable<AboutContent> {
    return this.http.get<AboutContent>(
      `${this.url}${this.apiV1}/section/${path}/`
    );
  }

  updateInfo(
    info: Partial<AboutContent>,
    jwt: string,
    path: string,
    id: number
  ): Observable<AboutContent> {
    return this.http.patch<AboutContent>(
      `${this.url}${this.apiV1}/section/${path}/${id}`,
      info,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                  END ABOUT                                 */
  /* -------------------------------------------------------------------------- */

  // updateAbout(info: Partial<About>, jwt: string): Observable<About> {
  //   console.log(info);
  //   console.log('token: ' + jwt);
  //   return this.http.patch<About>(`${this.url}/about`, info);
  // }

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
