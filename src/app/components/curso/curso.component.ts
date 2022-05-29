import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { CursoSchool, SchoolClass, UpdateKey } from 'src/types';
import { ComponentBase } from '../ComponentBase';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent extends ComponentBase implements OnInit {
  constructor(
    uiService: UiService,
    profileService: ProfileService,
    authService: AuthService
  ) {
    super(uiService, profileService, authService);

    this.path = '/curso/school/';
    this.sectionName = '/section/curso';

    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
    this.profileService
      .getData(this.sectionName)
      .subscribe((v) => (this.section = v));

    this.profileService
      .getData('/curso/school/all')
      .subscribe((v) => (this.content = v));
  }

  redirect(url: string): void {
    window.open(`http://${url}`, '_blank');
  }

  override onAddItem(): void {
    this.profileService
      .addItem(this.jwtValue, this.path)
      .subscribe((v) => this.content.push({ ...v, classes: [] }));
  }

  override onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateItem(body, this.jwtValue, newValue.id!, this.path)
      .subscribe((v) => {
        let newArray = this.content.map((school: any) => {
          if (school?.id === v.id) {
            let updatedSchool = {
              ...school,
              ...v,
            };
            return updatedSchool;
          }
          return school;
        });
        this.content = newArray;
      });
  }

  onAddSchoolItem(id: number) {
    this.profileService
      .addItem(this.jwtValue, `/curso/school/${id}/subject/`)
      .subscribe((v: SchoolClass) => {
        let newArray = this.content.map((school: CursoSchool) => {
          if (school.id === v.schoolId) {
            school.classes.push(v);
          }
          return school;
        });
        this.content = newArray;
      });
  }

  onRemoveSchoolItem(id: number, schoolId: number) {
    this.profileService
      .deleteItem(this.jwtValue, id, `/curso/school/subject/`)
      .subscribe((v) => {
        let newArray = this.content.map((el: CursoSchool) => {
          if (el.id === schoolId) {
            let newArr = el.classes.filter(
              (item: SchoolClass) => item.id !== id
            );
            el.classes = newArr;
          }
          return el;
        });
        this.content = newArray;
      });
  }

  onUpdatedItemValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateItem(body, this.jwtValue, newValue.id!, `/curso/school/subject/`)
      .subscribe((v: SchoolClass) => {
        let newArray = this.content.map((school: CursoSchool) => {
          if (school?.id === v.schoolId) {
            let newArr = [];
            for (const clazz of school.classes) {
              if (clazz.id === v.id) {
                newArr.push(v);
              } else {
                newArr.push(clazz);
              }
            }

            school.classes = newArr;
          }
          return school;
        });
        this.content = newArray;
      });
  }
}
