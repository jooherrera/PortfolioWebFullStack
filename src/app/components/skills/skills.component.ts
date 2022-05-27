import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import {
  HardSkill,
  HardSkillItem,
  Section,
  SectionNames,
  Technology,
  UpdateKey,
} from 'src/types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  isLogged: boolean = false;
  jwtValue: string = '';

  section: Partial<Section> = {};
  content: Technology[] = [];

  constructor(
    private uiService: UiService,
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
    this.profileService
      .getSection(SectionNames.HSKILL)
      .subscribe((v) => (this.section = v));
    this.profileService.getHardSkillInfo().subscribe((v) => (this.content = v));
  }

  ngOnInit(): void {}

  ngOnChanges() {}

  onUpdatedTitleValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateSectionTitle(body, this.jwtValue, SectionNames.HSKILL)
      .subscribe((v) => {
        this.section = v;
      });
  }

  onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateHardSkillItem(body, this.jwtValue, newValue.id!)
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
      .addHardSkillItem(this.jwtValue)
      .subscribe((v) => this.content.push(v));
  }
  onRemoveItem(id: number) {
    this.profileService
      .deleteHardSkillItem(this.jwtValue, id)
      .subscribe((v) => {
        let newArray = this.content.filter((el) => el.id !== id);
        this.content = newArray;
      });
  }
}
