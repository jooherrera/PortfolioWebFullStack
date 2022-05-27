import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { EducationContent, Section, SectionNames, UpdateKey } from 'src/types';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  jwtValue: string = '';
  isLogged: boolean = false;

  section: Partial<Section> = {};
  content: EducationContent[] = [];

  constructor(
    private uiService: UiService,
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));

    this.profileService
      .getSection(SectionNames.EDUCATION)
      .subscribe((v) => (this.section = v));
    this.profileService.getEducationInfo().subscribe((v) => (this.content = v));
  }

  ngOnInit(): void {}

  onUpdatedTitleValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateSectionTitle(body, this.jwtValue, SectionNames.EDUCATION)
      .subscribe((v) => {
        this.section = v;
      });
  }

  onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateEducationItem(body, this.jwtValue, newValue.id!)
      .subscribe((v) => {
        let newArray = this.content.map((el) => {
          if (el?.id === v.id) {
            return (el = v);
          }
          return el;
        });
        this.content = newArray;
      });
  }

  onAddItem() {
    this.profileService
      .addEducationItem(this.jwtValue)
      .subscribe((v) => this.content.push(v));
  }

  onRemoveItem(id: number) {
    this.profileService.deleteExpItem(this.jwtValue, id).subscribe((v) => {
      let newArray = this.content.filter((el) => el.id !== id);
      this.content = newArray;
    });
  }
}
