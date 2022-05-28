import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';

import { ComponentBase } from '../ComponentBase';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css'],
})
export class SoftComponent extends ComponentBase implements OnInit {
  constructor(
    uiService: UiService,
    profileService: ProfileService,
    authService: AuthService
  ) {
    super(uiService, profileService, authService);

    this.path = '/soft-skill/skill/';
    this.sectionName = '/section/soft-skill';

    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
    this.profileService
      .getData(this.sectionName)
      .subscribe((v) => (this.section = v));
    this.profileService.getData(this.path).subscribe((v) => (this.content = v));
  }
}
