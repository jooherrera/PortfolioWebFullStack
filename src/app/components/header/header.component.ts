import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';
import { ContactContent, PersonInfo, UpdateKey } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  jtwValue: string = '';

  personContent: Partial<PersonInfo> = {};
  contactContent: Partial<ContactContent> = {};

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
    this.authService.JwtState().subscribe((v) => (this.jtwValue = v));
    this.profileService.getPersonInfo().subscribe((v) => {
      this.personContent = v;
    });
    this.profileService.getContactInfo().subscribe((v) => {
      this.contactContent = v;
    });
  }

  ngOnInit(): void {}

  goTo(url: string) {
    window.open(`http://${url}`, '_blank');
  }

  onUpdatedPerson(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updatePersonInfo(body, this.jtwValue)
      .subscribe((v) => (this.personContent = v));
  }

  onUpdatedContact(newValue: UpdateKey) {
    let body = { [newValue.key]: newValue.value };
    this.profileService
      .updateContactInfo(body, this.jtwValue, newValue.id!)
      .subscribe((v) => (this.contactContent = v));
  }
}
