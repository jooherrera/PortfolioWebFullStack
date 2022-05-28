import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactContent, PersonInfo, Section } from 'src/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = environment.url;
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

  updateSectionTitle(
    info: Partial<Section>,
    jwt: string,
    path: string
  ): Observable<Section> {
    return this.http.patch<Section>(`${this.url}${this.apiV1}${path}`, info, {
      headers: { Authorization: jwt },
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                General  CRUD                                */
  /* -------------------------------------------------------------------------- */

  getData(path: string): Observable<any> {
    return this.http.get<any>(`${this.url}${this.apiV1}${path}`);
  }

  addItem(jwt: string, path: string): Observable<any> {
    return this.http.post<any>(`${this.url}${this.apiV1}${path}`, {
      headers: { Authorization: jwt },
    });
  }

  updateItem(
    info: Partial<any>,
    jwt: string,
    id: number,
    path: string
  ): Observable<any> {
    return this.http.patch<any>(`${this.url}${this.apiV1}${path}${id}`, info, {
      headers: { Authorization: jwt },
    });
  }

  deleteItem(jwt: string, id: number, path: string): Observable<any> {
    return this.http.delete<any>(`${this.url}${this.apiV1}${path}${id}`, {
      headers: { Authorization: jwt },
    });
  }
}
