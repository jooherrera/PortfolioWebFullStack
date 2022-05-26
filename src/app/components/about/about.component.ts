import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { AboutContent, Section, SectionNames, UpdateKey } from 'src/types';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isLogged: boolean = false;
  jwtValue: string = '';

  section: Partial<Section> = {};
  aboutContent: Partial<AboutContent> = {};

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
    this.profileService.getSection(SectionNames.ABOUT).subscribe((v) => {
      this.section = v;
    });
    this.profileService.getInfo('about').subscribe((v) => {
      this.aboutContent = v;
    });
  }

  ngOnInit(): void {}

  onUpdatedTitleValue(newValue: UpdateKey) {
    console.log(newValue);

    let body = { [newValue.key]: newValue.value };

    this.profileService
      .updateSectionTitle(body, this.jwtValue, 'about')
      .subscribe((v) => {
        this.section = v;
      });
  }

  onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateInfo(body, this.jwtValue, 'about', newValue.id!)
      .subscribe((v) => (this.aboutContent = v));
  }
}
