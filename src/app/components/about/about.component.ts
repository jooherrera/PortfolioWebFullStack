import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { AboutContent, Section, UpdateKey } from 'src/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isLogged: boolean = false;
  jtwValue: string = '';

  section: Partial<Section> = {};
  aboutContent: Partial<AboutContent> = {};

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jtwValue = v));
    this.profileService.getSection('about').subscribe((v) => {
      this.section = v;
    });
    this.profileService.getInfo('about').subscribe((v) => {
      this.aboutContent = v;
    });
  }

  ngOnInit(): void {}

  // onToogleVisibility() {
  //   console.log(value);
  //   let body = { }
  //   this.profileService
  //   .updateSectionTitle(body, this.jtwValue, 'about')
  //   .subscribe((v) => {
  //     this.section = v;
  //   });
  // }

  onUpdatedTitleValue(newValue: UpdateKey) {
    console.log(newValue);

    let body = { [newValue.key]: newValue.value };

    this.profileService
      .updateSectionTitle(body, this.jtwValue, 'about')
      .subscribe((v) => {
        this.section = v;
      });
  }

  onUpdatedValue(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateInfo(body, this.jtwValue, 'about', newValue.id!)
      .subscribe((v) => (this.aboutContent = v));
  }
}
