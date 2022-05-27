import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AboutContent,
  ContactContent,
  ExpEducation,
  ExpContent,
  PersonInfo,
  Profile,
  ProfileInfo,
  Section,
  EducationContent,
  Technology,
  Skill,
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
  /*                                 EXPERIENCE                                 */
  /* -------------------------------------------------------------------------- */

  getExperienceInfo(): Observable<ExpContent[]> {
    return this.http.get<ExpContent[]>(
      `${this.url}${this.apiV1}/experience/job/`
    );
  }

  addExpItem(jwt: string): Observable<ExpContent> {
    return this.http.post<ExpContent>(
      `${this.url}${this.apiV1}/experience/job/`,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  updateExpItem(
    info: Partial<ExpContent>,
    jwt: string,
    id: number
  ): Observable<ExpContent> {
    return this.http.patch<ExpContent>(
      `${this.url}${this.apiV1}/experience/job/${id}`,
      info,
      { headers: { Authorization: jwt } }
    );
  }

  deleteExpItem(jwt: string, id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.url}${this.apiV1}/experience/job/${id}`,
      { headers: { Authorization: jwt } }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                 EDUCATION                                 */
  /* -------------------------------------------------------------------------- */

  getEducationInfo(): Observable<EducationContent[]> {
    return this.http.get<EducationContent[]>(
      `${this.url}${this.apiV1}/education/institution/`
    );
  }

  addEducationItem(jwt: string): Observable<EducationContent> {
    return this.http.post<EducationContent>(
      `${this.url}${this.apiV1}/education/institution/`,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  updateEducationItem(
    info: Partial<EducationContent>,
    jwt: string,
    id: number
  ): Observable<EducationContent> {
    return this.http.patch<EducationContent>(
      `${this.url}${this.apiV1}/education/institution/${id}`,
      info,
      { headers: { Authorization: jwt } }
    );
  }

  deleteEducationItem(jwt: string, id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.url}${this.apiV1}/education/institution/${id}`,
      { headers: { Authorization: jwt } }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                 HardSkill                                 */
  /* -------------------------------------------------------------------------- */

  getHardSkillInfo(): Observable<Technology[]> {
    return this.http.get<Technology[]>(
      `${this.url}${this.apiV1}/hard-skill/technology/`
    );
  }

  addHardSkillItem(jwt: string): Observable<Technology> {
    return this.http.post<Technology>(
      `${this.url}${this.apiV1}/hard-skill/technology/`,
      {
        headers: { Authorization: jwt },
      }
    );
  }

  updateHardSkillItem(
    info: Partial<Technology>,
    jwt: string,
    id: number
  ): Observable<Technology> {
    return this.http.patch<Technology>(
      `${this.url}${this.apiV1}/hard-skill/technology/${id}`,
      info,
      { headers: { Authorization: jwt } }
    );
  }

  deleteHardSkillItem(jwt: string, id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.url}${this.apiV1}/hard-skill/technology/${id}`,
      { headers: { Authorization: jwt } }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                General  CRUD                                */
  /* -------------------------------------------------------------------------- */

  getData(path: string): Observable<any[]> {
    return this.http.get<Skill[]>(`${this.url}${this.apiV1}${path}`);
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
}
