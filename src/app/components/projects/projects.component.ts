import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { Project, ProjectItem, UpdateKey } from 'src/types';
import { ComponentBase } from '../ComponentBase';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent
  extends ComponentBase<ProjectItem>
  implements OnInit
{
  constructor(
    uiService: UiService,
    profileService: ProfileService,
    authService: AuthService
  ) {
    super(uiService, profileService, authService);

    this.path = '/personal-project/project/';
    this.sectionName = '/section/personal-project';

    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jwtValue = v));
    this.profileService
      .getData(this.sectionName)
      .subscribe((v) => (this.section = v));
    this.profileService.getData(this.path).subscribe((v) => (this.content = v));
  }

  redirect(url: string): void {
    window.open(`http://${url}`, '_blank');
  }
}
